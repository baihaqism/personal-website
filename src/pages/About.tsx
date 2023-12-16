import React, { useState } from "react";
import { skillsData, toolsData } from "../data/aboutData";
import profileImage from "../assets/photoprofile.jpg";

const About: React.FC = () => {
  const [showSkills, setShowSkills] = useState(true);
  const [showTools, setShowTools] = useState(false);

  const toggleSkills = () => {
    if (!showSkills) {
      setShowSkills(true);
      setShowTools(false);
    }
  };

  const toggleTools = () => {
    if (!showTools) {
      setShowTools(true);
      setShowSkills(false);
    }
  };

  const active =
    "inline-block px-4 py-3 rounded-lg hover:text-white text-accent font-bold bg-accent bg-opacity-10";
  const inactive =
    "inline-block px-4 py-3 font-bold rounded-lg hover:text-white";

  return (
    <div className="mt-10 mb-10 md:mt-1 p-4 animate-fadeIn">
      <div className="rounded-lg border border-gray-700 bg-white bg-opacity-5 backdrop-blur-sm p-4 shadow-lg mt-10">
        <h1 className="text-3xl font-bold mb-4">About Me</h1>
        <div className="flex flex-col md:flex-row items-center">
          <img
            src={profileImage}
            alt="Profile"
            className="w-32 h-32 rounded-full mb-4 md:mr-4"
          />
          <div>
            <div>
              <p className="text-secondary text-lg text-justify">
                Hi! My name is Baihaqi Sidrotul Muntaha. I'm a student at Universitas
                Atma Jaya Yogyakarta. I'm dedicated to my studies. I always try
                to be honest and kind in everything I do. My main goal is to
                succeed in my endeavors while constantly looking for chances to
                grow and learn.
              </p>
              <p className="text-secondary text-lg text-justify">
                During my time in college, I've been focusing on building a
                foundation in areas of Information Systems like managing
                databases, programming, analyzing data, and handling projects.
                I'm super passionate about staying updated with the trends and
                advancements in the industry. I actively search for
                opportunities to improve my skills.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <h2 className="text-3xl font-bold mb-4">Skills</h2>
        <div className="flex flex-wrap text-sm font-large text-center text-gray-500 mb-5">
          <div className="mr-2">
            <button
              className={showSkills ? active : inactive}
              onClick={toggleSkills}
            >
              Tech Stack
            </button>
          </div>
          <div>
            <button
              className={showTools ? active : inactive}
              onClick={toggleTools}
            >
              Tools
            </button>
          </div>
        </div>
        {showSkills && (
          <div className="grid grid-cols-2 gap-4 pb-16 md:grid-cols-3 md:gap-8 xl:grid-cols-4 xl:gap-10 2xl:gap-12 animate-fadeIn">
            {skillsData.map((skill, index) => (
              <div key={index}>
                <div className="group flex cursor-pointer items-center gap-2 rounded border border-accent px-2 py-2 hover:bg-accent hover:bg-opacity-10 md:gap-3 lg:px-3">
                  <div className="flex h-12 w-12 items-center justify-center lg:h-16 lg:w-16 lg:p-2 duration-300 scale-150 group-hover:scale-250">
                    {React.cloneElement(<skill.icon />, {
                      className: skill.color,
                    })}
                  </div>
                  <div className="flex items-center text-sm md:text-base lg:text-lg relative">
                    <div className="font-medium text-secondary translate-y-0 transition-all duration-300 group-hover:-translate-y-2">
                      {skill.name}
                    </div>
                    <div className="opacity-0 absolute mt-5 text-xs text-accent transition-all duration-300 md:text-sm lg:text-base group-hover:opacity-100">
                      {skill.level}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        {showTools && (
          <div className="grid grid-cols-2 gap-4 pb-16 md:grid-cols-3 md:gap-8 xl:grid-cols-4 xl:gap-10 2xl:gap-12 animate-fadeIn">
            {toolsData.map((tool, index) => (
              <div key={index}>
                <div className="group flex cursor-pointer items-center gap-2 rounded border border-accent px-2 py-2 hover:bg-accent hover:bg-opacity-10 md:gap-3 lg:px-3">
                  <div className="flex h-12 w-12 items-center justify-center lg:h-16 lg:w-16 lg:p-2 duration-300 scale-150 group-hover:scale-250">
                    {React.cloneElement(<tool.icon />, {
                      className: tool.color,
                    })}
                  </div>
                  <div className="flex items-center text-sm md:text-base lg:text-lg relative">
                    <div className="font-medium text-secondary translate-y-0 transition-all duration-300 group-hover:-translate-y-2">
                      {tool.name}
                    </div>
                    <div className="opacity-0 absolute mt-5 text-xs text-accent transition-all duration-300 md:text-sm lg:text-base group-hover:opacity-100 whitespace-nowrap	">
                      {tool.level}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
