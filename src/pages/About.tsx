import React from "react";

const Home: React.FC = () => {
  return (
    <div className="mt-10 lg:mt-1 flex flex-col lg:flex-row lg:gap-16 lg:justify-center min-h-[65vh] lg:min-h-[80vh] items-center">
      <div className="w-full lg:w-3/5 lg:w-2/3 flex flex-col justify-center text-center lg:text-left">
        <h1 className="text-3xl font-extrabold">
          Hey there! I'm
        </h1>
        <h1 className="text-5xl text-nameBlue font-extrabold mb-10">
          Baihaqi Sidrotul
        </h1>
        <p className="text-lg font-thin mb-10">
          I'm a student at Universitas Atma Jaya Yogyakarta. I'm dedicated to my
          studies. I always strive to be honest and kind in everything I do. My
          main goal is to succeed in my endeavors while constantly looking for
          opportunities to grow and learn.
        </p>
      </div>
      <div className="w-full lg:w-3/5 lg:w-2/3 flex flex-col justify-center">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="p-4 group relative rounded-lg border border-gray-700 bg-white bg-opacity-5 backdrop-blur-sm duration-150 ease-in-out flex shadow-xl hover:shadow-2xl">
            <div className="bg-transparent text-left">
              <h1 className="text-3xl font-bold mb-4">
                Welcome to Our Website
              </h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.
              </p>
            </div>
          </div>
          <div className="p-4 group relative rounded-lg border border-gray-700 bg-white bg-opacity-5 backdrop-blur-sm duration-150 ease-in-out flex shadow-xl hover:shadow-2xl">
            <div className="bg-transparent text-left">
              <h1 className="text-3xl font-bold mb-4">
                Welcome to Our Website
              </h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
