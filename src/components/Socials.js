import { AiFillMessage } from "react-icons/ai";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { githubLink, linkedinLink, mail } from "../utils/constants";
import { MdMail } from "react-icons/md";
import { motion } from "framer-motion";
import { useContext, useState } from "react";
import ThemeContext from "../context/ThemeContext";
const Socials = () => {
  const { theme } = useContext(ThemeContext)||"dark";
  const [showSocials, setShowSocials] = useState(false);
  return (
    <motion.div className="z-10 fixed lg:hidden top-16 right-4">
      <motion.div
        whileTap={{ scale: 0.8 }}
        className={` w-10 h-10 cursor-pointer mb-3 ${
          theme == "dark"
            ? "bg-darkHeading text-darkBg"
            : "bg-gray-700 text-darkHeading"
        }  rounded-full drop-shadow-xl flex items-center justify-center`}
        onClick={() => {
          setShowSocials((prev) => !prev);
        }}
      >
        <AiFillMessage />
      </motion.div>
      {showSocials && (
        <motion.div
          className="flex  flex-col items-center gap-4 text-xl"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
        >
          <motion.a whileHover={{scale:1.2}} href={`mailto: ${mail}`}>
            <MdMail />
          </motion.a>
          <motion.a whileHover={{scale:1.2}} href={githubLink} target="_blank">
            <BsGithub />
          </motion.a>
          <motion.a whileHover={{scale:1.2}} href={linkedinLink} target="_blank">
            <BsLinkedin />
          </motion.a>
        </motion.div>
      )}
    </motion.div>
  );
};
export default Socials;
