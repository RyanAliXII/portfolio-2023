import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import coopHomeImage from "../images/coop_app/coop_home.png";
import coopDashboardImage from "../images/coop_app/coop_dashboard.png";
import librarySystemDashboardImage from "../images/library_system/dashboard.png";
import librarySystemHomeImage from "../images/library_system/library-system-home.png";
import librarySearchImage from "../images/library_system/library-system-search.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { useInView } from "react-intersection-observer";
import { gsap, Power2 } from "gsap";
import tabulationHomeImage from "../images/tabulation/tabulation_home.png";
import tabulationDashboardImage from "../images/tabulation/tabulation_dashboard.png";
import contactTracingImage from "../images/contact-tracing.png";
import codeboxImage from "../images/codebox.png";
import { MdArrowOutward } from "react-icons/md";
import liftLandingImage from "../images/lift-gym/landing.png";
import liftDashboardImage from "../images/lift-gym/dashboard.png";
import liftLoginPageImage from "../images/lift-gym/login.png";
import blogLandingImage from "../images/blog-app/landing.png";
import blogDashboardImage from "../images/blog-app/dashboard.png";
import blogImage from "../images/blog-app/blog.png";
import blogLoginImage from "../images/blog-app/login.png";

const Projects = ({ theme }: { theme: "dark" | "light" }) => {
  const [ref, inView] = useInView({ threshold: 0.2 });
  const [isMounted, setMounted] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const ACCEPTABLE_WINDOW_WIDTH = 1500;
  const { ref: inRecentRef, inView: isInRecentView } = useInView({
    threshold: 0.25,
  });
  const { ref: inDevelopmentRef, inView: isInDevelopmentView } = useInView({
    threshold: 1,
  });
  const { ref: oldRef, inView: isInOldView } = useInView({ threshold: 1 });
  const recentNavList = useRef<HTMLAnchorElement>(null);
  const inDevelopmentNavList = useRef<HTMLAnchorElement>(null);
  const oldNavList = useRef<HTMLAnchorElement>(null);

  const animateToActive = (line: Element, text: Element) => {
    gsap.fromTo(
      line,
      { width: "1.25rem", borderColor: "rgb(156 163 175)" },
      { width: "2.5rem", borderColor: "rgb(55 65 81)" }
    );
    // gsap.fromTo(
    //   text,
    //   { color: "rgb(148 163 184)" },
    //   { color: "rgb(51 65 85)" }
    // );
  };

  const animateToInactive = (line: Element, text: Element) => {
    gsap.fromTo(
      line,
      { width: "2.5rem", borderColor: "rgb(55 65 81)" },
      { width: "1.25rem", borderColor: "rgb(156 163 175)" }
    );
    // gsap.fromTo(
    //   text,
    //   { color: "rgb(51 65 85)" },
    //   { color: "rgb(148 163 184)" }
    // );
  };
  useEffect(() => {
    setMounted(true);

    const onWindowResize = (event: Event) => {
      if (window.innerWidth < ACCEPTABLE_WINDOW_WIDTH) {
        if (!navRef.current) return;
        navRef.current.style.display = "none";
      }
    };
    window.addEventListener("resize", onWindowResize);

    return () => {
      window.removeEventListener("resize", onWindowResize);
    };
  }, []);
  useLayoutEffect(() => {
    if (inView && window.innerWidth >= ACCEPTABLE_WINDOW_WIDTH) {
      gsap.fromTo(
        navRef.current,
        {
          display: "none",
          translateX: -300,
          opacity: 0,
        },
        {
          translateX: 0,
          opacity: 1,
          display: "flex",
          position: "fixed",
          ease: Power2.easeOut,
        }
      );
    }

    if (!inView && isMounted && window.innerWidth >= ACCEPTABLE_WINDOW_WIDTH) {
      gsap.fromTo(
        navRef.current,
        {
          translateX: 0,
          display: "flex",
          position: "fixed",
          ease: Power2.easeOut,
        },
        {
          display: "none",
          opacity: 0,
          translateX: -300,
        }
      );
    }
  }, [inView]);

  useLayoutEffect(() => {
    const line = recentNavList.current?.querySelector(".line");
    const text = recentNavList.current?.querySelector(".text");
    if (!line || !text) return;
    if (isInRecentView && window.innerWidth >= ACCEPTABLE_WINDOW_WIDTH) {
      animateToActive(line, text);
    }
    if (
      !isInRecentView &&
      isMounted &&
      window.innerWidth >= ACCEPTABLE_WINDOW_WIDTH
    ) {
      animateToInactive(line, text);
    }
  }, [isInRecentView]);
  useLayoutEffect(() => {
    const line = inDevelopmentNavList.current?.querySelector(".line");
    const text = inDevelopmentNavList.current?.querySelector(".text");
    if (!line || !text) return;
    if (isInDevelopmentView && window.innerWidth >= ACCEPTABLE_WINDOW_WIDTH) {
      animateToActive(line, text);
    }
    if (
      !isInDevelopmentView &&
      isMounted &&
      window.innerWidth >= ACCEPTABLE_WINDOW_WIDTH
    ) {
      animateToInactive(line, text);
    }
  }, [isInDevelopmentView]);
  useLayoutEffect(() => {
    const line = oldNavList.current?.querySelector(".line");
    const text = oldNavList.current?.querySelector(".text");
    if (!line || !text) return;
    if (isInOldView && window.innerWidth >= ACCEPTABLE_WINDOW_WIDTH) {
      animateToActive(line, text);
    }
    if (
      !isInOldView &&
      isMounted &&
      window.innerWidth >= ACCEPTABLE_WINDOW_WIDTH
    ) {
      animateToInactive(line, text);
    }
  }, [isInOldView]);

  return (
    <section className="w-11/12 lg:w-7/12 mx-auto mt-10 md:mt-32 p-2 ">
      <div
        ref={navRef}
        style={{
          top: "30%",
          left: "10%",
          display: "none",
          position: "fixed",
        }}
      >
        <ul className="flex flex-col gap-2">
          <li className="font-bold ">
            <a
              className="flex items-center gap-3 text-gray-700 dark:text-gray-100"
              ref={recentNavList}
            >
              <span
                className="w-5 border-t-2 border-gray-400 line"
                id="#line"
              ></span>
              <span className="text">RECENT</span>
            </a>
          </li>
          <li className="font-bold">
            <a
              className="flex items-center gap-3 text-gray-700 dark:text-gray-100"
              ref={inDevelopmentNavList}
            >
              <span
                className="w-5 border-t-2 border-gray-700 line"
                ref={inDevelopmentNavList}
              ></span>
              <span className="text">IN DEVELOPMENT</span>
            </a>
          </li>
          <li className="font-bold">
            <a
              className="flex items-center gap-3 text-gray-700 dark:text-gray-100"
              ref={oldNavList}
            >
              <span className="w-5 border-t-2 border-gray-400 line"></span>
              <span className="text">OLD</span>
            </a>
          </li>
        </ul>
      </div>
      <h2 className="text-3xl md:text-4xl mb-7 font-bold underline underline-offset-8 self-start dark:text-gray-100 decoration-2 decoration-blue-600">
        Projects
      </h2>
      <div ref={ref}>
        <section>
          <div className="flex items-center flex-col gap-4" ref={inRecentRef}>
            <ProjectCard
              title="STI College Munoz-EDSA Library System"
              githubLink="https://github.com/RyanAliXII/sti-munoz-library-system"
              desc="The library system for STI College Munoz-EDSA is designed to assist the librarian in efficiently managing various library tasks, including catalog management, circulation, inventory, and generating reports. It also offers convenient features for students, such as online book borrowing, library premise reservations, and penalty viewing, all accessible through the system."
              images={[
                {
                  alt: "library-system-home-image",
                  value: librarySystemHomeImage,
                },
                {
                  alt: "library-system-dashboard-image",
                  value: librarySystemDashboardImage,
                },
                {
                  alt: "library-system-search-image",
                  value: librarySearchImage,
                },
              ]}
              stacks={["Go", "React", "TypeScript", "PostgreSQL"]}
            />
            <ProjectCard
              title="Lift Fitness Gym Web Application"
              githubLink="https://github.com/RyanAliXII/sti-munoz-library-system"
              desc="The gym management system for Lift Fitness Gym is designed to assist the gym manager in efficiently handling various operational tasks, including subscription management, package creation, revenue tracking, report generation, and coach hiring."
              images={[
                {
                  alt: "lift-gym-home-image",
                  value: liftLandingImage,
                },
                {
                  alt: "lift-gym-dashboard-image",
                  value: liftDashboardImage,
                },
                {
                  alt: "lift-gym-login-image",
                  value: liftLoginPageImage,
                },
              ]}
              stacks={["Go", "TypeScript", "Vue.JS", "Rollup", "MySQL"]}
            />
            <ProjectCard
              title="Caloocan City Cooperative Development and Coordinating Office
               Web Portal"
              githubLink="https://github.com/RyanAliXII/cooperative-app"
              desc="A multi-tenant cooperative application that efficiently monitors the activities of members as well as the cooperative's savings, shares, and loans. The application includes a dedicated portal for government authorities, enabling them to effectively monitor cooperatives, rank them based on performance, and provide rewards accordingly."
              images={[
                {
                  alt: "cooperative-home-image",
                  value: coopHomeImage,
                },
                {
                  alt: "cooperative-dashboard-image",
                  value: coopDashboardImage,
                },
              ]}
              stacks={["TypeScript", "SvelteKit", "PostgreSQL"]}
            />
            <ProjectCard
              githubLink="https://github.com/RyanAliXII/sti-munoz-tabulator"
              title="STI College Munoz-EDSA Academic Week Tabulation"
              desc="A tabulation system for STI College Munoz-EDSA's Academic Week 2023. It allows the committee to update team scores and enables teams to view their scores and rankings. This system enhances efficiency and transparency in managing scores for a fair competition."
              images={[
                {
                  alt: "tabulation-home-image",
                  value: tabulationHomeImage,
                },
                {
                  alt: "tabulation-dashboard-image",
                  value: tabulationDashboardImage,
                },
              ]}
              stacks={[
                "TypeScript",
                "Express",
                "Webpack",
                "Vue.JS",
                "PostgreSQL",
              ]}
            />
          </div>
        </section>

        <section className="mt-20">
          <div
            className="flex items-center flex-col gap-4"
            ref={inDevelopmentRef}
          >
            <ProjectCard
              title="Blog Application"
              githubLink="https://github.com/RyanAliXII/blog-application"
              desc="The blog application is designed to empower users in crafting and managing their online presence with ease. It offers intuitive tools for creating, editing, and publishing posts, moderating comments, and tracking engagement through detailed analytics, all within a sleek, user-friendly interface. Whether you're a seasoned blogger or just starting out, this app streamlines your content creation process and helps you grow your audience with confidence."
              images={[
                {
                  alt: "blog-application-landing-page",
                  value: blogLandingImage,
                },
                {
                  alt: "blogApplication-dashboard",
                  value: blogDashboardImage,
                },
                {
                  alt: "blog-image",
                  value: blogImage,
                },
                {
                  alt: "blog-login-image",
                  value: blogLoginImage,
                },
              ]}
              stacks={["C#", "ASP.NET", "Vue.JS", "Rollup", "MSSQL"]}
            />
          </div>
        </section>
        <section className="mt-20">
          <div className="flex items-center flex-col gap-4" ref={oldRef}>
            <ProjectCard
              title="Contact Tracing Progressive Web Application"
              githubLink="https://github.com/RyanAliXII/ContactTracing"
              desc="A contact tracing application that allows school's to track and monitor the spread of infectious diseases, such as COVID-19. Contact tracing involves identifying and notifying individuals who may have come into close contact with an infected person, allowing them to take necessary precautions to prevent further transmission."
              images={[
                {
                  alt: "contact-tracing-app-image",
                  value: contactTracingImage,
                },
              ]}
              stacks={["JavaScript", "Express", "React", "MongoDB"]}
            />
            <ProjectCard
              title="Codebox"
              githubLink="https://github.com/RyanAliXII/codebox"
              desc="The project was very simple and inspired by Hastebin. This allows code or text sharing by sending link to other people."
              images={[
                {
                  alt: "code-box-image",
                  value: codeboxImage,
                },
              ]}
              stacks={["PHP", "JavaScript", "MySQL"]}
            />
          </div>
        </section>
      </div>
    </section>
  );
};

