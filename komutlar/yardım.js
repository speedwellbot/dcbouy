const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Komutlar")
  .setDescription('')
  .setColor(0x00ffff)
  .addField("**Tr-Badyy's Bot :heart: Gerekli **", `:heart::heart::heart: Discord Sunucuna (mod log) Adında Bir Kanal Ekle mod log kanalı  olmazsa Bir Çok İşleminiz Başarısız Olur ... :heart::heart::heart:` )
  .addField("**Yeni Komutlar:**",  `${prefix}reklamengeli = Reklamları Engeller Hiçkimse Reklam Atamaz  \n${prefix}otorol = Otomatik Rol  \n${prefix}emoji <yazınız>  = Yazdığınız Yazıyı Emoji Yazısına Dönüştürür \n${prefix}hesap <sayı> = Hesap Makinesi işi Yapar Örn: ${prefix}hesap 2+2  \n${prefix}şifre = Rastgele bir şifre oluşturur \n${prefix}stresçarkı = Sizin için bir stres çarkı çevirir. \n${prefix}ascii = Farklı Bir Yazı Tipi xD \n${prefix}woodie = Woodie the Lumberjack hakkında bilgi verir \n${prefix}sor = bota  soru  sorarsınız xD`)
  .addField("**Eğlence ve Kullanıcı Komutları:**", `${prefix}atombombası = kaçın lan bomba patladı xD  \n${prefix}yazıtura = Yazı mı Tura mı Sen Karar Ver :D \n${prefix}tban = Troll Ban xD  \n${prefix}koş = Koş Lan Köpek Geliyoo SSD::ADSD:ASD: \n${prefix}anime = Anime Fotoları Atar   \n${prefix}avatar = Profil Fotonuzu Atar  \n${prefix}çayiç = Çay İçer  \n${prefix}çekiç =Çekiç Atarsınız  \n${prefix}yumrukat = Yumruk Atar. \n${prefix}herkeseçay = Herkese Çay Verir \n${prefix}çayaşekerat = Çayına şeker Atar \n${prefix}muz = Senin Muzun Kaç cm İse Onu Söyler  \n${prefix}twerk = Twerk Atan Bayanlar xD \n${prefix}wwa = Rastgele wwa Resmi Atar  \n${prefix}wtf = OH my GODDD xD  \n${prefix}yaz = Bota Birşey Yazdırırsınız  \n${prefix}çekıiliş = Çekiliş Yapar \n${prefix}ekip = Ekip İle İlgili Bilgiler Verir \n${prefix}dcdavet = Botun Sahibinin Discord Sunucusu <3 \n${prefix}zamanlayıcı = Alarm \n${prefix}ekip = Ekip İle İlgili Bilgiler Verir  \n${prefix}ping = Botun Gecikme Süresi \n${prefix}dcdavet = Botun Sahibinin Discord Sunucusu <3 \n${prefix}zamanlayıcı = Alarm \n${prefix}kullanıcıbilgim = Senin Hakkında Bilgi Verir`)
  .addField("**Yetkili Komutları**", `${prefix}sustur = Sustur <Kullanıcı> <sebep> \n${prefix}temizle <sayı> = Sohbeti Temizler  \n${prefix}sil <sayı> = Sohbeti Temizler  \n${prefix}ban = İstediğiniz Bir Kullanıcıyı Banlar \n${prefix}kick = İstediğiniz Bir Kullanıcıyı Banlar \n${prefix}davet = botun davet linkini atar \n${prefix}kilit = bulunduğunuz kanalı istediğiniz zamanla kilitler \n${prefix}ping = Botun Gecikme Süresini Belirler \n${prefix}uyar = istediğiniz bir kullanıcıyı uyarır`)
  .addField("**Ana Komutlar**", "<bsw = Botun Bulunduğu Serverler \n<sunucu = sunucu hakkındaki bilgiler verir \n<yardım = BOT Komutlarını Atar. \n<bilgi = BOT Kendisi Hakkında Bilgi Verir. \n<ping = BOT Gecikme Süresini Söyler. \n<davet = BOT Davet Linkini Atar. \n<istatistik = BOT İstatistiklerini Atar.")
  .addField("**Yapımcı**", " **Efe Speedwell** Eğer Bir Konuda Sorun Olursa <dcdavet Yaz ve sahibin dc sine gidip ona bu durumu bildir :heart: ")
  .setFooter('**--------------------------**')
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};
