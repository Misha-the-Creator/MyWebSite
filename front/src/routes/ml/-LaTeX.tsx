import { useEffect, useRef } from "react";
import katex from "katex";
import "katex/dist/katex.min.css";

interface LaTeXProps {
  expression: string;
  block?: boolean;
}

export function LaTeX({ expression, block = false }: LaTeXProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (ref.current) {
      katex.render(expression, ref.current, {
        displayMode: block,
        throwOnError: false,
      });
    }
  }, [expression, block]);

  return <span ref={ref} />;
}
