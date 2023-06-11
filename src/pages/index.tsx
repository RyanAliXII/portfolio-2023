import { PageProps } from "gatsby";
import * as React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { VscSmiley } from "react-icons/vsc";
import { FiDownload } from "react-icons/fi";
import { gsap, Power2 } from "gsap";
import Projects from "../components/Projects";
const IndexPage: React.FC<PageProps> = () => {
  const heroTextName = React.useRef<HTMLDivElement>(null);
  const taglineText = React.useRef<HTMLDivElement>(null);
  const ctas = React.useRef<HTMLDivElement>(null);

  React.useLayoutEffect(() => {
    const timeline = gsap.timeline();
    timeline.fromTo(
      taglineText.current,
      { translateY: -300, opacity: 0 },
      { translateY: 0, opacity: 1, duration: 0.3, ease: Power2.easeOut }
    );
    timeline.fromTo(
      heroTextName.current,
      { translateY: -300, opacity: 0 },
      { translateY: 0, opacity: 1, duration: 0.3, ease: Power2.easeOut }
    );
    timeline.fromTo(
      ctas.current,
      { translateY: 300, opacity: 0 },
      { translateY: 0, opacity: 1, duration: 0.4, ease: Power2.easeOut }
    );
  }, []);

  return (
    <main className="overflow-scroll h-screen snap-y snap-mandatory">
      <header className="w-full  h-28 sticky top-0 bg-white z-10 ">
        <div className="container h-full  mx-auto flex items-center justify-between p-10 gap-5 bg-white">
          <span className="font-bold text-2xl">RYAN ALI</span>
          <nav className="hidden lg:block">
            <ul className="flex gap-5">
              <li>
                <a
                  href="#"
                  className="font-bold underline underline-offset-2 decoration-blue-500 decoration-2"
                >
                  {" "}
                  Home{" "}
                </a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
          <div className="ml-16 hidden lg:block">
            <button className="p-3 bg-blue-500 text-white rounded-3xl flex gap-1 items-center">
              <FiDownload />
              Resume
            </button>
          </div>
        </div>
      </header>
      <section className="container mx-auto gap-3 p-10 flex flex-col h-screen justify-center lg:gap-5 snap-start ">
        <div className="text-3xl sm:text-5xl font-bold" ref={heroTextName}>
          <span>Hello, I'm </span>
          <span className="text-blue-500"> Ryan Ali</span>
        </div>
        <div>
          <h1
            className="text-xl sm:text-4xl text-gray-700  font-bold lg:w-8/12"
            ref={taglineText}
          >
            Unlock the Full Potential of the Web with My Expertise by Your Side
          </h1>
        </div>
        <div className="flex gap-2 flex-col sm:flex-row" ref={ctas}>
          <button className="px-4 py-3  sm:text-xl bg-blue-500 text-white rounded-3xl flex items-center gap-1 hover:border hover:border-blue-500 hover:bg-white hover:text-blue-500 transition delay-100 justify-center">
            <AiOutlineMail />
            Get In Touch
          </button>
          <button className="px-6 py-3 sm:text-xl border border-blue-500 text-blue-500 gap-1 rounded-3xl flex items-center hover:bg-blue-500  hover:text-white transition delay-100 justify-center">
            <VscSmiley />
            About Me
          </button>
        </div>
      </section>

      <Projects></Projects>
    </main>
  );
};

export default IndexPage;
