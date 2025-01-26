import { techStack } from "../TechStack";
import SkillsCard from "./SkillsCard";

function Skills() {
  return (
    <div className="mx-8 sm:mx-0 sm:w-[700px] flex flex-wrap gap-[70px] text-white items-center justify-center mt-[50px]">
      {techStack.map((item) => (
        <SkillsCard item={item} key={item.name} />
      ))}
    </div>
  );
}

export default Skills;
