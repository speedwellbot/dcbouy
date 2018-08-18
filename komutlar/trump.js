const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let replies = ["https://media.giphy.com/media/O1GhSbro4z4Dm/giphy.gif","https://media.giphy.com/media/TIyJGNK325XGciFEnI/giphy.gif","https://media.giphy.com/media/wJNGA01o1Zxp6/giphy.gif","https://media.giphy.com/media/hPPx8yk3Bmqys/giphy.gif","https://media.giphy.com/media/xTiTnHXbRoaZ1B1Mo8/giphy.gif"];

    let result = Math.floor((Math.random() * replies.length));

    let gifembed = new Discord.RichEmbed()
        .setTitle("Ah Trump Ahhh :D xD ")
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
  category: 'trump',
  name: 'trump',
  description: 'Trump.',
  usage: 'trump'
};
