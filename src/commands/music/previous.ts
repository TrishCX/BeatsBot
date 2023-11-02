import { ApplicationCommandType } from "discord.js";
import { Command } from "../../structures/Command";
import api from "../../api/Distube";
import errorEmbed from "../../embeds/embed.error";
import successEmbed from "../../embeds/embed.success";

export default new Command({
  name: "previous",
  description: "Plays a previously played track.",
  type: ApplicationCommandType.ChatInput,
  run: async ({ interaction }) => {
    const queue = await api.getQueue(interaction.guildId);
    if (!queue) return errorEmbed(`No queue`, interaction, true);
    if (!queue.previousSongs.length)
      return errorEmbed(`No previous songs in queue`, interaction, true);
    queue.previous();
    return successEmbed(`Playing the previous song again.`, interaction, true);
  },
});
