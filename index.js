const { Client, ActivityType } = require('discord.js-selfbot-v13');
const Discord = require('discord.js-selfbot-v13');
const keep_alive = require('./keep_alive.js')

const client = new Discord.Client();

let statuses = ['.gg/chillzone', 'You are my sunshine' , 'My only sunshine' , 'You make me happy' , 'When skies are gray']; // Add more statuses here
let currentStatusIndex = 0;

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  setInterval(() => {
    client.user.setActivity(statuses[currentStatusIndex], { type: 'CUSTOM' });
    currentStatusIndex = (currentStatusIndex + 1) % statuses.length;
    client.user.setStatus('dnd');
  }, 3000); // Change status every 5 seconds
});

client.login(process.env.token);
