import { ApplicationCommandType, EmbedBuilder } from "discord.js";
import { Command } from "../../structures/Command";
import api from "../../api/Distube";
import errorEmbed from "../../embeds/embed.error";

import { Constants } from "../../constants/constants";

export default new Command({
  name: "current",
  description: "Shows the current playing song.",
  type: ApplicationCommandType.ChatInput,
  run: async ({ interaction }) => {
    const queue = api.getQueue(interaction.guildId);
    if (!queue) return errorEmbed(`No queue`, interaction, true);
    const current = queue.songs[0];
    return interaction.reply({
      embeds: [
        new EmbedBuilder()
          .setColor(`#282b30`)
          .setDescription(
            `${Constants.success} ∙ [${current.name}](${current.url})`
          ),
      ],
      ephemeral: true,
    });
  },
});
