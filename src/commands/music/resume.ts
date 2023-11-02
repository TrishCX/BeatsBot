import { Command } from "../../structures/Command";
import api from "../../api/Distube";
import errorEmbed from "../../embeds/embed.error";
import successEmbed from "../../embeds/embed.success";

export default new Command({
  name: "resume",
  description: "Resumes the song",
  run: async ({ interaction }) => {
    const queue = api.getQueue(interaction.guildId);
    if (!queue) return errorEmbed(`No queue`, interaction, true);
    if (queue.playing) return errorEmbed(`Not paused`, interaction, true);
    api.resume(interaction.guildId);
    return successEmbed(`Resumed`, interaction, true);
  },
});
