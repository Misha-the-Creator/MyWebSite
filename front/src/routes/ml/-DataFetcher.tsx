import "katex/dist/katex.min.css";
import { LaTeX } from "./-LaTeX";
import { JSXGraph } from "./-JSXgraph";
import { ArticleImage } from "./-ArticleImage";
import * as runtime from "react/jsx-runtime";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { evaluate } from "@mdx-js/mdx";
import type { ComponentType } from "react";

function DataFetcher(props: any) {
  const { route } = props;
  const { isPending, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: async () => {
      console.log("FETCH!");
      const response_article = await fetch(
        `http://localhost:8000/ml/get-article/${route}`,
      );
      const response_image = await fetch(
        `http://localhost:8000/ml/get-article-image/${route}`,
      );
      const articleObject = {
        article: await response_article.json(),
        images: await response_image.json(),
      };
      return await articleObject;
    },
  });

  const [Content, setContent] = useState<ComponentType<{
    images: string[];
  }> | null>(null);

  useEffect(() => {
    if (!data?.article.text && !data?.images) return;
    console.log(`Наша дата ${data.images}`);

    const images = data.images.result;

    evaluate(data.article.text, {
      ...runtime,
      useMDXComponents: () => ({
        LaTeX,
        ArticleImage: ({ index }: { index: number }) => (
          <ArticleImage index={index} images={images} />
        ),
        JSXGraph,
        h1: ({ children }) => (
          <h2 className="text-4xl font-semibold text-center mb-20">
            {children}
          </h2>
        ),
      }),
    }).then((mod) => {
      setContent(() => mod.default);
    });
  }, [data?.article.text]);

  if (isPending) return <div>Loading...</div>;

  if (error) return <div>An error has occurred: {error.message}</div>;

  if (!Content) return <div>Rendering MDX...</div>;

  return <Content images={data.images.given_images} />;
}

export default DataFetcher;
