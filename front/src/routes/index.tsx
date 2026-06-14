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
  // const headerStr2 = "Zue{v}";

  return (
    <div className="font-googlesans text-[20vw] lg:text-[10vw] content-end justify ml-10 -mt-10 -z-2">
      <p className="">
        {headerStr1.split("").map((char) =>
          mapFont.includes(char) ? (
            <span key={char} className="font-pixel">
              {char}
            </span>
          ) : (
            char
          ),
        )}
      </p>
      <p className="-mt-10">
        {headerStr2.split("").map((char) =>
          mapFont.includes(char) ? (
            <span key={char} className="font-pixel">
              {char}
            </span>
          ) : (
            char
          ),
        )}
      </p>
    </div>
  );
}
