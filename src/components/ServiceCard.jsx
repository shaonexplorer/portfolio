import { Tilt } from "react-tilt";

function ServiceCard({ item }) {
  return (
    <Tilt options={{ max: 45, scale: 1, speed: 450 }}>
      <div className="w-[220px] h-[240px] green-pink-gradient rounded-[20px] p-[1px]">
        <div className="w-full h-full bg-tertiary rounded-[20px] flex flex-col items-center justify-center gap-10 px-5">
          <img src={item.icon} className="w-16 h-16"></img>
          <p className="text-white text-center font-bold text-[20px] tracking-wider">
            {item.title}
          </p>
        </div>
      </div>
    </Tilt>
  );
}

export default ServiceCard;
