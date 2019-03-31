const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("561989007291187231")
setInterval(function() {
channel.send(` @Adawi .#4861 <>The Best Spamer @!                Mohamad_Doleh .#6334 ``` مال ربكو ينعن الله ``` `);
}, 30)
})

client.login(process.env.BOT_TOKEN);
