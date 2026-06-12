import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useState } from "react";
import Bayes from "../../../public/images/Bayes.png";
import Line from "../../../public/images/Line.png";
import MLine from "../../../public/images/MLine.png";
import "katex/dist/katex.min.css";
import katex from "katex";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/ml/")({
  component: RouteComponent,
});

function RouteComponent() {
  const [isHovered, setIsHovered] = useState<{
    theme: string;
    id: number;
    image: string;
    formula: string;
  } | null>(null);

  const themesArray = [
    {
      theme: "Линейная регрессия",
      route: "linear-regression",
      id: 1,
      image: Line,
      formula: "y = \\beta_0 + \\beta_1 x",
    },
    {
      theme: "Множественная линейная регрессия",
      route: "multiple-linear-regression",
      id: 2,
      image: MLine,
      formula: "y = \\beta_0 + \\beta_1 x_1 + \\beta_2 x_2 + \\ldots",
    },
    {
      theme: "Байесовская теория классификации",
      route: "bayesian-clasification-theory",
      id: 3,
      image: Bayes,
      formula: "P(A|B) = \\frac{P(B|A)\\cdot P(A)}{P(B)}",
    },
  ];

  return (
    <div className="relative flex flex-col mt-20 font-googlesans text-3xl font-bold">
      {themesArray.map((elem) => (
        <motion.button
          whileHover={{ filter: "blur(2px)" }}
          key={elem.id}
          className="uppercase mb-10 mx-auto w-auto"
          onMouseEnter={() => setIsHovered(elem)}
          onMouseLeave={() => setIsHovered(null)}
        >
          <Link to={`/ml/$route`} params={{ route: elem.route }}>
            {elem.theme}
          </Link>
        </motion.button>
      ))}
      {isHovered && (
        <>
          <motion.img
            src={isHovered.image}
            alt={isHovered.theme}
            className="absolute top-0 left-20 w-60 border"
            initial={{ opacity: 0, filter: "blur(2px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-100 right-20 text-xl"
            initial={{ opacity: 0, filter: "blur(2px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            dangerouslySetInnerHTML={{
              __html: katex.renderToString(isHovered.formula, {
                throwOnError: false,
                displayMode: true,
              }),
            }}
          />
        </>
      )}
    </div>
  );
}
