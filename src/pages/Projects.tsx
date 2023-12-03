import DiscordCard from "../components/DiscordCard";

const DiscordPresence: React.FC = () => {
  return (
    <div className="mt-10 flex flex-row items-center">
      <div className="w-full lg:w-3/5 lg:w-2/3 flex flex-col justify-center text-center md:text-left">
        <h1 className="text-2xl font-extrabold">Hey there! I'm</h1>
        <h1 className="text-4xl text-nameBlue font-extrabold mb-10">
          Baihaqi Sidrotul
        </h1>
        <p className="text-lg text-slate-500 mb-10">
          I'm a student at Universitas Atma Jaya Yogyakarta. I'm dedicated to my
          studies. I always strive to be honest and kind in everything I do. My
          main goal is to succeed in my endeavors while constantly looking for
          opportunities to grow and learn.
        </p>
      </div>
      <div className="grid grid-cols-2 grid-rows-0 gap-4">
        <div className="p-4 group relative rounded-lg border border-gray-700 bg-white bg-opacity-5 backdrop-blur-sm shadow-xl hover:shadow-2xl">
          <DiscordCard />
        </div>
        <div className="p-4 rounded-lg border border-gray-700 bg-white bg-opacity-5 backdrop-blur-sm shadow-xl hover:shadow-2xl">
          <DiscordCard />
        </div>
      </div>
    </div>
  );
};

export default DiscordPresence;
