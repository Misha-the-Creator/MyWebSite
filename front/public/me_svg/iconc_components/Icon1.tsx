import FirstIconDark from "/me_svg/dark_theme/Group 47.svg";
import FirstIconWhite from "/me_svg/light_theme/Group 47.svg";

export function IconOne({ theme }: { theme: string }) {
  return (
    <img
      src={theme == "dark" ? FirstIconDark : FirstIconWhite}
      alt="LangingSVG1"
      className="w-full h-auto"
    />
  );
}
