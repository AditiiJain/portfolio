import Image from "../assets/image_aditi.png"
const ProjectCard = () => {
  return (
    <>
      <div className="h-80 relative flex flex-col bg-gray-200 m-5 p-4  rounded-2xl w-80 transition-all drop-shadow-xl">
        <div className="sticky flex m-auto overflow-y-hidden h-max">
          <img
            src={Image}
            alt=""
            className="transition-all max-w-full max-h-full object-cover m-auto"
          />
        </div>
        <br />
        <h4 className="text-lg font-semibold text-gray-700">kggkkfkjfkj</h4>
        <h4 className="text-lg font-semibold  text-gray-700">kggkkfkjfkj</h4>
        <h4 className="text-lg font-semibold text-gray-700">kggkkfkjfkj</h4>
      </div>
    </>
  );
};
export default ProjectCard;
