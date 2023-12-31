import React, { useState, useEffect } from "react";
import { fetchPresence, PresenceData } from "../../api/lanyard";
import SkeletonLoader from "./SkeletonLoader";
import {
  BsDiscord,
  BsSpotify,
  BsFillSlashSquareFill,
  BsExclamationCircleFill,
} from "react-icons/bs";

const DiscordCard: React.FC = () => {
  const [presence, setPresence] = useState<PresenceData | null>(null);
  const [, setElapsedTime] = useState<string>("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPresence = async () => {
      const data = await fetchPresence();
      setPresence(data);
      setLoading(false);
    };

    getPresence();

    const intervalId = setInterval(() => {
      if (presence?.data.activities?.[0]?.timestamps?.start) {
        const time = calculateTimeElapsed(
          presence.data.activities[0].timestamps.start
        );
        setElapsedTime(time);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [presence]);

  const calculateTimeElapsed = (startTimestamp: number) => {
    const currentTimestamp = Math.floor(Date.now() / 1000);
    const elapsedSeconds = currentTimestamp - Math.floor(startTimestamp / 1000);
    const hours = Math.floor(elapsedSeconds / 3600);
    const minutes = Math.floor((elapsedSeconds % 3600) / 60);
    const seconds = elapsedSeconds % 60;

    const formatTime = (time: number) => {
      return time < 10 ? `0${time}` : `${time}`;
    };

    if (hours > 0) {
      return `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(
        seconds
      )}`;
    } else if (minutes > 0) {
      return `${formatTime(minutes)}:${formatTime(seconds)}`;
    } else {
      return `00:${formatTime(seconds)}`;
    }
  };

  return (
    <div>
      {loading ? (
        <SkeletonLoader />
      ) : presence ? (
        <div>
          <div className="flex items-center justify-end space-x-4">
            <div className="flex space-x-2 items-center">
              {presence.data.listening_to_spotify && presence.data.spotify ? (
                <BsSpotify className="absolute left-4 top-4 -z-[1] -rotate-12 text-6xl opacity-40 animate-reverseSpin" />
              ) : (
                <BsDiscord className="absolute left-4 top-4 -z-[1] -rotate-12 text-6xl opacity-40 animate-spin" />
              )}
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
            {presence.data.listening_to_spotify && presence.data.spotify ? (
              <div className="rounded-lg flex flex-col space-y-4 bg-white/10 p-4 overflow-x-hidden mt-5">
                <div className="flex space-x-4 items-center max-h-20">
                  <img
                    src={presence.data.spotify.album_art_url}
                    width="128"
                    height="128"
                    draggable="false"
                    alt="Album Art"
                    className="rounded-xl h-20 w-20 relative"
                  />
                  <div className="space-y-px">
                    <h1 className="font-semibold text-lg leading-tight truncate">
                      {presence.data.spotify.song}
                    </h1>
                    <h2 className="leading-tight opacity-40 line-clamp-2">
                      by {presence.data.spotify.artist}
                    </h2>
                    <h2 className="leading-tight opacity-40 line-clamp-2">
                      on {presence.data.spotify.album}
                    </h2>
                  </div>
                </div>
              </div>
            ) : (
              <div
                className={
                  presence.data.activities && presence.data.activities[0]
                    ? "mt-5"
                    : "mt-5"
                }
              >
                <div className="rounded-lg flex flex-col space-y-4 bg-white/10 p-4 overflow-y-hidden">
                  <div className="flex space-x-4 items-center max-h-20">
                    {presence.data.activities &&
                    presence.data.activities[0]?.application_id &&
                    presence.data.activities[0]?.assets ? (
                      <div className="flex relative">
                        <img
                          src={`https://cdn.discordapp.com/app-assets/${presence.data.activities[0].application_id}/${presence.data.activities[0].assets.large_image}.png`}
                          width="128"
                          height="128"
                          draggable="false"
                          alt="Large Image"
                          className="rounded-xl h-20 w-20 relative"
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
                      <div className="flex space-x-4 items-center">
                        <div className="flex relative">
                          <div className="rounded-xl h-20 w-20 relative mr-4">
                            <BsFillSlashSquareFill className="h-20 w-20 text-white/10" />
                          </div>
                          <div className="space-y-3">
                            <div className="rounded-full h-4 w-40">
                              <div className="flex items-center mt-7">
                                <BsExclamationCircleFill className="mr-2" />
                                <h1 className="font-semibold text-sm leading-tight truncate">
                                  Not doing anything.
                                </h1>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
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
            )}
          </div>
        </div>
      ) : (
        <BsDiscord className="absolute left-4 top-4 -z-[1] -rotate-12 text-6xl opacity-40 animate-spin" />
      )}
    </div>
  );
};

export default DiscordCard;
