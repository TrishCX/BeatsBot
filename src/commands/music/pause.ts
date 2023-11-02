import { ApplicationCommandOptionType } from "discord.js";
import { Command } from "../../structures/Command";
import api from "../../api/Distube";
import errorEmbed from "../../embeds/embed.error";
import successEmbed from "../../embeds/embed.success";

export default new Command({
  name: "pause",
  description: "Pauses the song",
  run: async ({ interaction }) => {
    const queue = api.getQueue(interaction.guildId);
    if (!queue) return errorEmbed(`No queue`, interaction, true);
    if (!queue.playing) return errorEmbed(`Already paused`, interaction, true);
    await api.pause(interaction.guildId);
    return successEmbed(`Paused`, interaction, true);
  },
});
