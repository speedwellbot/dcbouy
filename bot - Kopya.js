const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');

var prefix = ayarlar.prefix;

client.on('ready', () => {
  console.log(`BOT: ${client.user.username} adı ile giriş yaptı!`);
});

client.on('message', msg => {
  console.log(`LOG: S: ${msg.guild.name} M: ${msg.content} Y: ${msg.author.tag}`);
  if (msg.author.id === ayarlar.id) return;
  if (msg.author.bot) return;

  if (!msg.content.startsWith(prefix)) {
   return;
  }
  if (message.content === prefix + "yardım") {
    message.channel.sendMessage(stripIndents''
    = Komut Listesi =

   **[Komut hakkında bilgi için  !yardım <komut adı>]**

   !ban             :: İstediğiniz kişiyi banlar.
   !bilgi           :: Bot ile ilgili bilgi verir.
   !davet           :: Botun davet linkini gönderir.
   !eval            :: Kod denemek için kullanılır.
   !istatistik      :: Botun istatistik gösterir.
   !kick            :: İstediğiniz kişiyi sunucudan atar.
   !kilit           :: Kanalı istediğiniz kadar süreyle kitler.
   !kullanıcıbilgim :: Komutu kullanan kişi hakkında bilgi verir.
   !load            :: Yeni eklenen komutu yükler.
   !ping            :: Botun pingini gösterir.
   !reboot          :: Botu yeniden başlatır.
   !reload          :: İstediğiniz bir komutu yeniden başlatır.
   !sor             :: Soru sormaya yarar.
   !sunucu          :: Sunucu hakkında bilgi verir.
   !sustur          :: İstediğiniz kişiyi  susturur.
   !temizle         :: Belirlenen miktar mesajı siler.
   !unban           :: İstediğiniz kişinin banını kaldırır.
   !unload          :: İstediğiniz bir komutu devre dışı bırakır.
   !uyar            :: İstediğiniz kişiyi uyarır.
   !yardım          :: Tüm komutları gösterir.
   !yaz             :: İstediğiniz şeyi bota yazdırır.

  }
  if (msg.content.toLowerCase() === 'bb') {
    msg.reply('BayBay Kendine İyi Bak');
  }
  if (msg.content.toLowerCase() === 'hb') {
      msg.reply('İyimisin Knk ?');
  }
  if (msg.content.toLowerCase() === prefix + 'ping') {
    msg.reply('Pingin! **' + client.ping + '** ms');
  }
  if (msg.content.toLowerCase() === prefix + 'sa') {
    msg.reply('Aleyküm selam!');
  }
  if (msg.content.toLowerCase() === prefix + 'yaz') {
    msg.delete();
    msg.channel.sendMessage(msg.content);
  }
  if (msg.content.toLowerCase() === prefix + 'temizle') {
    msg.channel.bulkDelete(100);
    msg.channel.sendMessage("100 adet mesaj silindi!");
  }
  if (msg.content.toLowerCase() === prefix + 'başlat') {
    if (msg.author.id !== ayarlar.sahip) {
      msg.reply('Benim yapımcım değilsin oç!');
    } else {
      msg.channel.sendMessage(`Bot yeniden başlatılıyor...`).then(msg => {
      console.log(`BOT: Bot yeniden başlatılıyor...`);
      process.exit(0);
    })
   }
  }
});

client.login(ayarlar.token);
