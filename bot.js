const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
require('./util/eventLoader')(client);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};
client.on('guildMemberAdd', member => {
  member.addRole(member.guild.roles.find(r => r.name.startsWith('Kullanıcı')));
  const channel = member.guild.channels.find('name', 'gelen-giden');
  if (!channel) return;
 const embed = new Discord.RichEmbed()
 .setColor('RANDOM')
 .setAuthor(member.user.tag, member.user.avatarURL || member.user.defaultAvatarURL)
 .setThumbnail(member.user.avatarURL || member.user.defaultAvatarURL)
 .setTitle('Üye katıldı;')
 .setDescription(`Sunucuya katıldı Toplam [${member.guild.memberCount} üye]!`)
 .setFooter('Tr-Baddy', client.user.avatarURL)
 .setTimestamp()
 channel.send(embed);
});


client.on('guildMemberRemove', member => {
  const channel = member.guild.channels.find('name', 'gelen-giden');
  if (!channel) return;
 const embed = new Discord.RichEmbed()
 .setColor('RANDOM')
 .setAuthor(member.user.tag, member.user.avatarURL || member.user.defaultAvatarURL)
 .setThumbnail(member.user.avatarURL || member.user.defaultAvatarURL)
 .setTitle('Üye ayrıldı;')
 .setDescription(`Sunucudan ayrıldı [${member.guild.memberCount} üye]!`)
 .setFooter('Tr Badyy', client.user.avatarURL)
 .setTimestamp()
 channel.send(embed);
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
       msg.reply('** Aleyküm Selam, Hoşgeldin :smile: **');
  }
  if (msg.content === prefix + 'youtube') {
          msg.reply('**https://www.youtube.com/efespeedwell** ** Sende Bize Katılmayı Unutma :wink: ** ');
  }
  if (msg.content === prefix + 'hoşgeldin') {
          msg.reply('Hoşgeldin Komutunu Kullanmak İçin **gelen-giden** adlı kanal oluşturman gerek :) ');
  }
   if (msg.content === prefix + 'reklamengeli') {
          msg.reply('**  Reklam Engeli Açılmıştır :wink: ** ');
  }
  if (msg.content.toLowerCase() === 'hb') {
        msg.reply('İyimisin ? **(iyi sen Yazarak Konuşmayı Devam Ettirebilirsiniz)** ');
  }
  if (msg.content.toLowerCase() === 'iyi sen') {
        msg.reply('İyi bende neyse sana k.g **(sanada Yazarak Konuşmayı Devam Ettirebilirsiniz)** ');
  }                                                                                                         
  if (msg.content.toLowerCase() === 'sanada') {
        msg.reply('Önemli Değil :wink: ');
  }
  if (msg.content.toLowerCase() === 'bb') {
      msg.reply('BayBay Kendine İyi Bak');
  }
  if (msg.content.toLowerCase() === 'by') {
      msg.reply('BayBay Kendine İyi Bak');
  }
 if (msg.content === prefix + 'ekip') {
          msg.reply('Ekipe Katılmak İçin isminin başına **! ѕωα ** Eklemen Gerek Sende Bize Katılmayı Unutma :wink: ');
  }
});

client.on("message", message => {
    const kufur = ["amk", "aq", "yarrak", "sik", "amcık", "oç","orospu","piç","göt","oruspu","bok","sg","AMK","Amk","götüne","Götüne","GÖTÜNE","Oç","OÇ","qm","Qm","QM","ipne","İpne","İPNE","oruspu çocu","orospu çocuğu","AQ","Aq"];
    if (kufur.some(word => message.content.includes(word)) ) {
        message.reply(" , ** Bu sunucuda küfürler Tr-Badyy's Bot tarafından engellenmektedir! Küfür etmene izin vermeyeceğim ** :fire: !")
        message.delete()
    }

}); 

client.on("message", message => {
    const kufur = ["ağla","kudur","AĞLA","KUDUR","Ağla","Kudur","zırla","ZIRLA","Zırla","Sümkür","SÜMKÜR","sümkür","annesiz","Annesiz","ANNESİZ"];
    if (kufur.some(word => message.content.includes(word)) ) {
        message.reply(" ** , Bu sunucuda Kışkırtıcı Sözler Tr-Badyy's Bot tarafından engellenmektedir! Kışkırtmana izin vermeyeceğim **:fire: !")
   	    message.delete()
	}
	

}); 

client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("MANAGE_MESSAGES")) permlvl = 1;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});


client.login(process.env.BOT_TOKEN);
