import { useEffect, useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { GoLightBulb } from "react-icons/go";


export default function ThemeToggle() {
  const [dark, setDark] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="
        px-3 py-2 rounded-full
        dark:bg-white bg-black
        transition
      "
    >
      {dark ? <GoLightBulb  className="text-2xl text-black"/> : <MdDarkMode className="text-2xl text-white"/>}
    </button>
  );
}
