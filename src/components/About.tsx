import React from "react";
import me from "../images/dev.png";
const About = () => {
  return (
    <section className="mx-auto w-11/12 lg:w-7/12 mt-10 md:mt-32 p-2">
      <h2 className="text-2xl font-bold underline underline-offset-8 dark:text-gray-100 decoration-2 decoration-blue-600">
        About Me
      </h2>
      <div className="flex flex-col lg:flex-row justify-between gap-5 pt-6">
        <div className="w-full flex justify-center items-center">
          <img src={me} alt="my-image" className="max-w-xs rounded-full "></img>
        </div>
        <div className="py-5 px-2 leading-6  text-gray-600 dark:text-gray-400 ">
          <p className="mb-2">
            Hello! I'm Ryan Ali. In 2017, I chose to pursue the ICT strand with
            a focus on{" "}
            <span className="text-blue-500">
              IT in Mobile Application and Web Development
            </span>{" "}
            during Senior High School. My decision was fueled by a deep
            curiosity about how computers work and the world of programming.
            Throughout Senior High, I gained hands-on experience in building{" "}
            <span className="text-blue-500">
              Web, Desktop, and Mobile applications.
            </span>{" "}
          </p>
          <p className="mb-2">
            After graduating from high school, I pursued a degree in{" "}
            <span className="text-blue-500">Computer Science</span> while
            actively seeking a position as a software developer to further
            enhance my knowledge. Fortunately, I landed a job at a company
            specializing in{" "}
            <span className="text-blue-500">IoT (Internet of Things)</span>{" "}
            technology, which exposed me to a variety of new tools and
            technologies, further enriching my experience in the field.
            Additionally, I engaged in freelance work, balancing both my studies
            and professional development.
          </p>
          <p className=" mb-2">
            Having recently graduated from college, my main focus is to upskill
            while searching for a job. I am dedicated to expanding my knowledge
            and skills in the field of software development.
          </p>
          <p className="mb-2">
            In my free time, I enjoy going to the gym, watching TV, and playing
            video games.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
