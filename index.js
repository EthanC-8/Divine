const Discord = require("discord.js");
const YTDL = require("ytdl-core");
const YouTube = require("discord-youtube-api");
const client = new Discord.Client();
const token = "MzcwNTkwNTMxOTM3NjMyMjc2.DMpS-Q.fOeBqlmqCdqgQmAfgaaIhczLUhY";
const prefix = "!!";
const sql = require("sqlite");
sql.open("./score.sqlite");
const Cleverbot = require("cleverbot-node");
const clbot = new Cleverbot;
clbot.configure({botapi: "CC5ueu3-r7zIW7y3b7Sr5BYR5sg"});


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
  "*To talk to Divine bot msg him in DM ** \n !!Hello - Say Hello.. \n !!Ping - Pong! \n !!Bored - Solution.. \n !!Fortune - Fortune Teller \n !!Flipcoin - Head or Tale.. \n !!Dab - Dab on Haters!.. \n !!Shoot - Shoot Someone \n !!Kill - Murderder Someone \n !!007 - James Bond!! \n !!Roast - Roast someone..",
];
var musichelp = [
  "!!play [URl] - To add a song to queue.. \n !!skip - To skip the current song.. \n !!stop - To stop the music bot! \n  \n More music features to be added soon.. \n   "
]
var divineinfo = [
  "!!Divine - Who is Divine?..  \n !!Uptime - To check bot's uptime...  \n !!Creator - Creator of bot.. \n !!Version - Current Bot Version \n For any Question or help please Contact @Ethan8#1061 "
]
var modhelp = [
  "!!Warn - Warn a User.. \n !!kick - Kick a user out of server.. \n !!clear - Clear number of messages.. "
]
var servers = {};
var testc = "Pass";
var emcolor = [
  "0x00FDDF",
  "0x05E463",
  "0x05E4B5",
  "0x0FDD00",
  "0x5E00DD",
  "0x3F2C5A",
  "0xEEF813",
  "0xF7A100"
];
var chathelp = [
  "!!Level - Check ur level.. \n !!Points - Check ur points.. \n !!Rank - Check your rank.. "
]


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
 //-----------------CLEVERBOT-----------------
 if (message.channel.type === "dm") {
  clbot.write(message.content, (response) => {
    message.channel.startTyping();
    setTimeout(() => {
      message.channel.send(response.output).catch(console.error);
      message.channel.stopTyping();
    }, Math.random() * (1 - 3) + 1 * 1000);
  });
}
    //-----------------CLEVERBOT-----------------
 if (!message.content.startsWith(prefix)) return;
      
      var args = message.content.substring(prefix.length).split(" ");
      console.log(`(Divine) ${message.author.id}: ${message.content}`);

      //----------------[SQL]--------------
sql.get(`SELECT * FROM scores WHERE userId ="${message.author.id}"`).then(row => {
  if (!row) {
    sql.run("INSERT INTO scores (userId, points, level, rank) VALUES (?, ?, ?, ?)", [message.author.id, 1, 0, "Member"]);
  } else {
    let curLevel = Math.floor(0.1 * Math.sqrt(row.points + 1));
    if (curLevel > row.level) {
      row.level = curLevel;
      sql.run(`UPDATE scores SET points = ${row.points + 1}, level = ${row.level} WHERE userId = ${message.author.id}`);
      message.reply(`You've leveled up to level **${curLevel}**! Congratz!!`);
    }
    sql.run(`UPDATE scores SET points = ${row.points + 1} WHERE userId = ${message.author.id}`);
  }
}).catch(() => {
  console.error;
  sql.run("CREATE TABLE IF NOT EXISTS scores (userId TEXT, points INTEGER, level INTEGER, rank TEXT)").then(() => {
    sql.run("INSERT INTO scores (userId, points, level, rank) VALUES (?, ?, ?, ?)", [message.author.id, 1, 0, "Member"]);
  });
});
if (!message.content.startsWith(prefix)) return;

if (message.content.startsWith(prefix + "level")) {
  sql.get(`SELECT * FROM scores WHERE userId ="${message.author.id}"`).then(row => {
    if (!row) return message.reply("Your current level is 0");
    message.reply(`Your current level is ${row.level}`);
  });
} else

