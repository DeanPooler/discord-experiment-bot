// Dependencies
require('dotenv').config();
const Discord = require('discord.js');
// Instantiate new discord client
const client = new Discord.Client();

// Get client token from dotenv file
const TOKEN = process.env.TOKEN;

// Log the client in with given credentials
client.login(TOKEN);

// When client is ready log message to console
// Can only be triggered once
client.once('ready', () => {
	console.info(`Logged in as ${client.user.tag}!`);
});

// When client reads a message check if the right prefix has been used
// If prefix is found check against cases
// If command is matched run that case's code
client.on('message', message => {
	if (message.charAt(0) == '!') {
		console.log(message.content);
		switch (message.content) {
		case '!ping':
			message.channel.send('pong!');
			break;

		default:
			break;
		}
	}
});
