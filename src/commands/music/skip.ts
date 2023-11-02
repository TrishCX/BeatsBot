import { ApplicationCommandType } from "discord.js";
import { Command } from "../../structures/Command";
import api from "../../api/Distube";
import errorEmbed from "../../embeds/embed.error";
import successEmbed from "../../embeds/embed.success";

export default new Command({
  name: "skip",
  description: "Skip the song.",
  type: ApplicationCommandType.ChatInput,
  run: async ({ interaction }) => {
    const queue = await api.getQueue(interaction.guildId);
    if (!queue) return errorEmbed(`No queue`, interaction, true);
    if (queue.songs.length === 1)
      return errorEmbed(`No songs in queue`, interaction, true);
    queue.skip();
    return successEmbed(`Skipped`, interaction, true);
  },
});
