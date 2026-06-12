import { useEffect, useRef, useId } from "react";
import JXG from "jsxgraph";

interface JSXGraphProps {
  expression: string;
  width?: string | number;
  height?: string | number;
  boardOptions?: Record<string, unknown>;
}

export function JSXGraph({
  expression,
  width = "100%",
  height = 400,
  boardOptions = {},
}: JSXGraphProps) {
  const uid = useId().replace(/:/g, "jxg");
  const boardRef = useRef<ReturnType<typeof JXG.JSXGraph.initBoard> | null>(
    null,
  );

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      if (boardRef.current) {
        JXG.JSXGraph.freeBoard(boardRef.current);
        boardRef.current = null;
      }

      const board = JXG.JSXGraph.initBoard(uid, {
        axis: true,
        boundingbox: [-5, 5, 5, -5],
        keepaspectratio: false,
        showCopyright: false,
        showNavigation: true,
        ...boardOptions,
      });

      boardRef.current = board;

      try {
        const fn = new Function("board", "JXG", expression);
        fn(board, JXG);
      } catch (err) {
        console.error("[JSXGraph] Ошибка:", err);
      }
    });

    return () => {
      cancelAnimationFrame(frame);
      if (boardRef.current) {
        JXG.JSXGraph.freeBoard(boardRef.current);
        boardRef.current = null;
      }
    };
  }, [uid, expression, JSON.stringify(boardOptions)]);

  return (
    <div
      id={uid}
      style={{ width, height, minHeight: height }}
      className="jxgbox rounded-lg overflow-hidden"
    />
  );
}