const ProjectCard = ({
  title,
  desc,
  images,
  githubLink,
  stacks = [],
}: {
  title: string;
  desc: string;
  githubLink?: string;
  images?: {
    alt: string;
    value: any;
  }[];
  stacks?: string[];
}) => {
  return (
    <a
      href={githubLink}
      target="_blank"
      className="flex flex-col items-center lg:flex-row lg:justify-around rounded border  dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
    >
      {(images?.length ?? 0) > 1 && (
        <div className="h-full p-5 mt-5 lg:mt-0 max-w-[300px]">
          <Swiper
            slidesPerView={1}
            pagination={{ clickable: true }}
            modules={[Pagination]}
          >
            {images?.map((image, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="w-full">
                    <img
                      className="object-fill"
                      src={image.value}
                      loading="lazy"
                      alt={image.alt}
                    ></img>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      )}
      {(images?.length ?? 0) === 1 && (
        <div className="w-11/12  h-full p-5 mt-5 lg:mt-0 max-w-[300px] rounded">
          <div className="w-full flex items-center ru">
            <img
              src={images?.[0].value}
              loading="lazy"
              className="object-fill"
              alt={images?.[0].alt}
            ></img>
          </div>
        </div>
      )}
      <div className="flex flex-col gap-4 py-4 px-2 ">
        <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-100 ">
          <span>{title}</span>
          <span className="inline-block">
            <MdArrowOutward className="pt-1" />
          </span>
        </h2>
        <p className="text-lg dark:text-gray-300">{desc}</p>
        <ul className="grid grid-cols-3 max-w-[300px]">
          {stacks?.map((stack) => {
            return (
              <li
                key={stack}
                className="text-blue-600 bg-blue-500/10  font-medium rounded-full text-xs px-3 py-2 text-center me-2 mb-2 dark:bg-blue-500/10 "
              >
                {stack}
              </li>
            );
          })}
        </ul>
      </div>
    </a>
  );
};

export default Projects;
