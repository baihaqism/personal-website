import React from "react";
import DiscordCard from "../components/DiscordCard";
import { BsTwitterX, BsInstagram, BsLinkedin } from "react-icons/bs";

const Home: React.FC = () => {
  return (
    <div className="mt-10 md:mt-1 flex flex-col lg:flex-row md:flex-col md:gap-8 md:justify-center min-h-[65vh] md:min-h-[80vh] items-center p-4">
      <div className="w-full lg:w-2/4 lg:w-2/3 flex flex-col justify-center lg:text-left text-center md:text-center">
        <h1 className="text-3xl font-extrabold">Hey there! I'm</h1>
        <h1 className="text-6xl text-nameBlue font-extrabold mb-10">
          Baihaqi Sidrotul
        </h1>
        <p className="text-lg text-gray-400 mb-10">
          I'm a student at Universitas Atma Jaya Yogyakarta. I'm dedicated to my
          studies. I always strive to be honest and kind in everything I do. My
          main goal is to succeed in my endeavors while constantly looking for
          opportunities to grow and learn.
        </p>
        <div className="flex flex-row justify-center lg:justify-start space-x-8 text-md mb-10 lg:mb-0">
          <span>
            <BsTwitterX />
          </span>
          <span>
            <BsInstagram />
          </span>
          <span>
            <BsLinkedin />
          </span>
        </div>
      </div>
      <div className="w-full lg:w-3/5 lg:w-2/3 flex flex-col justify-center">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="p-4 group relative rounded-lg border border-gray-700 bg-white bg-opacity-5 backdrop-blur-sm duration-150 ease-in-out shadow-xl hover:shadow-2xl">
            <div className="flex flex-col items-end justify-start px-4">
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
            <div className="flex flex-col items-end justify-start px-4">
              <DiscordCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
