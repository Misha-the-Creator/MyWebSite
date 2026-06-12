import { Link } from "@tanstack/react-router";
import { memo } from "react";

function LogoML() {
  return (
    <header className="ml-5 text-2xl">
      <Link to="/">
        M<span className="font-pixel">/</span>Z
      </Link>
    </header>
  );
}

export default memo(LogoML);
