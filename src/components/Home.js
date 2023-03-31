import { useContext } from "react";
import HomeImg from "../assets/home1.png";
import ThemeContext from "../context/ThemeContext";
import { BsArrowRightShort } from "react-icons/bs";
import { BsLinkedin, BsGithub, BsFileEarmarkTextFill } from "react-icons/bs";
import { githubLink, linkedinLink, mail, resumeLink } from "../utils/constants";
import { MdMail } from "react-icons/md";
import { motion } from "framer-motion";
import Typing from "./Typing";
const Home = () => {
  const { theme } = useContext(ThemeContext) || "dark";

  return (
    <>
      <section className={`flex items-center h-auto flex-col`}>
        <motion.div
          className={`flex items-center max-w-5xl mx-auto h-screen gap-40`}
        >
          <motion.div
            initial={{ x: "-100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-3/5 flex justify-center flex-col "
          >
            <h2 className="text-4xl">
              Hello! <span className="wave">👋</span> Nice to meet you.
            </h2>
            <h3 className="text-7xl my-6">
              I'm{" "}
              <span className="font-semibold text-heading drop-shadow-xl">
                Aditi Jain
              </span>
            </h3>
            <div className="text-heading text-3xl font-bold drop-shadow-xl">
              <Typing />
            </div>

            <a href="#about">
              <div
                className={`my-6 flex justify-center items-center w-fit cursor-pointer hover:gap-2 transition-all ease-in-out ${
                  theme == "dark"
                    ? "hover:text-blue-300"
                    : "hover:text-blue-600"
                } `}
              >
                <span>About Me </span>
                <span>
                  <BsArrowRightShort />
                </span>
              </div>
            </a>
          </motion.div>
          <motion.div
            initial={{ x: "100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-2/5"
          >
            <img src={HomeImg} alt="Home" />
          </motion.div>
        </motion.div>

        {/* about */}
        <div
          id="about"
          className="flex items-center max-w-5xl mx-auto justify-between h-[80vh]"
        >
          <div className="about_img">
            {/* <img src={AboutImg} alt="about" /> */}
          </div>
          <div className="w-1/2">
            <h3 className="text-5xl font-bold text-heading mb-4">Aditi Jain</h3>
            <span className="rounded-md bg-gray-300 px-2 py-1 text-gray-700 font-semibold w-auto text-sm">
              Software Developer
            </span>
            <p className="text-justify mt-4">
              I am pursuing B.Tech in Computer Science and Engineering from
              Krishna Engineering College. I am a self-taught developer from
              Delhi, India. I am motivated software engineering undergraduate
              with{" "}
              <span className="text-heading font-semibold">
                6 months of working experience in developing applications
              </span>
              . I have passion for learning and interested in modern
              technologies and tech stack. I have comprehensive knowledge in
              various web development technologies such as{" "}
              <span className="text-heading font-semibold">
                JavaScript, ReactJS, Tailwind CSS, and Firebase.{" "}
              </span>
              This skill set enables me to build responsive and interactive
              websites with excellent functionality features.
            </p>

            <motion.a 
              target="_blank"
              href={resumeLink}
              className="mt-4 px-3 py-2 rounded-md bg-heading drop-shadow-xl flex items-center w-28 gap-2 text-darkHeading "
            >
              <span>Resume </span>
              <span>
                <BsFileEarmarkTextFill />
              </span>
            </motion.a>
          </div>

          <div className="flex gap-10 text-2xl flex-col justify-between items-center ">
            <motion.a
              whileHover={{
                scale: 1.2,
              }}
              whileTap={{ scale: 0.9 }}
              href={`mailto: ${mail}`}
            >
              <MdMail />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              href={githubLink}
              target="_blank"
            >
              <BsGithub />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              href={linkedinLink}
              target="_blank"
            >
              <BsLinkedin />
            </motion.a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
