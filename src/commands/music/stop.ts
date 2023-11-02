import { Command } from "../../structures/Command";
import api from "../../api/Distube";
import errorEmbed from "../../embeds/embed.error";
import successEmbed from "../../embeds/embed.success";

export default new Command({
  name: "stop",
  description: "Stops the song and leaves the voice channel.",
  run: async ({ interaction }) => {
    const queue = api.getQueue(interaction.guildId);
    if (!queue) return errorEmbed(`No queue`, interaction, true);
    api.stop(interaction.guildId);
    return successEmbed(`Stopped`, interaction, true);
  },
});
