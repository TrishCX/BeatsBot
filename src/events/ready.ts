import { ActivityType } from "discord.js";
import { Event } from "../structures/Event";
import mongoose from "mongoose";

export default new Event("ready", (client) => {
  mongoose
    .connect(process.env.mongoDBConnectionURI)
    .then(() => console.info("Connected Database"));
  client.user.setActivity({
    name: "Making beats...",
    type: ActivityType.Streaming,
    url: "https://www.youtube.com/watch?v=elHedOa_Fpc",
  });
  console.log(`The bot is now online`);
});
