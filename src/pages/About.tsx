import React from "react";
import profileImage from "../assets/photoprofile.jpg";

const About: React.FC = () => {
  return (
    <div className="mt-10 md:mt-1 p-4">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-4 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-2">JavaScript</h3>
            <p className="text-secondary">Proficient</p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-4 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-2">React</h3>
            <p className="text-secondary">Intermediate</p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-4 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-2">React</h3>
            <p className="text-secondary">Intermediate</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
