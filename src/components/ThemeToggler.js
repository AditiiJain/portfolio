import { BsBrightnessHighFill, BsFillMoonStarsFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
const ThemeToggler = () => {
  const { theme, setTheme } = useContext(ThemeContext) || "dark";
  return (
    <motion.div
      whileTap={{ scale: 0.8 }}
      className={`z-10 fixed w-10 h-10 cursor-pointer ${
        theme == "dark"
          ? "bg-darkHeading text-darkBg"
          : "bg-gray-700 text-darkHeading"
      } top-4 right-4 rounded-full drop-shadow-xl flex items-center justify-center`}
      onClick={() => {
        setTheme(theme == "dark" ? "light" : "dark");
      }}
    >
      {theme == "dark" ? <BsBrightnessHighFill /> : <BsFillMoonStarsFill />}
    </motion.div>
  );
};
export default ThemeToggler;
