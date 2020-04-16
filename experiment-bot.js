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

// When client reads a message
client.on('message', message => {
	// Check if prefix is used
	if (message.content.charAt(0) === '!') {
		const commandLogSuccessMessage = `Command: ${message.content} used by: ${message.member.displayName}`;
		const commandLogFailMessage = `Invalid command used by: ${message.member.displayName}`;

		switch (message.content) {
		case '!ping':
			message.channel.send('pong!');
			console.log(commandLogSuccessMessage);
			break;

		default:
			console.log(commandLogFailMessage);
			break;
		}
	}
});
