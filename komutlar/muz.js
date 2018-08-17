exports.run = async (client, msg, args) => {
  let kufur=[
    "",
    "Senin Muzun 31 Santim :banana: xD",
    "Senin Muzun 52 Santim :banana: xD",
	"Senin Muzun 99 Santim :banana:",
    "Senin Muzun 46 Santim :banana:",
	"Senin Muzun 23 Santim :banana:",
	"Senin Muzun 17 Santim :banana:",
	"Senin Muzun 9 Santim :banana:",
	"Senin Muzun 5 Santim :banana:",
	"Senin Muzun -5 Santim.",
	"Senin Muzun 4 Santim :banana:",
	"Senin Muzun 35 Santim :banana:",
	"Senin Muzun 33 Santim :banana:",
	"Senin Muzun 21 Santim :banana:",
	"Senin Muzun 28 Santim :banana:",
	"Senin Muzun 13 Santim :banana:",
	"Senin Muzun 12 Santim :banana:",
	"Senin Muzun 46 Santim :banana:",
	"Senin Muzun 51 Santim :banana:",
	"Senin Muzun 7 Santim :banana:",
	"Senin Muzun 10 Santim :banana:",
	"Senin Muzun 25 Santim :banana:",
	"Senin Muzun 3 Santim :banana:.",
	"Senin Muzun 11 Santim :banana:",
	"Senin Muzun 28 Santim :banana:",
	"Senin Muzun 37 Santim :banana:",
    "Senin Muzun Yok xD ,"
  ] 
     let member = msg.mentions.members.first()
   if(!member)return msg.channel.send({embed: {
 color: Math.floor(Math.random() * (0xFFFFFF + 1)),
 description: (':no_entry_sign: Ya kendini yada başka birisini etiketlemen gerek. :no_entry_sign:')
}});
  if(member.id === "349847418243645451")return msg.channel.send({embed: {
 color: Math.floor(Math.random() * (0xFFFFFF + 1)),
 description: (`162 Santim :banana:`)
}})
  if(member.id === client.user.id){
    msg.channel.send({embed: {
 color: Math.floor(Math.random() * (0xFFFFFF + 1)),
 description: (`Cidden beni kandırmayı denedin mi?`)
}})
  }
  else{
  msg.channel.send({embed: {
 color: Math.floor(Math.random() * (0xFFFFFF + 1)),
 description: (`${member} ${kufur[Math.floor(Math.random() * 16)]}.`)
  }})
  }

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
 };

exports.help = {
  name: 'muz',
  description: 'NSFW bir resim gösterir.(kesinlikle muz değil)',
  usage: 'muz'
 }
