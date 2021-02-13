
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
const Discord = require("discord.js");
exports.run = function(client, message, args) {
  if (!message.member.hasPermission("MANAGE_MESSAGES")) {
    const embed = new Discord.MessageEmbed()
      .setColor("BLACK")
      .setDescription(`Ne yazıkki bu komutu kullanmaya yetkiniz yok!`)
      .setFooter(client.user.username, client.user.avatarURL());

    message.channel.send(embed);
    return;
  }
  if (!args[0]) {
    const embed = new Discord.MessageEmbed()
      .setColor("BLACK")
      .setDescription(`Lütfen silinecek mesaj sayısını belirtiniz.`)
      .setFooter(client.user.username, client.user.avatarURL());

    message.channel.send(embed);
    return;
  }
  if (args[0] > 100) {
    const embed = new Discord.MessageEmbed()
      .setColor("BLACK")
      .setDescription(`Ne yazık ki 100'den fazla mesaj silemem.`)
      .setFooter(client.user.username, client.user.avatarURL());

    message.channel.send(embed);
    return;
  }
  message.channel.bulkDelete(args[0]).then(() => {
    const embed = new Discord.MessageEmbed()
      .setColor("ORANGE")
      .addField(`Temizleyen Yetkili`, `<@${message.author.id}>`)
      .addField(`Silinen Mesaj Sayısı`, args[0])
      .setFooter(client.user.username, client.user.avatarURL());

    message.channel.send(embed).then(msg => msg.delete(5000));
  });
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["sil"],
  permLevel: 0
};

exports.help = {
  name: "sil",
  description: "Mesaj Siler",
  usage: "sil <mesajSayısı>"
};