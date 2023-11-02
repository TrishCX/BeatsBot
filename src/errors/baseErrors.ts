import { Client, EmbedBuilder } from "discord.js";
import { ExtendedInteraction } from "../typings/Command";
import { Constants } from "../constants/constants";

interface Options {
  interaction: ExtendedInteraction;
  ephemeral?: boolean;
}

export function checkBaseErrors(options: Options) {
  const { interaction, ephemeral } = options;
  if (!options.interaction) throw new Error("Interaction is not defined");
  const voiceChannel = interaction.member.voice.channelId;
  if (!interaction.member.voice.channel)
    return interaction.reply({
      embeds: [
        new EmbedBuilder().setDescription(
          `${Constants.error} ∙ Consider joining a voice channel.`
        ),
      ],
      ephemeral,
    });

  if (
    interaction.guild.members.me.voice.channel &&
    interaction.guild.members.me.voice.channelId != voiceChannel
  )
    return interaction.reply({
      embeds: [
        new EmbedBuilder()
          .setDescription(
            `${Constants.error} ∙ I'm not in the same voice channel as you.`
          )
          .setColor("#cf3434"),
      ],
      ephemeral,
    });
}
