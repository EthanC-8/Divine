const Discord = require("discord.js");
const YTDL = require("ytdl-core");
const YouTube = require("discord-youtube-api");
const client = new Discord.Client();
const token = "MzcwNTkwNTMxOTM3NjMyMjc2.DMpS-Q.fOeBqlmqCdqgQmAfgaaIhczLUhY";
const prefix = "!!";

function play(connection, message) {
  var server = servers[message.guild.id];
  server.dispatcher = connection.playStream(YTDL(server.queue[0], {filter: 'audioonly'}));
  server.queue.shift();
  server.dispatcher.on('end', function() {
      if (server.queue[0]) play (connection, message);
      else connection.disconnect();
      console.log('Current Audio finished');
  });
}
var fortune = [
  "Yep",
  "No rip...",
  "Cant say..",
  "Kinky try again xD",
  "No idea sorz!",
  " ¯\_(ツ)_/¯ "
];
var roast = [
  ", I was about to give you a nasty look.. But, i see you already have one :>",
  ", I am not saying that i hate you.. I'm just saying if you got hit by a bus, i would be driving that bus <3",
  ", You remind me of my friend... Ug Lee",
  ", You have two parts of brain, 'left' and 'right'. In the left side, there's nothing right. In the Right side, there's nothing left. :O",
  ", Two Wrongs don't make a right, take your parents as an example..",
  ", You sound reasonable. It must be time to up my medicaton!",
  ", If laughter is the best medicine, your face must be curing the world..",
  ", You are the proof that evolution CAN go in reverse",
  ", i could have agreed with you but then, We both will be wrong",
  " ¯\_(ツ)_/¯ "
];
var flipcoin = [
  "Heads!.",
  "Tales!."
];
var fun = [
  "!!Hello - Say Hello.. \n !!Ping - Pong! \n !!Bored - Solution.. \n !!Fortune - Fortune Teller \n !!Flipcoin - Head or Tale.. \n !!Dab - Dab on Haters!.. \n !!Shoot - Shoot Someone \n !!Kill - Murderder Someone \n !!007 - James Bond!! \n !!Roast - Roast someone..",
];
var musichelp = [
  "!!play [URl] - To add a song to queue.. \n !!skip - To skip the current song.. \n !!stop - To stop the music bot! \n  \n More music features to be added soon.. \n   "
]
var divineinfo = [
  "!!Divine - Who is Divine?.. \n !!Creator - Creator of bot.. \n !!Version - Current Bot Version \n For any Question or help please Contact @Ethan8#1061 "
]
var musichelp = [
  "!!Warn - Warn a User.. \n !!kick - Kick a user out of server..\n   "
]
var servers = {};



//--------------------------------------
client.on('ready', () => {
  console.log('Online!');
  client.user.setGame('With Eshan..')
  client.user.setStatus("online")
});

client.on("guildMemberAdd", function(member) {
  member.guild.channels.find("name", "general").send(member.toString() + "Welcome to the Commumnity!! Have a Great time here! <3");

   member.addRole(member.guild.roles.find("name", "DM"));
});

//--------------------------------------

