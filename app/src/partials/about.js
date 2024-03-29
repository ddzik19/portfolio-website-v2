import Fade from "react-reveal/Fade";
import { Header } from "../components/header";
import useWindowDimensions from "../hooks/use-window-dimensions";
import ProfilePic from "../assets/profile-pic.png";
const About = () => {
  const { width, height } = useWindowDimensions();

  return (
    <>
      {width > 1280 ? (
        <div className="grid grid-cols-2 padding">
          <div>
            <Fade bottom distance="10%" duration={1500}>
              <Header>About Me</Header>
            </Fade>
            <Fade bottom distance="10%" duration={1500}>
              <p className="text-[16px]">
                Hi, my name is Damian Dzik and I enjoy creating/developing
                websites!
                <br />
                <br />
                My passion for web development sparked in 2019 when I was
                attending a Software Development PLC (Post Leaving Certificate)
                course. During this course I experienced many different kinds of
                development but the one that caught my eye the most was frontend
                development.
                <br />
                <br />
                Today I have the honor to work as a {" "}
                <span className="text-yellow text-[18px]">
                  Frontend Developer{" "}
                  <span className="text-white">for{" "}</span>
                  <a
                    className="underline"
                    href="https://2cubed.ie/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    2Cubed
                  </a>
                </span>
              </p>
            </Fade>
          </div>
          <div>
            <Fade bottom distance="10%" duration={1500}>
              <img
                className="w-[300px] h-[300px] bg-yellow my-[100px] mx-auto rounded-full shadow-[0_0px_80px_-15px_rgb(255,251,0)]"
                src={ProfilePic}
                alt="Picture of me"
              />
            </Fade>
          </div>
        </div>

      ) : width > 768 ? (

        <div className="padding">
          <Fade bottom distance="10%" duration={1500}>
            <Header>About Me</Header>
          </Fade>
          <Fade bottom distance="10%" duration={1500}>
            <p className="text-[16px]">
              Hi, my name is Damian Dzik and I enjoy creating/developing
              websites!
              <br />
              <br />
              My passion for web development sparked in 2019 when I was
              attending a Software Development PLC (Post Leaving Certificate)
              course. During this course I experienced many different kinds of
              development but the one that caught my eye the most was frontend
              development.
              <br />
              <br />
              Today I have the honor to work as a {" "}
              <span className="text-yellow text-[18px]">
                Frontend Developer{" "}
                <span className="text-white">for{" "}</span>
                <a
                  className="underline"
                  href="https://2cubed.ie/"
                  target="_blank"
                  rel="noreferrer"
                >
                  2Cubed
                </a>
              </span>
            </p>
          </Fade>
          <Fade bottom distance="10%" duration={1500}>
            <img
              className="w-[300px] h-[300px] bg-yellow my-[100px] mx-auto rounded-full shadow-[0_0px_80px_-15px_rgb(255,251,0)]"
              src={ProfilePic}
              alt="Picture of me"
            />
          </Fade>
        </div>
      ) : (

        <div className="padding">
          <Fade bottom distance="10%" duration={1500}>
            <Header>About Me</Header>
          </Fade>
          <Fade bottom distance="10%" duration={1500}>
            <p className="text-[16px]">
              Hi, my name is Damian Dzik and I enjoy creating/developing
              websites!
              <br />
              <br />
              My passion for web development sparked in 2019 when I was
              attending a Software Development PLC (Post Leaving Certificate)
              course. During this course I experienced many different kinds of
              development but the one that caught my eye the most was frontend
              development.
              <br />
              <br />
              Today I have the honor to work as a {" "}
              <span className="text-yellow text-[18px]">
                Frontend Developer{" "}
                <span className="text-white">for{" "}</span>
                <a
                  className="underline"
                  href="https://2cubed.ie/"
                  target="_blank"
                  rel="noreferrer"
                >
                  2Cubed
                </a>
              </span>
            </p>
          </Fade>
          <Fade bottom distance="10%" duration={1500}>
            <img
              className="w-[300px] bg-yellow my-[100px] mx-auto rounded-full shadow-[0_0px_80px_-15px_rgb(255,251,0)]"
              src={ProfilePic}
              alt="Picture of me"
            />
          </Fade>
        </div>
      )
      }
    </>
  );
};

export default About;
