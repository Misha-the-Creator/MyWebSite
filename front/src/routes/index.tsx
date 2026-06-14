import { createFileRoute } from "@tanstack/react-router";
import { IconOne } from "../../public/me_svg/iconc_components/Icon1";
import { IconTwo } from "../../public/me_svg/iconc_components/Icon2";
import { IconThree } from "../../public/me_svg/iconc_components/Icon3";
import { IconFour } from "../../public/me_svg/iconc_components/Icon4";
import { useState, useEffect } from "react";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const mapFont = ["i", "v"];
  const headerStr1 = "Mikhail Zuev";

  const [theme, setTheme] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light",
  );
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e: MediaQueryListEvent) => {
      setTheme(e.matches ? "dark" : "light");
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);
  console.log(`Поменял тему на ${theme}`);
  return (
    <div className="flex flex-col max-h-screen">
      <div className="flex justify-center flex-wrap mx-auto my-auto">
        <div className="w-1/2 md:w-1/4 lg:w-118">
          <IconOne theme={theme} />
        </div>

        <div className="w-1/2 md:w-1/4 lg:w-118">
          <IconTwo theme={theme} />
        </div>

        <div className="w-1/2 md:w-1/4 lg:w-118">
          <IconThree theme={theme} />
        </div>

        <div className="w-1/2 md:w-1/4 lg:w-118">
          <IconFour theme={theme} />
        </div>
      </div>
      <div className="font-googlesans text-[30vw] lg:text-[16vw] mx-auto mt-auto -z-2">
        <p className="leading-none overflow-hidden">
          {headerStr1.split("").map((char, index) =>
            mapFont.includes(char) ? (
              <span key={index} className="font-pixel">
                {char}
              </span>
            ) : (
              char
            ),
          )}
        </p>
      </div>
    </div>
  );
}
