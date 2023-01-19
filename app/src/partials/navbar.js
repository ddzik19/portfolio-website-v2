import useWindowDimensions from "../hooks/use-window-dimensions";
import Fade from "react-reveal/Fade";
import CV from "../assets/Damian_Dzik_CV.pdf";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { useEffect, useState } from "react";

const Navbar = () => {
  const { width, height } = useWindowDimensions();
  const { menuOpen, setIsMenuOpen } = useState(false);

  let burgerClass = "";

  useEffect(() => {
    if (menuOpen) {
      burgerClass = "mr-[0px]";
    } else {
      burgerClass = "mr-[500px]";
    }
  });

  return (
    <>
      {width > 768 ? (
        <Fade right duration={1500}>
          <div className="grid grid-cols-1 gap-10 right-0 fixed py-5 text-center font-semibold mr-5 text-[20px]">
            <hr className="mx-auto mt-[-20px] w-[1px] h-[150px] bg-white" />
            <a href="#home" className="hover:text-yellow">
              Home
            </a>
            <a href="#my-work" className="hover:text-yellow">
              My Work
            </a>
            <a href="#contact-form" className="hover:text-yellow">
              Contact Me
            </a>
            <a
              href={CV}
              target="_blank"
              className="rounded-lg font-semibold border-[2px] border-yellow hover:bg-yellow hover:text-black p-2 transition-all"
              rel="noreferrer"
            >
              CV
            </a>
          </div>
        </Fade>
      ) : (
        <Fade right duration={1500}>
          <div
            className={`w-fit h-fit fixed overflow-hidden z-100 bg-deep right-0 mx-10`}
          >
            <button className="fixed mt-[-50px]" onClick={!setIsMenuOpen}>
              {!menuOpen ? (
                <GiHamburgerMenu className="transition-all" size={40} />
              ) : (
                <RxCross1 className="transition-all" size={40} />
              )}
            </button>
            <aside
              className={`text-center text-[20px] mt-[70px] w-full h-fit transition-all ${burgerClass}`}
            >
              <a href="#home" className="block hover:text-yellow my-8">
                Home
              </a>
              <a href="#my-work" className="block hover:text-yellow my-8">
                My Work
              </a>
              <a href="#contact-form" className="block hover:text-yellow my-8">
                Contact Me
              </a>
              <a
                href={CV}
                target="_blank"
                className="mx-auto block w-[150px] my-8 rounded-lg font-semibold border-[2px] border-yellow hover:bg-yellow hover:text-black p-2 transition-all"
                rel="noreferrer"
              >
                CV
              </a>
            </aside>
          </div>
        </Fade>
      )}
    </>
  );
};

export default Navbar;
