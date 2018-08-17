const Discord = require('discord.js');
module.exports.run = async (client, msg, args) => {

    let kayıt = msg.guild.member(msg.mentions.users.first()) || msg.guild.member(args[0]);
    if (!kayıt) return msg.channel.send({
        embed: {
            color: Math.floor(Math.random() * (0xFFFFFF + 1)),
            description: ("Kendini Etiketlemen Gerekiyor.")
        }
    })

    let role = msg.guild.roles.find(r => r.name === "Rexo Ekip [●]");
    if (!role) {
        try {
            role = await msg.guild.createRole({
                name:  "Rexo Ekip [●]",
                color: "#00eeff",
                permission: []
            });

            msg.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(role, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false
                });
            });
        } catch (e) {
            console.log(e.stack);
        }

    }

    if (kayıt.roles.has(role.id)) return msg.channel.send({
        embed: {
            color: Math.floor(Math.random() * (0xFFFFFF + 1)),
            description: (" Kayıtın Var. ")
        }
    });

    await kayıt.addRole(role);
    msg.channel.send({
        embed: {
            color: Math.floor(Math.random() * (0xFFFFFF + 1)),
            description: ("Kayıt Olma İşlemi Başarılı.")
        }
    })
}
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['kayıt'],
    permLevel: 1
};

exports.help = {
    name: 'kayıtol',
    description: 'Kayıt olursunuz!',
    usage: 'kayıt-ol'
};
