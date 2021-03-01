const { RichEmbed } = require("discord.js")

module.exports = {
  name: "info",
  description: "Display bot info.",

  run(msg, args) {
    const { channel } = msg
    const botAuthor = "Krawietz"
    const botVersion = "v1.0"
    const botName = "BotPRO"
    const botDescription =
      "oficjalny bot organizacji BotsPRO"

    const embed = new RichEmbed()
      // Set the title of the field
      .setTitle(botName)
      // Set the color of the embed
      .setColor(0xb348ff)
      // Set the main content of the embed
      .setDescription(botDescription)
      //add icon
      .setThumbnail(url="https://media.discordapp.net/attachments/654096787749076993/800861252876107776/AlienPls3.gif")
      .addField("Autor", botAuthor, true)
      .addField("Wersja", botVersion, true)

    channel.send(embed)
  },
}