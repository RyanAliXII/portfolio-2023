import { PageProps } from "gatsby";
import * as React from "react";
import { AiOutlineArrowRight, AiOutlineCopy } from "react-icons/ai";
import { FiDownload } from "react-icons/fi";
import { gsap, Power1, Power2 } from "gsap";
import Projects from "../components/Projects";
import "react-toastify/dist/ReactToastify.css";
import useThemeToggler from "../hooks/useThemeToggler";
import { ToastContainer, toast } from "react-toastify";
import { FaLinkedin, FaMoon } from "react-icons/fa";
import { MdSunny } from "react-icons/md";
import About from "../components/About";
const IndexPage: React.FC<PageProps> = () => {
  const heroTextName = React.useRef<HTMLDivElement>(null);
  const taglineText = React.useRef<HTMLDivElement>(null);
  const ctas = React.useRef<HTMLDivElement>(null);
  const arrowRef = React.useRef<HTMLSpanElement>(null);
  const descText = React.useRef<HTMLDivElement>(null);
  const getInTouchRef = React.useRef<HTMLDivElement>(null);
  React.useLayoutEffect(() => {
    const timeline = gsap.timeline();

    timeline.fromTo(
      heroTextName.current,
      { translateY: -300, opacity: 0 },
      { translateY: 0, opacity: 1, duration: 0.4, ease: Power2.easeOut }
    );

    timeline.fromTo(
      descText.current,
      { translateY: 300, opacity: 0 },
      { translateY: 0, opacity: 1, duration: 0.4 }
    );
    timeline.fromTo(
      ctas.current,
      { translateY: 300, opacity: 0 },
      { translateY: 0, opacity: 1, duration: 0.4 }
    );
    timeline.fromTo(
      taglineText.current,
      { translateX: -300, opacity: 0 },
      { translateX: 0, opacity: 1, duration: 0.4, ease: Power2.easeOut }
    );
    gsap.to(arrowRef.current, {
      marginLeft: "10px",
      yoyo: true,
      repeat: -1,
      ease: Power1.easeInOut,
      duration: 1,
    });
  }, []);
  const { theme, toggle } = useThemeToggler();
  return (
    <>
      <main className="overflow-scroll h-screen lg:snap-y  scroll-smooth dark:bg-gray-900 ">
        <header className="w-full h-20 lg:h-28 fixed top-0 bg-white z-10 dark:bg-gray-900 ">
          <div className="w-11/12 lg:w-10/12 h-full mx-auto flex items-center justify-between p-10 gap-5 bg-white dark:bg-gray-900">
            <span className="font-bold sm:text-2xl dark:text-gray-100">
              RYAN
            </span>

            <div className="flex gap-2 items-center">
              <a
                href="https://drive.google.com/uc?export=download&id=1YiTJKF6q6Id-QwreT1Xsf7YHUzmlezy2"
                download={true}
                className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs md:text-sm px-5 py-2.5 me-2 mb-2  dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                <div className="flex gap-2 items-center">
                  <FiDownload />
                  CV
                </div>
              </a>
              <button
                type="button"
                className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none  focus:ring-gray-300 font-medium rounded-lg text-xs md:text-sm  px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
                onClick={toggle}
              >
                {theme === "light" && <FaMoon />}
                {theme === "dark" && <MdSunny />}
              </button>
            </div>
          </div>
        </header>
        <section className="mx-auto gap-3 p-10 flex flex-col h-screen justify-center lg:gap-5 w-11/12 lg:w-7/12  ">
          <div className="text-3xl sm:text-5xl font-bold" ref={heroTextName}>
            <span className="dark:text-gray-100">Hello, I'm </span>

            <span className="text-blue-600"> Ryan Ali</span>
          </div>
          <div>
            <h1
              className="text-xl sm:text-4xl text-gray-700  font-bold lg:w-full dark:text-gray-300"
              ref={taglineText}
            >
              Let's Build Something Amazing.
            </h1>
          </div>
          <div ref={descText}>
            <p className="font-semibold  sm:text-lg text-gray-600 dark:text-gray-300">
              As a software developer, I help organizations and individuals
              create easy-to-use, elegant web applications tailored to their
              unique needs and workflows.
            </p>
          </div>
          <div ref={ctas}>
            <a
              role="button"
              onClick={() => {
                getInTouchRef.current?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
              className="underline sm:text-lg underline-offset-8 decoration-2 flex items-center decoration-blue-700 dark:decoration-blue-600 dark:text-gray-100"
            >
              Get in touch with me
              <span ref={arrowRef}>
                <AiOutlineArrowRight className="mt-1.5 sm:text-lg" />
              </span>
            </a>
          </div>
        </section>

        <Projects theme={theme}></Projects>
        <About />
        <div
          className="mx-auto w-11/12 lg:w-7/12 mt-32 flex flex-col gap-3 p-2"
          ref={getInTouchRef}
        >
          <h2 className="text-2xl font-bold underline underline-offset-8 dark:text-gray-100 decoration-2 decoration-blue-600">
            Get In Touch
          </h2>
          <p className="dark:text-gray-100">
            Whether you're interested in collaborating, discussing an
            opportunity, or simply wanting to say hello, I'm eager to connect
            with you! Feel free to send me an email or a message on LinkedIn. I
            look forward to hearing from you.
          </p>
          <div className="flex">
            <button
              type="button"
              onClick={async () => {
                const clipboard = navigator.clipboard;
                const EMAIL = "ryanali.developer@gmail.com";
                clipboard.writeText(EMAIL);
                toast.success("Email has been copied.");
              }}
              id="getInTouch"
              className="text-blue-600 hover:text-white border border-blue-700 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
            >
              <div className="flex items-center gap-2">
                <AiOutlineCopy /> Copy Email
              </div>
            </button>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/ryan-ali-931a74224/"
              className="text-gray-900  hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none  focus:ring-gray-300 font-medium rounded-lg text-xs md:text-sm  px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
            >
              <div className="flex items-center gap-2">
                <FaLinkedin />
                LinkedIn
              </div>
            </a>
          </div>
        </div>

        <footer className="w-full h-32 flex items-center justify-center">
          <span className="font-bold text-gray-600"> &#169; 2024 Ryan Ali</span>
        </footer>
      </main>

      <ToastContainer
        position="top-center"
        autoClose={1000}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        hideProgressBar={true}
        draggable
        pauseOnHover
        theme={theme}
      />
    </>
  );
};

export default IndexPage;
