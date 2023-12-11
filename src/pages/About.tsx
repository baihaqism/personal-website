import React, { useState } from "react";
import profileImage from "../assets/photoprofile.jpg";
import {
  programmingLanguages,
  backendDevelopment,
  frontendDevelopment,
  developmentTools,
  deploymentHosting,
} from "../data/aboutData";

const About: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  const renderSkills = (skills: string[]) => {
    return (
      <ul>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    );
  };

  return (
    <div className="mt-10 mb-10 md:mt-1 p-4">
      <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-4 rounded-lg shadow-lg mt-10">
        <h1 className="text-3xl font-bold mb-4">About Me</h1>
        <div className="flex flex-col md:flex-row items-center">
          <img
            src={profileImage}
            alt="Profile"
            className="w-32 h-32 rounded-full mb-4 md:mr-4"
          />
          <div>
            <p className="text-primary">
              Hi, I'm John Doe. I'm a software developer with a passion for
              building amazing web applications.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <h2 className="text-3xl font-bold mb-4">Skills</h2>
        <div className="grid grid-cols-2 gap-4 pb-32 md:grid-cols-3 md:gap-8 xl:grid-cols-4 xl:gap-10 2xl:gap-12">
          <div>
            <h3 className="text-xl font-bold mb-2">
              Programming Languages
              <button
                className={`ml-2 text-blue-500 focus:outline-none ${
                  selectedCategory === "Programming Languages"
                    ? "font-bold"
                    : ""
                }`}
                onClick={() => handleCategoryClick("Programming Languages")}
              >
                Show
              </button>
            </h3>
            {selectedCategory === "Programming Languages" &&
              renderSkills(programmingLanguages)}
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">
              Backend Development
              <button
                className={`ml-2 text-blue-500 focus:outline-none ${
                  selectedCategory === "Backend Development" ? "font-bold" : ""
                }`}
                onClick={() => handleCategoryClick("Backend Development")}
              >
                Show
              </button>
            </h3>
            {selectedCategory === "Backend Development" &&
              renderSkills(backendDevelopment)}
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">
              Frontend Development
              <button
                className={`ml-2 text-blue-500 focus:outline-none ${
                  selectedCategory === "Frontend Development" ? "font-bold" : ""
                }`}
                onClick={() => handleCategoryClick("Frontend Development")}
              >
                Show
              </button>
            </h3>
            {selectedCategory === "Frontend Development" &&
              renderSkills(frontendDevelopment)}
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">
              Development Tools
              <button
                className={`ml-2 text-blue-500 focus:outline-none ${
                  selectedCategory === "Development Tools" ? "font-bold" : ""
                }`}
                onClick={() => handleCategoryClick("Development Tools")}
              >
                Show
              </button>
            </h3>
            {selectedCategory === "Development Tools" &&
              renderSkills(developmentTools)}
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">
              Deployment and Hosting
              <button
                className={`ml-2 text-blue-500 focus:outline-none ${
                  selectedCategory === "Deployment and Hosting"
                    ? "font-bold"
                    : ""
                }`}
                onClick={() => handleCategoryClick("Deployment and Hosting")}
              >
                Show
              </button>
            </h3>
            {selectedCategory === "Deployment and Hosting" &&
              renderSkills(deploymentHosting)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
