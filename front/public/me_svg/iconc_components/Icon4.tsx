import FourthIconDark from "/me_svg/dark_theme/Group 50.svg";
import FourthIconWhite from "/me_svg/light_theme/Group 50.svg";

export function IconFour({ theme }: { theme: string }) {
  return (
    <img
      src={theme == "dark" ? FourthIconDark : FourthIconWhite}
      alt="LangingSVG1"
      className="w-full h-auto"
    />
  );
}