//Commands.-------------------------------
client.on('message', message => {
  console.log(`(General) ${message.author.id}: ${message.content}`);
 if (message.author.equals(client.user))return;
 if (!message.content.startsWith(prefix)) return;
      
      var args = message.content.substring(prefix.length).split(" ");
      console.log(`(Divine) ${message.author.id}: ${message.content}`);
      
      
       switch (args[0].toLowerCase()) {
        case"ping":
        message.channel.send("Pong! Latency is "+client.ping+"ms.");
        break;
        case"hello":
        message.reply("Hey there, "+ message.author);
        break;
        case"bored":
        message.channel.send("Thats life, i cant do anything in that xD");
        break;
        case"divine":
        message.channel.send("I am super duper Divine Bottt!! Type");
        break;
        case"fortune":
        if (args[1]) message.channel.send(fortune[Math.floor(Math.random() * fortune.length)]);
        else message.channel.send("Correct format !!fortune [Question]");
        break;
        case"roast":
        if (args[1]) message.channel.send(message.mentions.members.first()+roast[Math.floor(Math.random() * roast.length)]);
        else message.channel.send("who? O.o !!Roast @Name");
        break;
        case"flipcoin":
        message.channel.send(flipcoin[Math.floor(Math.random() * flipcoin.length)]);
        break;
        case"help":
        message.channel.send('-=[Divine Commands]=- \n !!fun - Fun Commands.. \n !!Music - Music Commands.. \n !!Info - About Divine Bot..\n !!MHelp - Moderators Commands ');
        break;
        case"music":
        message.channel.send(message.author+", Commands Sent to Dm")
        var embed = new Discord.RichEmbed()
        .addField("-=[Music Commands]=-", "!"+musichelp)
        .setColor(0x00FDDF)
        message.author.send(embed);;
        break;
        case"mhelp":
        message.channel.send(message.author+", Commands Sent to Dm")
        var embed = new Discord.RichEmbed()
        .addField("-=[Moderaor Commands]=-", "Feature Under Development.."+modhelp)
        .setColor(0x00FDDF)
        message.author.send(embed);;
        break;
        case"fun":
        message.channel.send(message.author+", Commands Sent to Dm")
        var embed = new Discord.RichEmbed()
        .addField("-=[Fun Commands]=-", "!"+fun)
        .setColor(0x00FDDF)
        message.author.send(embed);;
        break;
        break;
        case"info":
        message.channel.send(message.author+", Commands Sent to Dm").catch(console.error)
        var embed = new Discord.RichEmbed()
        .addField("-=[About me]=-", "!"+divineinfo)
        .setColor(0x00FDDF)
        message.author.send(embed);;
        break;
        case"version":
        var embed = new Discord.RichEmbed()
        .addField("Version -", "4.1")
        .setColor(0x00FFCF)
        message.channel.send(embed);
        break;
        case"dab":
        message.channel.sendMessage("<o/  \o/  \o>");
        break;
        case"shoot":
        if (args[1]) message.channel.send(message.author + " (╯°□°)--︻╦╤─ - - - " + message.mentions.members.first());
        else message.channel.send("Whom to shoot? !!Shoot [Name]").catch(console.error);
        break;
        case"kill":
        if (args[1]) message.channel.send(message.author + " has killed " + message.mentions.members.first()+"....*RIP*");
        else message.channel.send("Who to kill? !!kill [Name]").catch(console.error);
        break;
        case"007":
        message.channel.send("̿̿  ̿̿ ̿̿ ̿'̿'\̵͇̿̿\з=( ͡° ͜ʖ ͡°)=ε/̵͇̿̿/’̿’̿ ̿ ̿̿ ̿̿ ̿̿  ");         
        break;
        case"creator":
        message.channel.send(" @Ethan8 Created this bot while breaking his head on walls :'D..");         
        break;

        //-----------=[Music Commands]=----------

        case 'play':
        if (!args[1])  {
            message.reply('Please provide a URL').catch(console.error);
            console.log('Link not provided');
            return;
        }       

        if (!args[1].startsWith("http")) {
          message.reply("Not a Correct URL");
          
         }
        
        if (!message.member.voiceChannel){
            message.reply('You have to be in a Music  channel to play music').catch(console.error);
            console.log('Was not in Voice Channel');
            return;
        } 
        
        if (!servers[message.guild.id]) servers[message.guild.id] = {
            queue: []
        };

        var server = servers[message.guild.id];
        server.queue.push(args[1]) + (message.channel.send("Added to queue"));

        if (!message.guild.voiceConnection) message.member.voiceChannel.join().then(function(connection) {
            play(connection, message);
            message.reply('Audio Playing');
            console.log('Audio Playing');
        });
        break;
    case 'skip':
        var server = servers[message.guild.id];
        if (server.dispatcher) server.dispatcher.end();
        message.reply('Audio skipped');
        console.log('Audio skipped').catch(console.error);
        break;
    case 'stop':
    var server = servers[message.guild.id];
    
    if (message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
        break;

       //-----------=[Music Commands]=----------

       //-----------=[Moderator Commands]=----------
        case "warn":
        let modRole = message.guild.roles.find("name", "Mod");
        if(message.member.roles.has(modRole.id)){
          if (args[1] , args[2]) message.channel.send(message.mentions.members.first()+", You have been warned for - " + args[2] );
          else message.channel.send("Format-  !!Warn [@user] [Reason]").catch(console.error);
        } 
        break;
        case "kick":
        let modRolek = message.guild.roles.find("name", "Mod")
        if(message.member.roles.has(modRolek.id)){
        if(message.mentions.members.size == 0) { return message.reply("Please mention a user to kick !!kick [@user]");}
        let kickmember = message.guild.member(message.mentions.members.first()+message.channel.send(message.mentions.members.first()+", has been kicked."));
        if(!kickmember){return message.reply("That user does not seems vaild");}
        if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) { return message.reply("I dont have the permission (KICK_MEMBER) to do this..");}
        kickmember.kick().catch(console.error);
        }
        break;
        case "clear":
        if (message.member.hasPermission("MANAGE_MESSAGES")) {
          if (args[1]) {
          let messagecount = parseInt(args[1]);
          message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));                      
          message.reply(" "+args[1]+" Messages have deleted..");
        }
      else {
        message.reply(" Please Enter number of messages to delete ");
      }
    }
        break;
        //-----------=[Moderator Commands]=----------
        default:
        console.log("No such command");
        return;
      }
});
//------[Async]--------------------------------
async () => {
    const User = await client.fetchUser(id);
    // Do something with the User object
}
//---------------------------------------------

//Messages.--------------------------------
client.on('msg', message => {
 if (msg.content == "fuck") {
  msg.channel.sendMessage("Watch your Language please..");
  }
});

client.login('MzcwNTkwNTMxOTM3NjMyMjc2.DMpS-Q.fOeBqlmqCdqgQmAfgaaIhczLUhY');