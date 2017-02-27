//Credits
__author__ = "Jason Liu"
__license__ = "Do what you wish"

//Import Requirements
const Discord = require('discord.js');
const fs = require('fs');
const path = require('path');

//Variables
let pf = "s!";
let msgArray = message.content.split(' ')

//Load Files
try {
  var cfg = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'config', 'config.json')), 'utf8')
} catch (err) {
  if (err) throw err
}
//Construct Objects
const bot = new Discord.Client();

//Init Bot
bot.login(cfg.token);

//------------------------------
//Bot Events
//------------------------------

bot.on('ready', () => {
  console.log("SpottyBotty ready for service!")
  bot.user.setGame(cfg.version + " - Created by Jason Liu")
});

bot.on('message', (msg) => {
  //Checks if bot or no prefix
  if(msg.author.bot || !msg.content.startsWith(pf)) return

  //Bot Variables
  let mchannel = msg.channel;
  let member = msg.member;
  let cmd = msgArray[0].split(1, msgArray[0].length).toUpperCase()
  let arg = msgArray.slice(1, msgArray.length)
});
