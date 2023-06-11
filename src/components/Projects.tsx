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
const Projects = () => {
  const [ref, inView] = useInView({ threshold: 0.4 });
  const [isMounted, setMounted] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  const { ref: ongoingRef, inView: isOngoingInView } = useInView({
    threshold: 0,
  });
  useEffect(() => {
    setMounted(true);
  }, []);
  useLayoutEffect(() => {
    if (inView) {
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

    if (!inView && isMounted) {
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
    if (isOngoingInView) {
    }
  }, [isOngoingInView]);
  return (
    <div ref={ref}>
      <section className="container p-10  mx-auto snap-start scroll-mt-24  mt-5">
        <h1 className="text-center text-5xl font-bold ">Projects</h1>
        <div className="flex items-center mt-5 ">
          <div
            ref={navRef}
            className="hidden"
            style={{
              bottom: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <ul className="flex flex-col gap-2">
              <li className="font-bold ">
                <a className="flex items-center gap-3 text-gray-700">
                  <span className="w-10 border-t-2 border-gray-700"></span>
                  <span>RECENT</span>
                </a>
              </li>
              <li className="font-bold">
                <a className="flex items-center gap-3 text-gray-400">
                  <span className="w-5 border-t-2 border-gray-400"></span>
                  <span>ONGOING</span>
                </a>
              </li>
              <li className="font-bold">
                <a className="flex items-center gap-3 text-gray-400">
                  <span className="w-5 border-t-2 border-gray-400"></span>
                  <span>OLD</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="flex items-center flex-col gap-4">
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
        </div>
      </section>
      <section className="container p-10  mx-auto snap-start scroll-mt-48  mt-5 h-screen">
        <div className="flex items-center flex-col gap-4">
          <ProjectCard
            title="STI College Munoz-EDSA Library System"
            desc="A library system for STI College Munoz-EDSA. It allows the committee to update team scores and enables teams to view their scores and rankings. This system enhances efficiency and transparency in managing scores for a fair competition."
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
    <div className="flex gap-5 border w-9/12">
      <div className="p-5">
        <Swiper className="border rounded w-96" navigation slidesPerView={1}>
          {images?.map((image, index) => {
            return (
              <SwiperSlide key={index}>
                <div>
                  <img
                    src={image.value}
                    loading="lazy"
                    className="w-96 h-full"
                    alt={image.alt}
                  ></img>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="p-5">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p className="text-lg">{desc}</p>
      </div>
    </div>
  );
};

export default Projects;