if (message.content.startsWith(prefix + "points")) {
  sql.get(`SELECT * FROM scores WHERE userId ="${message.author.id}"`).then(row => {
    if (!row) return message.reply("sadly you do not have any points yet!");
    message.reply(`you currently have ${row.points} points, good going!`);
  });
}
if (message.content.startsWith(prefix + "rank")) {
  sql.get(`SELECT * FROM scores WHERE userId ="${message.author.id}"`).then(row => {
    if (!row) return message.reply("Your are not ranked yet :sad:");
    message.reply(`Your rank is ${row.rank} in the server!`);
  });
}
  //----------------[SQL]--------------

       switch (args[0].toLowerCase()) {
        case"ping":
        var embed = new Discord.RichEmbed()
        .addField(new Date().getTime() - message.createdTimestamp + "ms. :alarm_clock: ", client.ping+"ms. :heartbeat:" )
        .setColor(+emcolor[Math.floor(Math.random() * emcolor.length)])
        message.channel.send(embed);
        break;
        case"hello":
        message.reply("Hey there, "+ message.author);
        break;
        case"de":
        var embed = new Discord.RichEmbed()
        .addField("Devil :revolving_hearts: Angel", "     :angel::smiling_imp:" )
        .setColor(+emcolor[Math.floor(Math.random() * emcolor.length)])
        message.channel.send(embed);
        break;
        case"bored":
        message.channel.send("Thats life, i cant do anything in that xD");
        break;
        case"divine":
        message.channel.send("I am super duper Divine Bottt!! Type");
        break;
        case"fortune":
        if (args[1]) message.channel.send(fortune[Math.floor(Math.random() * fortune.length)]);
        else message.channel.send("The input text has too few parameters..");
        break;
        case"roast":
        if (args[1]) message.channel.send(message.mentions.members.first()+roast[Math.floor(Math.random() * roast.length)]);
        else message.channel.send("The input text has too few parameters..");
        break;
        case"flipcoin":
        message.channel.send(flipcoin[Math.floor(Math.random() * flipcoin.length)]);
        break;
        case"help":
        message.channel.send('-=[Divine Commands]=- \n !!fun - Fun Commands.. \n !!Music - Music Commands.. \n !!Chathelp - For your server profile \n !!Info - About Divine Bot..\n !!MHelp - Moderators Commands ');
        break;
        case"music":
        message.channel.send(message.author+", Commands Sent to Dm")
        var embed = new Discord.RichEmbed()
        .addField("-=[Music Commands]=-", "!"+musichelp)
        .setColor(+emcolor[Math.floor(Math.random() * emcolor.length)])
        message.author.send(embed);
        break;
        case"mhelp":
        message.channel.send(message.author+", Commands Sent to Dm")
        var embed = new Discord.RichEmbed()
        .addField("-=[Moderaor Commands]=-", "!"+modhelp)
        .setColor(+emcolor[Math.floor(Math.random() * emcolor.length)])
        message.author.send(embed);;
        break;
        case"chathelp":
        message.channel.send(message.author+", Commands Sent to your Dm")
        var embed = new Discord.RichEmbed()
        .addField("-=[Chat Commands]=-", "!"+chathelp)
        .setColor(+emcolor[Math.floor(Math.random() * emcolor.length)])
        message.author.send(embed);;
        break;
        case"fun":
        message.channel.send(message.author+", Commands Sent to Dm")
        var embed = new Discord.RichEmbed()
        .addField("-=[Fun Commands]=-", "*"+fun)
        .setColor(+emcolor[Math.floor(Math.random() * emcolor.length)])
        message.author.send(embed);;
        break;
        break;
        case"info":
        message.channel.send(message.author+", Commands Sent to Dm").catch(console.error)
        var embed = new Discord.RichEmbed()
        .addField("-=[About me]=-", "!"+divineinfo)
        .setColor(+emcolor[Math.floor(Math.random() * emcolor.length)])
        message.author.send(embed);;
        break;
        case"version":
        var embed = new Discord.RichEmbed()
        .addField("Version -", "4.15.2")
        .setColor(+emcolor[Math.floor(Math.random() * emcolor.length)])
        message.channel.send(embed);
        break;
        case"dab":
        message.channel.sendMessage("<o/  \o/  \o>");
        break;
        case"shoot":
        if (args[1]==message.mentions.members) message.channel.send("Pass");
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
        case"uptime":
            message.channel.send((process.uptime())+" Seconds.");
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
          if (args[1] , args[2]) message.channel.send(message.mentions.members.first()+", You have been warned for - " + args[2]);
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
          message.reply(+args[1]+" Messages have deleted..");
        }
      else {
        message.reply(" Please Enter numeric digit of messages to delete ");
      }
    }
        break;
        //-----------=[Moderator Commands]=----------
        default:
        console.log("Not a case");
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

client.login(process.env.BOT_TOKEN);
