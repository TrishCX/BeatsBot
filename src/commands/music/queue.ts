import { ApplicationCommandType, Embed, EmbedBuilder } from "discord.js";
import { Command } from "../../structures/Command";
import api from "../../api/Distube";
import errorEmbed from "../../embeds/embed.error";
import successEmbed from "../../embeds/embed.success";
import { pagination, ButtonStyles, ButtonTypes } from "../../utilities";
import { Song } from "distube";
export default new Command({
  name: "queue",
  description: "Plays a previously played track.",
  type: ApplicationCommandType.ChatInput,
  run: async ({ interaction }) => {
    const queue = await api.getQueue(interaction.guildId);
    if (!queue) return errorEmbed(`No queue`, interaction, true);
    if (queue.songs.length === 1)
      return errorEmbed(
        `The current playing is the only song in the queue.`,
        interaction,
        true
      );

    const embeds: Embed[] = [];

    let k = 10;

    for (let i = 1; i < queue.songs.length; i += 10) {
      let qus = queue.songs;
      const current = qus.slice(i, k);
      let j = i;
      const info = current
        .map(
          (track, _) =>
            `**${j++} -** [${String(track.name)
              .replace(/\[/giu, "{")
              .replace(/\]/giu, "}")
              .substr(0, 60)}](${track.url})`
        )
        .join("\n");

      const embed = new EmbedBuilder()
        .setAuthor({
          name: interaction.member.user.displayName,
          iconURL: interaction.member.user.displayAvatarURL(),
          url: interaction.member.user.displayAvatarURL(),
        })
        .setTitle(`__Queue__`)
        .setTimestamp()
        .setFooter({
          text: `Requested by ${interaction.member.user.displayName}`,
          iconURL: interaction.member.user.displayAvatarURL(),
        })
        .setThumbnail(current[0].thumbnail)
        .setColor("#282b30")
        .setDescription(`${info}`);
      embeds.push(embed as any);
      k += 10;
    }

    await pagination({
      embeds,
      interaction,
      author: interaction.member.user,
      fastSkip: true,
    });
  },
});
