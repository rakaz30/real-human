const Discord = require('discord.js');
const token = 'NzQ0MjU1MTQ1MTY4MzM4OTY0.Xzgjng.YP8C0gg9ZwOqsTXt6NmOrA6saXE';
const bot = new Discord.Client();
const prefix = '-';
const api = require("imageapi.js");




const fs = require('fs');
bot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	bot.commands.set(command.name, command);
}

bot.on('ready', () =>{
    console.log('This bot is tottaly human');
    bot.user.setPresence({ activity: { name: 'made by two real parents' }, status: 'Online' })
});


bot.on('message', message =>{
  if(!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if(command === 'human'){
      bot.commands.get('human').execute(message, args);
  } else if(command === 'love'){
    bot.commands.get('love').execute(message, args);
} else if(command === 'joke'){
    bot.commands.get('joke').execute(message, args);
}
});

bot.login(token);