import { Link } from "@tanstack/react-router";

function NavigationBar() {
  return (
    <nav className="flex flex-col justify-center-safe mx-auto mt-5 bg-gray-200 dark:bg-black relative z-50 lg:flex-row lg:mt-0">
      <li
        key={"ml"}
        className="list-none max-w-screen w-screen lg:max-w-max text-center p-3 cursor-pointer border-b border-t border-black dark:border-white lg:border-none"
      >
        <Link to="/ml">Машинное обучение</Link>
      </li>
      <li
        key={"dl"}
        className="list-none max-w-screen text-center p-3 cursor-pointer border-b border-black dark:border-white lg:border-none"
      >
        <Link to="/dl">Глубокое обучение</Link>
      </li>
      <li
        key={"llm"}
        className="list-none max-w-screen text-center p-3 cursor-pointer border-b border-black dark:border-white lg:border-none"
      >
        <Link to="/llm">LLM</Link>
      </li>
      <li
        key={"dev"}
        className="list-none max-w-screen text-center p-3 cursor-pointer border-b border-black dark:border-white lg:border-none"
      >
        <Link to="/dev">Разработка</Link>
      </li>
      <li
        key={"live"}
        className="list-none max-w-screen text-center p-3 cursor-pointer border-b border-black dark:border-white lg:border-none"
      >
        <Link to="/live">Жизнь</Link>
      </li>
      <li
        key={"about"}
        className="list-none max-w-screen text-center p-3 cursor-pointer border-b border-black dark:border-white lg:border-none"
      >
        <Link to="/about">Обо мне</Link>
      </li>
    </nav>
  );
}

export default NavigationBar;
