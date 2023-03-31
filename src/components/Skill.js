import { Skills, Tools } from "../utils/skills";
import { useState } from "react";
import { motion } from "framer-motion";
const Skill = () => {
  const colors = [
    "violet",
    "indigo",
    "blue",
    "green",
    "yellow",
    "orange",
    "red",
  ];

  const [skillClass, setSkillClass] = useState({ elementText: "", color: "" });

  const hoverShadow = (e) => {
    const color = colors[Math.floor(Math.random() * colors.length)];

    setSkillClass({
      elementText: e.target.innerText,
      color: `${color}-border`,
    });
  };

  const unHover = () => {
    setSkillClass({ elementText: "", color: "" });
  };
  return (
    <section className="flex flex-col items-center h-auto py-28">
      <h3 className="text-3xl mb-6">
        Professional <span className="text-heading font-bold">Skillset</span>{" "}
      </h3>
      <div className="flex items-center max-w-5xl mx-auto flex-wrap gap-4 justify-center">
        {Skills.map((skill) => {
          return (
            <motion.div
              key={skill.id}
              onMouseLeave={unHover}
              onMouseEnter={hoverShadow}
              whileHover={{ scale: 1.05 }}
              className={`w-36 h-24 cursor-pointer darkShadow flex items-center justify-center flex-col gap-1 rounded tranisiton-all duration-100 border-2 ease-in-out ${
                skill.name === skillClass.elementText ? skillClass.color : ""
              }`}
            >
              <span className="text-4xl">
                <skill.logo />
              </span>
              <span className="text-center text-sm">{skill.name}</span>
            </motion.div>
          );
        })}
      </div>
      <h3 className="text-3xl mt-9 mb-6">
        <span className="text-heading font-bold">Tools</span> I use
      </h3>
      <div className="flex items-center max-w-5xl mx-auto flex-wrap gap-4 justify-center">
        {Tools.map((tool) => {
          return (
            <motion.div
              whileHover={{ scale: 1.05 }}
              key={tool.id}
              onMouseLeave={unHover}
              onMouseEnter={hoverShadow}
              className={`w-36 h-24 cursor-pointer darkShadow flex items-center justify-center flex-col gap-1 rounded tranisiton-all duration-100 border-2 ease-in-out ${
                tool.name === skillClass.elementText ? skillClass.color : ""
              }`}
            >
              <span className="text-4xl">
                <tool.logo />
              </span>
              <span className="text-center text-sm">{tool.name}</span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
export default Skill;
