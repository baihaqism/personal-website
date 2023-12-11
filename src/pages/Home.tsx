import React from "react";
import {
  socialMediaLinks,
  greetingText,
  nameText,
} from "../data/homeData";
import DiscordCard from "../components/card/DiscordCard";
import ResumeCard from "../components/card/ResumeCard";
import TypedComponent from "../components/typist/TypedComponent";

const Home: React.FC = () => {
  return (
    <div className="mt-10 mb-10 md:mt-1 flex flex-col lg:flex-row md:flex-col md:gap-8 md:justify-center min-h-[65vh] md:min-h-[80vh] items-center p-4/">
      <div className="w-full lg:w-2/4 lg:w-2/3 flex flex-col justify-center lg:text-left text-center md:text-center animate-fadeInLeft">
        <h1 className="text-3xl text-primary">{greetingText}</h1>
        <h1 className="text-6xl text-accent font-bold mb-5">{nameText}</h1>
        <p className="text-2xl font-medium text-secondary mb-5 lg:mb-10">
          <TypedComponent />
        </p>
        <div className="flex flex-row justify-center lg:justify-start space-x-6  text-md mb-5 lg:mb-0">
          {socialMediaLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              title={link.name}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 transition duration-300 hover:scale-110"
            >
              <link.icon />
            </a>
          ))}
        </div>
      </div>
      <div className="w-full lg:w-4/5 lg:w-2/3 flex flex-col justify-center animate-fadeInRight">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="p-4 h-56 group relative rounded-lg border border-gray-700 bg-white bg-opacity-5 backdrop-blur-sm shadow-xl hover:shadow-2xl">
            <div>
              <ResumeCard />
            </div>
          </div>
          <div className="p-4 h-56 group relative rounded-lg border border-gray-700 bg-white bg-opacity-5 backdrop-blur-sm shadow-xl hover:shadow-2xl">
            <div>
              <DiscordCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
