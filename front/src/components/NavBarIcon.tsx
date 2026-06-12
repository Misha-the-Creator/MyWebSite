export default function NavBarIcon({ isMenuOpen }: { isMenuOpen: boolean }) {
  return (
    <img
      src={isMenuOpen ? "/cross.svg" : "/menu.svg"}
      alt="NavBarIcon"
      className="w-8 h-8 mr-5 dark:invert"
    />
  );
}
