const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  const yazi = args.slice(0).join('+'); 

  if(!yazi) return message.channel.send(new Discord.MessageEmbed()
        .setColor("BLACK")
        .setDescription(
          `<a:unlem:816363628282249266> **Yanlış Kullanım** \n Doğru Kullanım: \`sn!elmas [Yazı]\``
        )
    );)
  const linqo = `https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=wood&text=${yazi}`
  .replace(' ', '+')

  
  const narcosembed = new Discord.MessageEmbed()
  .setTitle("Odun Logo")
  .setColor("BLACK")
  .setImage(linqo)
  .setFooter(
      `${message.author.username} tarafından istendigi. Elmas Logo`,
      userinfo.avatar
    );
  message.channel.send(narcosembed)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [''],
    permLevel: 0
}

exports.help = {
    name: 'odun',
    description: 'Yazdığınız yazıyı odun logoya değiştirir.',
    usage: 'odun'
}