import { services } from "../Services";
import ServiceCard from "./ServiceCard";
import Skills from "./Skills";

function About() {
  return (
    <div className="w-screen sm:w-full bg-primary" id="about">
      <div className=" w-screen sm:w-[1440px] mx-auto py-[85px] flex flex-col items-center justify-center gap-[20px]">
        <h1 className="text-[36px] text-white font-bold ">About</h1>
        <span className="w-[263px] h-[1px] bg-white"></span>
        <p className="text-[18px] text-secondary mx-5 sm:mx-[270px] text-center mt-5">
          I'm a skilled software developer with experience in JavaScript, and
          expertise in frameworks like React, Node.js, Tailwind CSS and Express.
          I'm a quick learner and collaborate closely with clients to create
          efficient, scalable, and user-friendly solutions that solve real-world
          problems. Let's work together to bring your ideas to life!
        </p>
        <div className="flex flex-col sm:flex-row gap-10 mt-[20px]">
          {services.map((service) => (
            <ServiceCard key={service.title} item={service} />
          ))}
        </div>
        <Skills />
      </div>
    </div>
  );
}

export default About;
