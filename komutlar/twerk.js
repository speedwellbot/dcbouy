const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let replies = ["https://media.giphy.com/media/2NDDbSOD2Y944/giphy.gif", "https://media.giphy.com/media/t1kRtJmCI4R1e/giphy.gif", "https://media.giphy.com/media/l0HUfAlpWBCSpr4Fa/giphy.gif", "https://media.giphy.com/media/3oz8xS35avQwadnBeM/giphy.gif",];

    let result = Math.floor((Math.random() * replies.length));

    let gifembed = new Discord.RichEmbed()
        .setTitle("Gifiniz")
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
  name: 'twerk',
  description: 'Rastgele twerk resmi atar.',
  usage: 'twerk'
};