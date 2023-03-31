import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { FaGraduationCap } from "react-icons/fa";
import { RiCodeBoxFill, RiGitBranchFill } from "react-icons/ri";
import { BsPersonVcardFill, BsLinkedin, BsGithub } from "react-icons/bs";
import { MdMail } from "react-icons/md";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import { githubLink, linkedinLink, mail } from "../utils/constants";
import { motion } from "framer-motion";

const HeaderSmall = () => {
  const { theme } = useContext(ThemeContext) || "dark";
  return (
    <nav
      className={`z-10 w-screen fixed bottom-0 ${
        theme == "dark" ? "bg-slate-900 " : "bg-gray-700"
      } group transition-all duration-300 ease-in`}
    >
      <ul className="p-0 m-0 flex items-center justify-center h-full">
        

        <li className="w-full">
          <Link
            to="/"
            className="flex items-center justify-center h-20 text-white grayscale opacity-70 transition-all duration-300 hover:grayscale-0 hover:opacity-100 hover:bg-gray-800"
          >
            <AiFillHome className="mx-6 text-2xl max-w-[2rem]" />
           
          </Link>
        </li>
        <li className="w-full">
          <Link
            to="skills"
            className="flex items-center h-20 justify-center  text-white grayscale opacity-70 transition-all duration-300 hover:grayscale-0 hover:opacity-100 hover:bg-gray-800"
          >
            <RiCodeBoxFill className="mx-6 text-2xl max-w-[2rem]" />
          
          </Link>
        </li>
        {/* <li className="w-full">
          <Link
            to="education"
            className="flex items-center h-20 justify-center  text-white grayscale opacity-70 transition-all duration-300 hover:grayscale-0 hover:opacity-100 hover:bg-gray-800"
          >
            <FaGraduationCap className="mx-6 text-2xl max-w-[2rem]" />
           
          </Link>
        </li> */}
        <li className="w-full">
          <Link
            to="projects"
            className="flex items-center h-20 justify-center  text-white grayscale opacity-70 transition-all duration-300 hover:grayscale-0 hover:opacity-100 hover:bg-gray-800"
          >
            <RiGitBranchFill className="mx-6 text-2xl max-w-[2rem]" />
        
          </Link>
        </li>
        <li className="w-full">
          <Link
            to="contact"
            className="flex items-center h-20 justify-center  text-white grayscale opacity-70 transition-all duration-300 hover:grayscale-0 hover:opacity-100 hover:bg-gray-800"
          >
            <BsPersonVcardFill className="mx-6 text-2xl max-w-[2rem]" />
           
          </Link>
        </li>

        {/* <li className="w-full mt-auto">
          <div className="flex items-center h-20 text-white grayscale opacity-70 transition-all duration-300 hover:grayscale-0 hover:opacity-100 hover:bg-gray-800">
            <span className="mx-6 text-2xl max-w-[2rem] text-white font-thin border">
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
        </li> */}
      </ul>
    </nav>
  );
};
export default HeaderSmall;
