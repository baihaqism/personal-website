import React from "react";

const SkeletonLoader: React.FC = () => {
  return (
    <div className="animate-pulse">
      <div className="flex items-center justify-end space-x-4 p-2">
        <div className="flex space-x-2 items-center">
          <div className="rounded-full absolute left-4 top-4 bg-white/10 h-14 w-14"></div>
          <div className="space-y-2">
            <div className="rounded-full h-4 w-24 bg-white/10"></div>
            <div className="rounded-full h-4 w-20 bg-white/10 ml-4"></div>
          </div>
          <div className="flex">
            <div className="rounded-full bg-white/10 h-10 w-10"></div>
          </div>
        </div>
      </div>
      <div>
        <div className="rounded-lg flex space-y-4 bg-white/10 p-4 overflow-x-hidden mt-5">
          <div className="flex space-x-4 items-center">
            <div className="flex relative">
              <div className="rounded-xl h-20 w-20 bg-white/10 relative mr-4"></div>
              <div className="space-y-3">
                <div className="rounded-full h-4 w-40 bg-white/10"></div>
                <div className="rounded-full h-4 w-32 bg-white/10"></div>
                <div className="rounded-full h-4 w-24 bg-white/10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonLoader;
