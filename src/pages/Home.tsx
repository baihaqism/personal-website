import React from "react";
import {
  BsTwitterX,
  BsInstagram,
  BsLinkedin,
  BsEnvelopeFill,
} from "react-icons/bs";
import DiscordCard from "../components/DiscordCard";
import TypedComponent from "../components/typist/TypedComponent";

const Home: React.FC = () => {
  return (
    <div className="mt-10 md:mt-1 flex flex-col lg:flex-row md:flex-col md:gap-8 md:justify-center min-h-[65vh] md:min-h-[80vh] items-center p-4">
      <div className="w-full lg:w-2/4 lg:w-2/3 flex flex-col justify-center lg:text-left text-center md:text-center">
        <h1 className="text-3xl font-light">Hey there! I'm</h1>
        <h1 className="text-6xl text-nameBlue font-bold mb-5">
          Baihaqi Sidrotul
        </h1>
        <p className="text-2xl font-medium mb-10">
          <TypedComponent />
        </p>
        <div className="flex flex-row justify-center lg:justify-start space-x-8 text-md mb-10 lg:mb-0">
          <a
            href="https://twitter.com/baihaqism"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsTwitterX />
          </a>
          <a
            href="https://instagram.com/baihaqism_"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsInstagram />
          </a>
          <a
            href="https://linkedin.com/in/baihaqism"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsLinkedin />
          </a>
          <a href="mailto:baihaqi.bsm@gmail.com">
            <BsEnvelopeFill />
          </a>
        </div>
      </div>
      <div className="w-full lg:w-3/5 lg:w-2/3 flex flex-col justify-center">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 h-64">
          <div className="p-4 group relative rounded-lg border border-gray-700 bg-white bg-opacity-5 backdrop-blur-sm duration-150 ease-in-out shadow-xl hover:shadow-2xl">
            <div className="bg-transparent text-left">
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
          <div className="p-4 group relative rounded-lg border border-gray-700 bg-white bg-opacity-5 backdrop-blur-sm duration-150 ease-in-out shadow-xl hover:shadow-2xl">
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
