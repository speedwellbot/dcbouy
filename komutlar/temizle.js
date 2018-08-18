const Discord = require('discord.js');
exports.run = function(client, message, args) {

  if (!message.guild) {
    return message.author.send('`temizle,sil` komutları sadece sunucularda Kullanılabilir !!');
  }
  let mesajsayisi = parseInt(args.join(' '));
  if (mesajsayisi.length < 0) return message.channel.send('Kaç mesaj silmem gerektiğini belirtmedin Knk :smile:.')
  if (mesajsayisi > 100) return message.channel.send('99 Mesajdan Fazlasını Silemem :fire: !');
  message.channel.bulkDelete(mesajsayisi + 2);
  message.channel.send(mesajsayisi +' Adet Mesajınız Silindi :fire: !')
  message.channel.bulkDelete(mesajsayisi + 1);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['sil'],
  permLevel: 1
};

exports.help = {
  name: 'temizle',
  description: 'Belirlenen miktar mesajı siler.',
  usage: 'temizle <temizlenecek mesaj sayısı>'
};
