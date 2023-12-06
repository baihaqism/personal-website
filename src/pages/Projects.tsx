import React from "react";
import {
  BsTwitterX,
  BsInstagram,
  BsLinkedin,
  BsEnvelopeFill,
} from "react-icons/bs";
import DiscordCard from "../components/card/DiscordCard";
import TypedComponent from "../components/typist/TypedComponent";

const Home: React.FC = () => {
  return (
    <div className="mt-10 md:mt-1 flex flex-col lg:flex-row md:flex-col md:gap-8 md:justify-center min-h-[65vh] md:min-h-[80vh] items-center p-4">
      <div className="w-full lg:w-2/4 lg:w-2/3 flex flex-col justify-center lg:text-left text-center md:text-center">
        <h1 className="text-3xl text-primary">Hey there! I'm</h1>
        <h1 className="text-6xl text-accent font-bold mb-5">
          Baihaqi Sidrotul
        </h1>
        <p className="text-2xl font-medium text-secondary mb-10">
          <TypedComponent />
        </p>
        <div className="flex flex-row justify-center lg:justify-start space-x-6  text-md mb-10 lg:mb-0">
          <a
            href="https://twitter.com/baihaqism"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 transition duration-300 hover:scale-110"
          >
            <BsTwitterX />
          </a>
          <a
            href="https://instagram.com/baihaqism_"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 transition duration-300 hover:scale-110"
          >
            <BsInstagram />
          </a>
          <a
            href="https://linkedin.com/in/baihaqism"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 transition duration-300 hover:scale-110"
          >
            <BsLinkedin />
          </a>
          <a
            href="mailto:baihaqi.bsm@gmail.com"
            className="flex items-center justify-center w-10 h-10 transition duration-300 hover:scale-110"
          >
            <BsEnvelopeFill />
          </a>
        </div>
      </div>
      <div className="w-full lg:w-4/5 lg:w-2/3 flex flex-col justify-center">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="p-4 h-56 group relative rounded-lg border border-gray-700 bg-white bg-opacity-5 backdrop-blur-sm shadow-xl shadow shadow-blue-500/40 transition duration-300 hover:shadow-indigo-500/40 hover:shadow-2xl">
            <div>
              <h1 className="text-2xl font-bold mb-4">
                Welcome to Our Website
              </h1>
              <p className="text-sm text-slate-400">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.
              </p>
            </div>
          </div>
          <div className="p-4 h-56 group relative rounded-lg border border-gray-700 bg-white bg-opacity-5 backdrop-blur-sm shadow-xl shadow shadow-blue-500/40 hover:shadow-indigo-500/40 hover:shadow-2xl">
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
