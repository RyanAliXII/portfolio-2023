import { PageProps } from "gatsby";
import * as React from "react";
import { AiOutlineArrowRight, AiOutlineCopy } from "react-icons/ai";
import { FiDownload } from "react-icons/fi";
import { gsap, Power1, Power2 } from "gsap";
import Projects from "../components/Projects";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
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

  return (
    <>
      <main className="overflow-scroll h-screen lg:snap-y lg:snap-mandatory scroll-smooth">
        <header className="w-full h-20 lg:h-28 fixed top-0 bg-white z-10 ">
          <div className="w-11/12 lg:w-10/12 h-full  mx-auto flex items-center justify-between p-10 gap-5 bg-white">
            <span className="font-bold sm:text-2xl  ">RYAN ALI</span>

            <div className="ml-16">
              <a
                href="https://drive.google.com/u/0/uc?id=1RIMe_W7ZpB7ZIbfLVb_O1j4Jx03do_6r&export=download"
                download={true}
                className="p-3 text-xs sm:text-base bg-blue-500 text-white rounded-3xl flex gap-1 items-center"
              >
                <FiDownload />
                Resume
              </a>
            </div>
          </div>
        </header>
        <section className="mx-auto gap-3 p-10 flex flex-col h-screen justify-center lg:gap-5 snap-start w-11/12 lg:w-7/12  ">
          <div className="text-3xl sm:text-5xl font-bold" ref={heroTextName}>
            <span>Hello, I'm </span>

            <span className="text-blue-500"> Ryan Ali</span>
          </div>
          <div>
            <h1
              className="text-xl sm:text-4xl text-gray-700  font-bold lg:w-full"
              ref={taglineText}
            >
              Let's Build Something Amazing.
            </h1>
          </div>
          <div ref={descText}>
            <p className="font-semibold  sm:text-lg text-gray-600">
              As a software developer, I help organizations as well as
              individuals in developing easy, elegant web application for their
              businesses. Simple to use and will fit their business workflow.
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
              className="underline sm:text-lg underline-offset-2 decoration-2 flex items-center"
            >
              Get in touch with me
              <span ref={arrowRef}>
                <AiOutlineArrowRight className="mt-1.5 sm:text-lg" />
              </span>
            </a>
          </div>
        </section>

        <Projects></Projects>
        <div
          className="mx-auto snap-start w-11/12 lg:w-7/12 mt-9 flex flex-col gap-3 p-2"
          ref={getInTouchRef}
        >
          <h2 className="text-2xl font-bold underline underline-offset-2 decoration-2 decoration-blue-600">
            Get In Touch
          </h2>
          <p>
            Whether you're interested in collaborating, discussing an
            opportunity, or simply wanting to say hello, I'm eager to connect
            with you! Feel free to send me an email. I look forward to hearing
            from you.
          </p>
          <div>
            <button
              onClick={async () => {
                const clipboard = navigator.clipboard;
                const EMAIL = "ryanali.developer@gmail.com";
                clipboard.writeText(EMAIL);
                toast.success("Email has been copied.");
              }}
              className="px-3 py-2 border border-blue-500 text-blue-500 rounded flex items-center gap-1"
              id="getInTouch"
            >
              <AiOutlineCopy /> Copy Email
            </button>
          </div>
        </div>

        <footer className="w-full h-32 flex items-center justify-center">
          <span className="font-bold text-gray-600"> &#169; 2023 Ryan Ali</span>
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
        theme="light"
      />
    </>
  );
};

export default IndexPage;
