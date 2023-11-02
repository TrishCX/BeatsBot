import { ApplicationCommandOptionType } from "discord.js";
import { Command } from "../../structures/Command";
import api from "../../api/Distube";
import { checkBaseErrors } from "../../errors";
import successEmbed from "../../embeds/embed.success";

export default new Command({
  name: "play",
  description: "Plays something",
  options: [
    {
      name: "query",
      description: "Specify something to play.",
      type: ApplicationCommandOptionType.String,
      required: true as boolean,
    },
  ],
  run: async ({ interaction }) => {
    checkBaseErrors({
      interaction,
      ephemeral: true,
    });
    await interaction.deferReply();
    const query = interaction.options.get("query").value.toString();
    await api.play(interaction?.member?.voice?.channel, query, {
      member: interaction.member,
      metadata: interaction,
      textChannel: interaction.channel,
    });
  },
});
