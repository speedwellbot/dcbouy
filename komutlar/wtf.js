const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let replies = ["https://media.giphy.com/media/3o6EhU7SUa3afFIJFe/giphy.gif", "https://media.giphy.com/media/5VKbvrjxpVJCM/giphy.gif", "https://media.giphy.com/media/HsekC0u9JfyEg/giphy.gif", "https://media.giphy.com/media/l0IypeKl9NJhPFMrK/giphy.gif", "https://media.giphy.com/media/Nm8ZPAGOwZUQM/giphy.gif"];

    let result = Math.floor((Math.random() * replies.length));

    let gifembed = new Discord.RichEmbed()
        .setTitle("Lanet Olsun Adamımmm xD :smirk: :smirk: :smirk: ")
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
  name: 'wtf',
  description: 'Rastgele wtf resmi atar.',
  usage: 'wtf'
};