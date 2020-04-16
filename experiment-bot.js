// Dependencies
require('dotenv').config();
const Discord = require('discord.js');
// Instantiate new discord bot
const bot = new Discord.Client();

// Get bot token from dotenv file
const TOKEN = process.env.TOKEN;

// Log the bot in with given credentials
bot.login(TOKEN);

// When bot is ready log message to console
bot.on('ready', () => {
	console.info(`Logged in as ${bot.user.tag}!`);
});

