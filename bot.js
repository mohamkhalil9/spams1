const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("561619609510215683")
setInterval(function() {
channel.send(` The Best Spamer @!                Mohamad_Doleh .#6334 ``` مال ربكو ينعن الله ````);
}, 30)
})

client.login(process.env.BOT_TOKEN);
