const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('» Lars Kingdom Genel komutlar')
.setTimestamp()
.addField(':small_blue_diamond:   l!emojiler', 'Sunucudaki hareketli haraketsiz emojileri gösterir.')
.addField(':small_blue_diamond:   l!sunucu', 'Sunucu bilgilerini gösterir..')
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
  name: 'genel',
  description: 'Genel komutları gösterir.',
  usage: 'genel'
};