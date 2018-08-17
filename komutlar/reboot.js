const Discord = require('discord.js');

exports.run = (client, message, args) => {
	
    message.channel.send(`Yapımcım Bot yeniden başlatılıyor...`).then(msg => {
    console.log(`BOT: Bot yeniden başlatılıyor...`);
    process.exit(0);
  })
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'başlat',
  description: 'Botu Yeniden Başlatır',
  usage: 'başlat'
};
