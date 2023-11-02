import { ApplicationCommandOptionType } from "discord.js";
import { Command } from "../../structures/Command";
import api from "../../api/Distube";
import errorEmbed from "../../embeds/embed.error";
import successEmbed from "../../embeds/embed.success";

export default new Command({
  name: "forward",
  description: "Seek a song.",
  options: [
    {
      name: "time",
      description: "Specify the time.",
      type: ApplicationCommandOptionType.Number,
      required: true,
    },
  ],
  run: async ({ client, interaction }) => {
    const time = Number(interaction.options?.get("time").value.toString());
    const queue = api.getQueue(interaction.guildId);
    if (!queue) return errorEmbed(`No queue`, interaction, true);

    let seektime = queue.currentTime + time;
    if (seektime >= queue.songs[0].duration)
      seektime = queue.songs[0].duration - 1;

    api.seek(interaction.guildId, seektime);
    return successEmbed(`Forwarded ${time}`, interaction, true);
  },
});
