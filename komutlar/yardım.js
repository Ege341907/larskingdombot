const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('» Lars Kingdom Yardım')
.setTimestamp()
.addField(':white_medium_small_square:  l!genel', 'Genel komutları gösterir.')
.addField(':white_medium_small_square:  l!Eğlence', 'Eğlence komutlarını gösterir.')
.addField(':white_medium_small_square:  l!moderasyon', 'Moderasyon menüsünü açar')
.setFooter('© 2020 Lars Kingdom ', client.user.avatarURL())
.setTimestamp()
.setThumbnail(client.user.avatarURL())
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 0 
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};