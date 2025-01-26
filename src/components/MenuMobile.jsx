import { IoMdClose } from "react-icons/io";

function MenuMobile({ setMobileMenu }) {
  return (
    <div className="fixed w-screen h-screen inset-0 backdrop-blur-xs z-50">
      <div className=" relative w-screen h-[670px] text-white text-[24px] bg-[url(/src/assets/herobg.png)] bg-cover flex flex-col justify-center items-center gap-[25px]">
        <IoMdClose
          onClick={() => setMobileMenu(false)}
          className="absolute top-5 right-5 text-secondary w-[65px] h-[34px] cursor-pointer"
        />

        <a onClick={() => setMobileMenu(false)} href="#hero">
          Home
        </a>
        <a onClick={() => setMobileMenu(false)} href="#about">
          About
        </a>
        <a onClick={() => setMobileMenu(false)} href="#projects">
          Projects
        </a>
        <button
          onClick={() => setMobileMenu(false)}
          className="w-[202px] px-[35px] py-[10px] rounded-[10px] bg-[#915EFF] border-none outline-none cursor-pointer text-white text-[24px]"
        >
          <a href="#contact">Contact</a>
        </button>
      </div>
    </div>
  );
}

export default MenuMobile;
