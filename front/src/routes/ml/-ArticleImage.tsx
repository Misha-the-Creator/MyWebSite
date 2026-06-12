interface ArticleImageProps {
  index: number;
  images: {
    image: string;
    width: number;
    height: number;
    caption: string;
  }[];
}

export function ArticleImage({ index, images }: ArticleImageProps) {
  return (
    <figure className="text-center my-6">
      <img
        src={`data:image/jpeg;base64,${images[index].image}`}
        alt=""
        className="mx-auto block"
        width={images[index].width}
        height={images[index].height}
      />
      <figcaption className="text-sm text-gray-500 mt-2">
        {images[index].caption}
      </figcaption>
    </figure>
  );
}
