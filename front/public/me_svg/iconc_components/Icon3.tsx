import ThirdIconDark from "/me_svg/dark_theme/Group 49.svg";
import ThirdIconWhite from "/me_svg/light_theme/Group 49.svg";

export function IconThree({ theme }: { theme: string }) {
  return (
    <img
      src={theme == "dark" ? ThirdIconDark : ThirdIconWhite}
      alt="LangingSVG1"
      className="w-full h-auto"
    />
  );
}
