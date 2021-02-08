const Discord = require('discord.js');
const client = new Discord.Client();


//Toutes les actions à faire quand le bot se connecte
client.on("ready", function () {
    console.log("Mon BOT est Connecté");
})

// Répondre à un message
client.on("message", function (message) {
    if (message.content === "salut") { // Lorsque "Salut" est envoyé
        message.channel.send("Elle est laaaa  Grosse puuuute de"+ member.displayName)
    }
})



client.on("message", message => {
  if (message.content.startsWith("STPplay")) {
    // On récupère le premier channel audio du serveur
    let voiceChannel = message.guild.channels
      .filter(function (channel) { return channel.type === "voice" })
      .first()
    // On récupère les arguments de la commande 
    // il faudrait utiliser une expression régulière pour valider le lien youtube
    let args = message.content.split(' ')
    // On rejoint le channel audio
    voiceChannel
      .join()
      .then(function (connection) {
        // On démarre un stream à partir de la vidéo youtube
        let stream = YoutubeStream(args[1])
        stream.on("merde raté", function () {
          message.reply("Wesh je suis pas jésus , ça marche pas ton truc")
          connection.disconnect()
        })
        // On envoie le stream au channel audio
        // Il faudrait ici éviter les superpositions (envoie de plusieurs vidéo en même temps)
        connection
          .playStream(stream)
          .on("end", function () {
            connection.disconnect()
          })
      })
  }

})
