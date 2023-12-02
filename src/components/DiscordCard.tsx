import React, { useState, useEffect } from "react";
import { fetchPresence, PresenceData } from "../api/lanyard";

const DiscordCard: React.FC = () => {
  const [presence, setPresence] = useState<PresenceData | null>(null);

  useEffect(() => {
    const getPresence = async () => {
      const data = await fetchPresence();
      setPresence(data);
    };

    getPresence();
  }, []);

  const calculateTimeElapsed = (startTimestamp: number) => {
    const currentTimestamp = Math.floor(Date.now() / 1000);
    const startTimestampInSeconds = Math.floor(startTimestamp / 1000);
    const elapsedSeconds = currentTimestamp - startTimestampInSeconds;
    const hours = Math.floor(elapsedSeconds / 3600);
    const minutes = Math.floor((elapsedSeconds % 3600) / 60);
    const seconds = elapsedSeconds % 60;

    if (hours > 0) {
      return `${hours}h ${minutes}m ${seconds}s`;
    } else if (minutes > 0) {
      return `${minutes}m ${seconds}s`;
    } else {
      return `${seconds}s`;
    }
  };

  return (
    <div>
      {presence ? (
        <div>
          <div className="flex items-center justify-end space-x-4">
            <div className="flex space-x-2 items-center">
              <div className="text-right">
                <h1 className="font-semibold text-xl leading-tight">
                  {presence.data.discord_user.global_name}
                </h1>
                <h2 className="text-sm leading-tight opacity-50">
                  {presence.data.discord_user.username}
                </h2>
              </div>
            </div>
            <div className="flex">
              <img
                src={`https://cdn.discordapp.com/avatars/${presence.data.discord_user.id}/${presence.data.discord_user.avatar}.png`}
                alt="User Avatar"
                className={`rounded-full h-14 shadow-lg w-14 border-4 ${
                  presence.data.discord_status === "online"
                    ? "border-green-500"
                    : presence.data.discord_status === "idle"
                    ? "border-yellow-500"
                    : presence.data.discord_status === "dnd"
                    ? "border-red-500"
                    : "border-gray-500"
                }`}
              />
            </div>
          </div>
          <div>
            <div className="rounded-lg flex flex-col space-y-4 bg-white/10 p-4 overflow-x-hidden mt-5">
              <div className="flex space-x-4 items-center">
                {presence.data.activities &&
                presence.data.activities[0] &&
                presence.data.activities[0].application_id &&
                presence.data.activities[0].assets ? (
                  <div className="flex relative">
                    <img
                      src={`https://cdn.discordapp.com/app-assets/${presence.data.activities[0].application_id}/${presence.data.activities[0].assets.large_image}.png`}
                      width="128"
                      height="128"
                      draggable="false"
                      alt="Large Image"
                      className="rounded-xl h-28 w-28 relative"
                    />
                    <img
                      src={`https://cdn.discordapp.com/app-assets/${presence.data.activities[0].application_id}/${presence.data.activities[0].assets.small_image}.png`}
                      width="16"
                      height="16"
                      draggable="false"
                      alt="Small Image"
                      className="rounded-full bg-gray-100 bg-opacity-20 h-6 w-6 absolute right-0 bottom-0"
                    />
                  </div>
                ) : (
                  <p>Not playing anything.</p>
                )}
                {presence.data.activities && presence.data.activities[0] ? (
                <div className="space-y-px">
                  <h1 className="font-semibold text-lg leading-tight truncate">
                    {presence.data.activities[0].name}
                  </h1>
                  <h2 className="leading-tight opacity-40 line-clamp-2">
                    {presence.data.activities[0].details}
                  </h2>
                  <h2 className="leading-tight opacity-40 line-clamp-2">
                    {presence.data.activities[0].state}
                  </h2>
                  <span className="leading-tight opacity-40">
                    {calculateTimeElapsed(
                      presence.data.activities[0].timestamps.start
                    )}{" "}
                    elapsed
                  </span>
                </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading presence information...</p>
      )}
    </div>
  );
};

export default DiscordCard;
