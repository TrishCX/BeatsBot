import { ExtendedInteraction } from "../typings/Command";
import { Constants } from "../constants/constants";
import { EmbedBuilder } from "discord.js";

export default function errorEmbed(
  content: string,
  interaction: ExtendedInteraction,
  ephemeral?: boolean
) {
  if (ephemeral) {
    return interaction.reply({
      embeds: [
        new EmbedBuilder()
          .setDescription(`${Constants.error} ∙ ${content}`)
          .setColor("#cf3434"),
      ],
      ephemeral: true,
    });
  } else {
    return interaction.followUp({
      embeds: [
        new EmbedBuilder()
          .setDescription(`${Constants.error} ∙ ${content}`)
          .setColor("#cf3434"),
      ],
    });
  }
}
