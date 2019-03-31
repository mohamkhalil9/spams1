const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("561989007291187231")
setInterval(function() {
channel.send(` عدوي بقليش بيضه ```<>The Best Spamer @!                Mohamad_Doleh .#6334``` `);
}, 30)
})

client.login(process.env.BOT_TOKEN);
