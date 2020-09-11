const Discord = require("discord.js");
const client = new Discord.client;

const {
	token,
	prefix,
	owner,
	developers,
	invite
} = require("./config.json");

//Libraries
const chalk = require("chalk");

//APIs


client.login(token);

//Run when bot is online

client.on(ready, "ready" => {
	console.log(`${client.user.tag} is online!`);
	client.user.setActivity("prefix: " + prefix);
});

//message event listener

client.on(message, "message" => {
	if(message.author.bot || message.type.dm) return;
	
	const command = message.content.toLowerCase();
	
	if(command === prefix + "help"){
		const helpEmbed = {
			color: 0x99ff00,
			title: "Commands:",
			thumbnail: {
				url: client.user.displayAvatarURL({dynamic: true})
			},
			fields: [
				{
					name: "basic commands:",
					value: "**say** - use me to express your opinion\n**avatar [mention] - steal someones avatar\n"
				},
				{
					name: "field 2",
					value: "sample text"
				}
			]
		};

		message.channel.send({embed: helpEmbed});
		console.log(chalk.green(`${message.author.tag} requiested help command to ${message.guild.name}(${message.guild.id})`));
	}

	if(command === prefix + "say"){
		const text = command.slice(2);

		message.channel.send(text);
	}

	if(command.startsWith(`${prefix}avatar`)){
		const user = message.mentions.members.first();

		if(!user) return message.channel.send("You have to mention someone!");

		const avatarEmbed = {
			color: 0x009999,
			title: `${user}'s avatar:`
			image: {
				url: user.displayAvatarURL({dynamic: true});
			}
		};

		message.channel.send({embed: avatarEmbed});
	}



	//
	//					Developer commands
	//

	if(command === prefix + "nerdstat"){
		if(message.author.id = developers[]){
			const nerdEmbed = {
				color: 0x009900,
				title: "Nerd stats",
				description: `Owner: ${owner}.\nCurrently running on \`master\` branch`,
				//number of branches, commits last week and contributors
			};

			message.channel.send({embed: nerdEmbed})
		}else{
			message.channel.send("You have to be developer in order to use this command!");
		}
	}

	

});
