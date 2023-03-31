import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { FaAngleDoubleRight } from "react-icons/fa";

import { FaGraduationCap } from "react-icons/fa";
import { RiCodeBoxFill, RiGitBranchFill } from "react-icons/ri";
import { BsPersonVcardFill, BsLinkedin, BsGithub } from "react-icons/bs";
import { MdMail } from "react-icons/md";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import { githubLink, linkedinLink, mail } from "../utils/constants";
import { motion } from "framer-motion";


const Header = () => {
  const { theme } = useContext(ThemeContext) || "dark";
  return (
    <nav
      className={`z-10 w-20 h-screen fixed ${
        theme == "dark" ? "bg-slate-900 " : "bg-gray-700"
      } hover:w-64 group transition-all duration-300 ease-in`}
    >
      <ul className="p-0 m-0 flex flex-col items-center h-full">
        <li className="font-bold  mb-4 text-center tracking-wide text-2xl text-white w-full">
          <div className="flex items-center h-20 text-white grayscale opacity-70 transition-all duration-300 hover:grayscale-0 hover:opacity-100 bg-gray-800 group-hover:justify-between">
            <span className="hidden ml-4 group-hover:block text-xl font-semibold">Welcome</span>
            <FaAngleDoubleRight className="rotate-0 transition-all duration-300 group-hover:-rotate-180 mx-6 text-2xl min-w-[2rem] " />
          </div>
        </li>

        <li className="w-full">
          <Link
            to="/"
            className="flex items-center h-20 text-white grayscale opacity-70 transition-all duration-300 hover:grayscale-0 hover:opacity-100 hover:bg-gray-800"
          >
            <AiFillHome className="mx-6 text-2xl min-w-[2rem]" />
            <motion.span
              initial={{ opacity: 0, x: 400 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 400 }}
              className="hidden ml-4 group-hover:block "
            >
              Home
            </motion.span>
          </Link>
        </li>
        <li className="w-full">
          <Link
            to="skills"
            className="flex items-center h-20 text-white grayscale opacity-70 transition-all duration-300 hover:grayscale-0 hover:opacity-100 hover:bg-gray-800"
          >
            <RiCodeBoxFill className="mx-6 text-2xl min-w-[2rem]" />
            <motion.span
              className="hidden ml-4 group-hover:block "
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 200 }}
            >
              Skills
            </motion.span>
          </Link>
        </li>
        {/* <li className="w-full">
          <Link
            to="education"
            className="flex items-center h-20 text-white grayscale opacity-70 transition-all duration-300 hover:grayscale-0 hover:opacity-100 hover:bg-gray-800"
          >
            <FaGraduationCap className="mx-6 text-2xl min-w-[2rem]" />
            <motion.span
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 200 }}
              className="hidden ml-4 group-hover:block "
            >
              Education
            </motion.span>
          </Link>
        </li> */}
        <li className="w-full">
          <Link
            to="projects"
            className="flex items-center h-20 text-white grayscale opacity-70 transition-all duration-300 hover:grayscale-0 hover:opacity-100 hover:bg-gray-800"
          >
            <RiGitBranchFill className="mx-6 text-2xl min-w-[2rem]" />
            <motion.span
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 200 }}
              className="hidden ml-4 group-hover:block "
            >
              Projects
            </motion.span>
          </Link>
        </li>
        <li className="w-full">
          <Link
            to="contact"
            className="flex items-center h-20 text-white grayscale opacity-70 transition-all duration-300 hover:grayscale-0 hover:opacity-100 hover:bg-gray-800"
          >
            <BsPersonVcardFill className="mx-6 text-2xl min-w-[2rem]" />
            <motion.span
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 200 }}
              className="hidden ml-4 group-hover:block "
            >
              Contact
            </motion.span>
          </Link>
        </li>

        <li className="w-full mt-auto">
          <div className="flex items-center h-20 text-white grayscale opacity-70 transition-all duration-300 hover:grayscale-0 hover:opacity-100 hover:bg-gray-800">
            <span className="mx-6 text-2xl min-w-[2rem] text-white font-thin border">
              AJ<span className="blink">.</span>
            </span>

            <span className="hidden ml-4 group-hover:flex gap-4 text-xl ">
              <a href={`mailto: ${mail}`} className="hover:animate-spin">
                <MdMail />
              </a>
              <a
                href={githubLink}
                className="hover:animate-spin"
                target="_blank"
              >
                <BsGithub />
              </a>
              <a
                href={linkedinLink}
                className="hover:animate-spin"
                target="_blank"
              >
                <BsLinkedin />
              </a>
            </span>
          </div>
        </li>
      </ul>
    </nav>
  );
};
export default Header;
