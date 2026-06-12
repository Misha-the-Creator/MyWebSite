import { Outlet, createRootRoute } from "@tanstack/react-router";
import LogoML from "#/components/LogoML";
import NavigationBar from "#/components/NavigationBar";

import "../styles.css";
import { useState } from "react";
import NavBarIcon from "#/components/NavBarIcon";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="bg-gray-200 dark:bg-black dark:text-white grid grid-rows-[auto_1fr] min-h-screen relative z-1">
        <div className="hidden lg:flex flex-row font-googlesans pt-3 items-center-safe z-2">
          <LogoML />
          <NavigationBar />
        </div>

        <div
          className="flex flex-row justify-between py-2  
          mx-5 mt-5 items-center lg:hidden"
        >
          <LogoML />
          <div
            className="block text-5xl cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <NavBarIcon isMenuOpen={isMenuOpen} />
            <div
              className={`absolute left-0 w-full flex flex-col items-center gap-3 text-lg ${isMenuOpen ? "opacity-100" : "hidden opacity-0"}`}
            >
              <NavigationBar />
            </div>
          </div>
        </div>
        <Outlet />
      </div>
    </>
  );
}
