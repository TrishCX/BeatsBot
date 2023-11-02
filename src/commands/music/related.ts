import { ApplicationCommandType } from "discord.js";
import { Command } from "../../structures/Command";
import api from "../../api/Distube";
import errorEmbed from "../../embeds/embed.error";
import successEmbed from "../../embeds/embed.success";

export default new Command({
  name: "related",
  description: "Add a related song.",
  type: ApplicationCommandType.ChatInput,
  run: async ({ interaction }) => {
    const queue = await api.getQueue(interaction.guildId);
    if (!queue) return errorEmbed(`No queue`, interaction, true);
    const related = await api.addRelatedSong(interaction.guildId);
    return successEmbed(`Added ${related.name}`, interaction, true);
  },
});
