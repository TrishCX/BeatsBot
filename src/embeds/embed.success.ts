import { ExtendedInteraction } from "../typings/Command";
import { Constants } from "../constants/constants";
import { EmbedBuilder } from "discord.js";

export default function successEmbed(
  content: string,
  interaction: ExtendedInteraction,
  ephemeral?: boolean
) {
  if (ephemeral) {
    return interaction.reply({
      embeds: [
        new EmbedBuilder()
          .setDescription(`${Constants.success} ∙ ${content}`)
          .setColor("#1f9c0e"),
      ],
      ephemeral: true,
    });
  } else {
    return interaction.followUp({
      embeds: [
        new EmbedBuilder()
          .setDescription(`${Constants.success} ∙ ${content}`)
          .setColor("#1f9c0e"),
      ],
    });
  }
}
