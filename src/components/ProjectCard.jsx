import { Tilt } from "react-tilt";
import github from "../assets/projects/github.png";
import { FaLink } from "react-icons/fa";

function ProjectCard({ item }) {
  return (
    <Tilt options={{ max: 45, scale: 1, speed: 450 }}>
      <div className="w-[360px] h-[455px] rounded-2xl bg-tertiary p-5 flex flex-col ">
        <div className="relative w-full h-[230px]">
          {/* website link */}
          <div
            onClick={() => window.open(item.website_link, "_blank")}
            className="absolute top-3 right-[70px] black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <FaLink className="text-white w-1/2 h-1/2" />
          </div>
          {/* github link */}
          <div
            onClick={() => window.open(item.source_code_link, "_blank")}
            className="absolute top-3 right-3 black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <img
              src={github}
              alt="source code"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
          {/* website image */}
          <img
            src={item.image}
            className="w-full h-full object-cover rounded-2xl"
          ></img>
        </div>
        <div className="mt-5 flex flex-col ">
          <h1 className="text-white font-bold text-[24px]">{item.name}</h1>
          <p className="mt-2 text-secondary text-[14px]">{item.description}</p>
        </div>
        <div className="mt-auto flex flex-wrap gap-2">
          {item.tags.map((tag, index) => (
            <p
              className={`text-[14px] ${tag.color}`}
              key={`${tag.name} - ${index}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </Tilt>
  );
}

export default ProjectCard;
