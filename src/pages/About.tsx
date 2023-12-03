import React from "react";
import DiscordCard from "../components/DiscordCard";

const Home: React.FC = () => {
  return (
    <div className="mt-10 md:mt-1 flex flex-col lg:flex-row md:flex-col md:gap-8 md:justify-center min-h-[65vh] md:min-h-[80vh] items-center p-4">
      <div className="w-full lg:w-3/5 lg:w-2/3 flex flex-col justify-center">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="p-4 group relative rounded-lg border border-gray-700 bg-white bg-opacity-5 backdrop-blur-sm shadow-xl hover:shadow-2xl">
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
          <div className="p-4 group relative rounded-lg border border-gray-700 bg-white bg-opacity-5 backdrop-blur-sm shadow-xl hover:shadow-2xl">
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
