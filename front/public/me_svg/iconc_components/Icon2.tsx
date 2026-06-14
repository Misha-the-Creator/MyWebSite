import SecondIconDark from "/me_svg/dark_theme/Group 48.svg";
import SecondIconWhite from "/me_svg/light_theme/Group 48.svg";

export function IconTwo({ theme }: { theme: string }) {
  return (
    <img
      src={theme == "dark" ? SecondIconDark : SecondIconWhite}
      alt="LangingSVG1"
      className="w-full h-auto"
    />
  );
}
