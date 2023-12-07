import React from "react";
import {
  socialMediaLinks,
} from "../data/homeData";

const UnfinishedPage: React.FC = () => {
  return (
    <div className="mt-10 md:mt-1 flex flex-col lg:flex-row md:flex-col md:gap-8 md:justify-center min-h-[65vh] md:min-h-[80vh] items-center p-4">
      <div className="flex items-center justify-center">
        <div className="flex flex-col items-center">
          <h1 className="text-accent text-4xl font-bold mb-4 text-center">
            This page is unfinished
          </h1>
          <p className="text-slate-400 text-center">
            Please check back later for updates.
          </p>
          <div className="flex flex-row justify-center lg:justify-start space-x-6  text-md mt-3 lg:mt-3">
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
      </div>
    </div>
  );
};

export default UnfinishedPage;
