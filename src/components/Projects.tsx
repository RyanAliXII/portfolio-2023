import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import coopHomeImage from "../images/coop_app/coop_home.png";
import coopDashboardImage from "../images/coop_app/coop_dashboard.png";
import librarySystemDashboardImage from "../images/library_system/library-system-dashboard.png";
import librarySystemHomeImage from "../images/library_system/library-system-home.png";
import librarySearchImage from "../images/library_system/library-system-search.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useInView } from "react-intersection-observer";
import { gsap, Power2 } from "gsap";
import tabulationHomeImage from "../images/tabulation/tabulation_home.png";
import tabulationDashboardImage from "../images/tabulation/tabulation_dashboard.png";
import contactTracingImage from "../images/contact-tracing.png";
import codeboxImage from "../images/codebox.png";
const animateToActive = (line: Element, text: Element) => {
  gsap.fromTo(
    line,
    { width: "1.25rem", borderColor: "rgb(156 163 175)" },
    { width: "2.5rem", borderColor: "rgb(55 65 81)" }
  );
  gsap.fromTo(text, { color: "rgb(148 163 184)" }, { color: "rgb(51 65 85)" });
};

const animateToInactive = (line: Element, text: Element) => {
  gsap.fromTo(
    line,
    { width: "2.5rem", borderColor: "rgb(55 65 81)" },
    { width: "1.25rem", borderColor: "rgb(156 163 175)" }
  );
  gsap.fromTo(text, { color: "rgb(51 65 85)" }, { color: "rgb(148 163 184)" });
};
const Projects = () => {
  const [ref, inView] = useInView({ threshold: 0.25 });
  const [isMounted, setMounted] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const ACCEPTABLE_WINDOW_WIDTH = 1500;
  const { ref: inRecentRef, inView: isInRecentView } = useInView({
    threshold: 1,
  });
  const { ref: inDevelopmentRef, inView: isInDevelopmentView } = useInView({
    threshold: 1,
  });
  const { ref: oldRef, inView: isInOldView } = useInView({ threshold: 1 });
  const recentNavList = useRef<HTMLAnchorElement>(null);
  const inDevelopmentNavList = useRef<HTMLAnchorElement>(null);
  const oldNavList = useRef<HTMLAnchorElement>(null);
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
    <div className="flex  flex-col  lg:flex-row justify-center gap-10">
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
              className="flex items-center gap-3 text-gray-400"
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
              className="flex items-center gap-3 text-gray-400"
              ref={inDevelopmentNavList}
            >
              <span
                className="w-5 border-t-2 border-gray-400 line"
                ref={inDevelopmentNavList}
              ></span>
              <span className="text">IN DEVELOPMENT</span>
            </a>
          </li>
          <li className="font-bold">
            <a
              className="flex items-center gap-3 text-gray-400"
              ref={oldNavList}
            >
              <span className="w-5 border-t-2 border-gray-400 line"></span>
              <span className="text">OLD</span>
            </a>
          </li>
        </ul>
      </div>

      <div ref={ref}>
        <section className="container p-10  mx-auto snap-start scroll-mt-24  mt-5">
          <h1 className="text-center text-5xl font-bold mb-16">Projects</h1>

          <div className="flex items-center flex-col gap-4" ref={inRecentRef}>
            <ProjectCard
              title="Caloocan City Cooperative Development and Coordinating Office
               Web Portal"
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
            />
            <ProjectCard
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
            />
          </div>
        </section>
        <section className="container p-10  mx-auto snap-start scroll-mt-36 ">
          <div
            className="flex items-center flex-col gap-4"
            ref={inDevelopmentRef}
          >
            <ProjectCard
              title="STI College Munoz-EDSA Library System"
              desc="The library system for STI College Munoz-EDSA is designed to assist the librarian in efficiently managing various library tasks, including catalog management, circulation, inventory, and generating reports. It also offers convenient features for students, such as online book borrowing, library premise reservations, and penalty viewing, all accessible through their Microsoft accounts."
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
            />
          </div>
        </section>
        <section className="container p-10  mx-auto snap-start ">
          <div className="flex items-center flex-col gap-4" ref={oldRef}>
            <ProjectCard
              title="Contact Tracing Progressive Web Application"
              desc="A contact tracing application that allows school's to track and monitor the spread of infectious diseases, such as COVID-19. Contact tracing involves identifying and notifying individuals who may have come into close contact with an infected person, allowing them to take necessary precautions to prevent further transmission."
              images={[
                {
                  alt: "contact-tracing-app-image",
                  value: contactTracingImage,
                },
              ]}
            />

            <ProjectCard
              title="Codebox"
              desc="The library system for STI College Munoz-EDSA is designed to assist the librarian in efficiently managing various library tasks, including catalog management, circulation, inventory, and generating reports. It also offers convenient features for students, such as online book borrowing, library premise reservations, and penalty viewing, all accessible through their Microsoft accounts."
              images={[
                {
                  alt: "code-box-image",
                  value: codeboxImage,
                },
              ]}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

const ProjectCard = ({
  title,
  desc,
  images,
}: {
  title: string;
  desc: string;
  images?: {
    alt: string;
    value: any;
  }[];
}) => {
  return (
    <div className="flex flex-col items-center lg:flex-row lg:justify-around rounded border w-11/12 lg:w-9/12">
      {(images?.length ?? 0) > 1 && (
        <div className="w-11/12 lg:w-72 h-full p-5 mt-5 lg:mt-0">
          <Swiper navigation slidesPerView={1} className="w-full">
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
        <div className="w-11/12  h-full p-5 mt-5 lg:mt-0">
          <div className="w-full flex items-center">
            <img
              src={images?.[0].value}
              loading="lazy"
              alt={images?.[0].alt}
            ></img>
          </div>
        </div>
      )}
      <div className="p-5">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p className="text-lg">{desc}</p>
      </div>
    </div>
  );
};

export default Projects;
