import { useEffect, useState } from "react";
import { Tilt } from "react-tilt";
import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import MenuMobile from "./MenuMobile";

function Header() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 200) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    addEventListener("scroll", handleScroll);

    return () => {
      removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`fixed top-0 z-20 flex items-center justify-between sm:px-[32px] py-[20px] w-screen sm:w-full ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      {mobileMenu && <MenuMobile setMobileMenu={setMobileMenu} />}
      <div className="w-screen px-5 sm:px-0 sm:w-[1440px] sm:mx-auto flex items-center justify-between">
        <a
          href="#hero"
          className="font-bold text-[18px] text-white flex items-center gap-5 "
        >
          <p>Abir | Full Stack Developer</p>
        </a>
        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className="sm:hidden"
        >
          {mobileMenu ? (
            <IoMdClose className="text-white w-[65px] h-[34px]" />
          ) : (
            <IoIosMenu className="text-white w-[65px] h-[34px]" />
          )}
        </button>
        <div className="hidden sm:flex items-center gap-[63px] text-secondary font-medium text-[18px]">
          <a
            onClick={() => setActive("home")}
            href="#hero"
            className={`${
              active === "home" ? "text-white" : "text-secondary"
            } hover:text-white transition-all duration-500`}
          >
            Home
          </a>
          <a
            onClick={() => setActive("about")}
            href="#about"
            className={`${
              active === "about" ? "text-white" : "text-secondary"
            } hover:text-white transition-all duration-500`}
          >
            About
          </a>
          <a
            onClick={() => setActive("projects")}
            href="#projects"
            className={`${
              active === "projects" ? "text-white" : "text-secondary"
            }  hover:text-white transition-all duration-500`}
          >
            Projects
          </a>
          <Tilt options={{ scale: 1.1 }}>
            <button className="  px-[35px] py-[10px] rounded-[10px] bg-[#915EFF] border-none outline-none cursor-pointer text-white">
              <a href="#contact">Contact</a>
            </button>
          </Tilt>
        </div>
      </div>
    </div>
  );
}

export default Header;
