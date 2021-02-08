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

bot.on('guildMemberAdd', member => {
    member.createDM().then(channel => {
      return channel.send('Salut la zone , bienvenue dans Le Paradis Du Dieu Unique Axel ' + member.displayName)
    }).catch(console.error)
    // On pourrait catch l'erreur autrement ici (l'utilisateur a peut être désactivé les MP)
  })

bot.on('message', message => {
  if (message.content.startsWith('STPplay')) {
    // On récupère le premier channel audio du serveur
    let voiceChannel = message.guild.channels
      .filter(function (channel) { return channel.type === 'voice' })
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
        stream.on('merde raté', function () {
          message.reply("Wesh je suis pas jésus , ça marche pas ton truc")
          connection.disconnect()
        })
        // On envoie le stream au channel audio
        // Il faudrait ici éviter les superpositions (envoie de plusieurs vidéo en même temps)
        connection
          .playStream(stream)
          .on('end', function () {
            connection.disconnect()
          })
      })
  }

})
bot.on (‘message’, fonction (user, userID, channelID, message, evt) ;{
    // Notre bot a besoin de savoir s’il va exécuter une commande
    // Il écoutera les messages commençant par «!»
    if (message.substring (0, 1) == "!") {
        var args = message.substring (1) .split ("");
        var cmd = args[0];
       
        args = args.splice (1);
        commutateur (cmd) ; { 
            //! ping
            cas("ping");
                bot.sendMessage ({
                    à: channelID,
                    message: ("Pong!")
                });
            Pause;
            // Ajoutez simplement les commandes de casse si vous le souhaitez.
         }
     }
});

client.login(process.env.TOKEN);
