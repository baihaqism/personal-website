import React, { useState, useEffect } from "react";
import { fetchPresence, PresenceData } from "../api/lanyard";
import DiscordCard from "../components/DiscordCard";

const DiscordPresence: React.FC = () => {
  return <DiscordCard />;
};

export default DiscordPresence;
