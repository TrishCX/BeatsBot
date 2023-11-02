import {
  ApplicationCommandOptionType,
  ApplicationCommandType,
} from "discord.js";
import { Command } from "../../structures/Command";
import api from "../../api/Distube";
import errorEmbed from "../../embeds/embed.error";
import successEmbed from "../../embeds/embed.success";

export default new Command({
  name: "volume",
  description: "Change the volume.",
  options: [
    {
      name: "percent",
      description: "The volume percentage.",
      type: ApplicationCommandOptionType.Number,
      required: true,
    },
  ],
  run: async ({ interaction }) => {
    const volumePercent = Number(
      interaction.options.get("percent")?.value?.toString()
    );
    if (volumePercent > 100)
      return errorEmbed(`Volume must be between 10 to 100`, interaction, true);
    if (volumePercent < 10)
      return errorEmbed(`Volume must be between 10 to 100`, interaction, true);
    const queue = await api.getQueue(interaction.guildId as string);
    if (!queue) return errorEmbed(`No queue`, interaction, true);
    api.setVolume(interaction.guildId as string, volumePercent);
    return successEmbed(`Changed the volume`, interaction, true);
  },
});
