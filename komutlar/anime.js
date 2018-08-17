const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let replies = ["https://cdn.discordapp.com/attachments/424667806320033814/437807617965031424/unnamed_1.gif", "https://cdn.glitch.com/5df641e3-8d98-4abb-9045-d5482434003a%2FJake_pat.gif?1524497996034", "https://media.tenor.com/images/cdc004bbbaba6f60d8e62a1f127516e0/tenor.gif","https://media.giphy.com/media/Y4z9olnoVl5QI/giphy.gif","https://cdn.nekos.life/smallboobs/small_boobs_024.png"];

    let result = Math.floor((Math.random() * replies.length));

    let gifembed = new Discord.RichEmbed()
        .setTitle("Animeleeer Çok Güzelllerr xD ")
        .setColor("#FF69B4")
        .setFooter(`Gifiniz ${message.author.tag} `, message.author.avatarURL)
        .setImage(replies[result]);

    message.channel.send(gifembed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['gif'],
  permLevel: 0
};

exports.help = {
  category: 'anime',
  name: 'anime',
  description: 'Rastgele anime resmi atar.',
  usage: 'anime'
};