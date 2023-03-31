import Typewriter from "typewriter-effect";

function Typing() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          "Web Dev Enthusiast",
          "Quick Learner",
          "Curious",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 100,
      }}
    />
  );
}
export default Typing;
