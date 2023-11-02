import { EmbedBuilder } from "discord.js";
import api from "./api/Distube";
import successEmbed from "./embeds/embed.success";
import { ExtendedInteraction } from "./typings/Command";

api.on("playSong", async (queue, song) => {
  const interaction = (await song.metadata) as ExtendedInteraction;
  return successEmbed(`Started playing **${song.name}**`, interaction, false);
});

api.on("addSong", async (queue, song) => {
  if (queue.songs?.length === 1) return;
  const interaction = (await song.metadata) as ExtendedInteraction;
  return successEmbed(`Added **${song.name}**`, interaction, false);
});

api.on("addList", async (queue, playlist) => {
  const interaction = (await playlist.metadata) as ExtendedInteraction;
  return successEmbed(
    `Added **${playlist.name}** playlist (${playlist.songs.length} songs)`,
    interaction,
    false
  );
});

api.on("finish", async (queue) => {
  const interaction = queue.textChannel as any as ExtendedInteraction;
  return interaction.channel.send({
    embeds: [
      new EmbedBuilder()
        .setDescription("Done playing everything, left the voice channel")
        .setColor("#282b30"),
    ],
  });
});
