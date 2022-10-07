const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");
module.exports = {
  name: "botinfo",
  description: "Shows the bot info",
  botPerms: ["EmbedLinks"],
  run: async (client, message, args) => {
    const duration = moment
      .duration(client.uptime)
      .format(" D [days], H [hrs], m [mins], s [secs]");

    let embed = new Discord.EmbedBuilder()
      .setTitle("NXT Info")
      .setColor("Random")
      .setDescription(
        `**Bot Name: **NXT \n**Owner: **StudNastty#6231 \n**Total Categories: **8 \n**Total Commands: **${client.commands.size} \n**Users:** ${
          client.users.cache.size
        } \n**Servers:** ${client.guilds.cache.size} \n**Channels:** ${
          client.channels.cache.size
        } \n**Uptime:** ${duration}`
      )
      .addFields([
        { name: "About NXT",
          value: "NXT was made for NXT discord"
        },
        { name: "NXT Links",
          value: "**https://suhtools.ml**"
        }
      ])
    message.channel.send({ embeds: [embed] });
  },
};
