//Credits
__author__ = "Jason Liu"
__license__ = "Do what you wish"

//Import Requirements
const Discord = require('discord.js');
const fs = require('fs');
const path = require('path');
const SpotifyWebApi = require('spotify-web-api-node');

//Variables
let pf = "s!";
let msgArray = message.content.split(' ')
let infoNotify = "**:notepad_spiral: INFO >> ** "
let warningNotify = "**:warning:** WARN >> "
let musicNotify = "**:musical_note: MUSIC >> **"

//Load Files
try {
  var cfg = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'config', 'config.json')), 'utf8')
} catch (err) {
  if (err) throw err
}
//Construct Objects
const bot = new Discord.Client();
const spotifyApi = new SpotifyWebApi({
  clientId = 'c3cc24ea4ebc47c3bbf710025522832d',
  clientSecret = '6c639c13712e488f8538d16ace5e07a1'
});

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
  let cmd = msgArray[0].split(pf.length, msgArray[0].length).toUpperCase()
  let args = msgArray.slice(1, msgArray.length)

  //Test Command
  if(cmd == "DING") {
    mchannel.sendMessage(infoNotify + "Dongalog!")
  }
});
