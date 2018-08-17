const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const snekfetch = require('snekfetch');
const api = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjM1NDIzMTYzMDQwNTA0MjE3NiIsImJvdCI6dHJ1ZSwiaWF0IjoxNTE2Mjc0MTQ1fQ.2H9LjNjH6WFp5LmswfXAYSDsHQn2JSPPgbgf1WjSi_c';

var prefix = ayarlar.prefix;

module.exports = client => {
	snekfetch.post(`https://discordbots.org/api/bots/${client.user.id}/stats`)
  .set('Authorization', api)
  .send({ server_count: client.guilds.size })
  .then(() => console.log('Updated discordbots.org stats.'))
  .catch(err => console.error(`Whoops something went wrong: ${err.body}`));
console.log('>>Oynuyor kısmı başarıyla güncellendi.');
console.log('Bot hazır ve giriş yaptı.')
console.log(`${client.guilds.size} Sunucuyu + ${client.users.size} Kullanıcıyı + Senin Küfürlerini İzliyor`);

    var Games = [

           "KÖTÜ KELİMELERİ İZLİYOR 🔥🔥 xD  ",

		   "<stresçarkı AKTİF 🔥",
			
       	   "Şuan Botumuzu ${client.guilds.size} Sunucu + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + Kullanıcı Kullanıyor ",
		   
		   "<davet BOTU SUNUCUNUZA EKLEYİN ❤",
		   
		   "<otorol AKTİF🔥",
		   
		   "<yardım Yazarak Bilgi Alabilirsiniz 🔥",
		   "<reklamengeli AKTİF 🔥🔥 ",
		`》 ${prefix}yardım , ${client.guilds.size} Sunucuyu  + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + Kullanıcıyı + Senin Küfürlerini İzliyor 🔥🔥| Geriye Bakma.《`


    ];

    setInterval(function() {

        var random = Math.floor(Math.random()*(Games.length-0+1)+0);

        client.user.setGame(Games[random], "https://www.twitch.tv/iwallysyt");
        }, 2 * 2500);

};
