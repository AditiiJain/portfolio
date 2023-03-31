import { BsLinkedin, BsGithub } from "react-icons/bs";
import { githubLink, linkedinLink, mail } from "../utils/constants";
import { MdMail } from "react-icons/md";
import { motion } from "framer-motion";
const Footer = () => {
  return (
    <footer className="hidden lg:flex justify-between px-8 py-4">
      <div>Developed by Aditi Jain</div>
      <div>No Copyright © issues.</div>
      <div className="flex gap-4 text-xl">
        <motion.a whileTap={{ scale: 0.8 }} href={`mailto: ${mail}`}>
          <MdMail />
        </motion.a>
        <motion.a whileTap={{ scale: 0.8 }} href={githubLink} target="_blank">
          <BsGithub />
        </motion.a>
        <motion.a whileTap={{ scale: 0.8 }} href={linkedinLink} target="_blank">
          <BsLinkedin />
        </motion.a>
      </div>
    </footer>
  );
};
export default Footer;
