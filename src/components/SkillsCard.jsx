import { Tilt } from "react-tilt";

function SkillsCard({ item }) {
  return (
    <Tilt options={{ max: 45, scale: 1.5, speed: 450 }}>
      <div className=" shadow-stone shadow-md">
        <div className="  flex flex-col justify-center items-center gap-2 w-full h-full">
          <img src={item.icon} className="w-[50px] h-[50px]"></img>
          <p className="text-center text-secondary"> {item.name}</p>
        </div>
      </div>
    </Tilt>
  );
}

export default SkillsCard;
