const Discord = require("discord.js");
const YTDL = require("ytdl-core");
const YouTube = require("discord-youtube-api");
const bot = new Discord.Client();
const token = "MzcwNTkwNTMxOTM3NjMyMjc2.DMpS-Q.fOeBqlmqCdqgQmAfgaaIhczLUhY";
const prefix = "d!";
const sql = require("sqlite");
sql.open("./score.sqlite");
const Cleverbot = require("cleverbot");
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
]; //8ball
var roast = [
  ", I was about to give you a nasty look.. But, i see you already have one :>",
  ", I am not saying that i hate you.. I'm just saying if you got hit by a bus, i would be driving that bus <3",
  ", You remind me of my friend... Ug Lee",
  ", You have two parts of brain, 'left' and 'right'. In the left side, there's nothing right. In the Right side, there's nothing left. :O",
  ", Two Wrongs don't make a right, take your parents as an example..",
  ", You sound reasonable. It must be time to up my medicaton!",
  ", If laughter is the best medicine, your face must be curing the world..",
  ", You are the proof that evolution CAN go in reverse",
  ", i could have agreed with you but then, We both will be wrong"
]; //Roasting Quotes
var flipcoin = [
  "Heads!.",
  "Tales!."
]; //FLipcoin - Head Tales
var fun = [
  "You can chat with bot d!ChatHelp  \n ```**d!Hello** - Say Hello.. \n **d!Chair** - Chair meme.. \n **d!Bored** - Solution.. \n **d!Fortune** - Fortune Teller \n **d!Flipcoin** - Head or Tale.. \n **d!Dab** - Dab on Haters!.. \n **d!Shoot** - Shoot Someone \n **d!Kill** - Murderder Someone \n **d!007** - James Bond!! \n **d!Roast** - Roast someone..```",
]; //Fun Commmadns.
var musichelp = [
  "*Notice - Music Features might not stable.. Stay tuned for a update!**\n``` d!play [URl] - To add a song to queue.. \n d!skip - To skip the current song.. \n d!stop - To stop the music bot! ``` \n More music features to be added soon.. "
] //Music Commands..
var divineinfo = [
  "d!Divine - Divine?..  \n d!Uptime - To check bot's uptime.  \n d!Ping - Check latency and responce time of bot.  \n d!Creator - Creator of bot.. \n d!Version - Current Bot Version \n``` For any Question or help please Contact @Ethan8#1061 "
] //Bot Info
var modhelp = [
  "d!Warn - Warn a User.. \n d!kick - Kick a user out of server.. \n d!clear - Clear number of messages..``` "
] //Moderator commands.
var socialhelp = [
  'd!Profile - To look at profile of a user.  \n d!Avatar - Avatar of a user.```'
]

var servers = {};
var testc = "Pass"; //For testing commands..
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
bot.on('ready', () => {
  console.log('Online!');
  bot.user.setGame('With Updates..')
  bot.user.setStatus("online")
});

//Commands.-------------------------------
bot.on('message', message => {
  console.log(`(General) ${message.author.id}: ${message.content}`);
 if (message.author.equals(bot.user))return;
 //-----------------CLEVERBOT-----------------
 var botidf = '<@370590531937632276>';
 if (message.content.startsWith(botidf)) {
  clbot.write(message.content, (response) => {
    message.channel.startTyping();
    setTimeout(() => {
      message.channel.send(response.output).catch(console.error);
      message.channel.stopTyping();
    }, Math.random() * (1 - 3) + 1 * 1000);
  });
}
    //-----------------CLEVERBOT-----------------
if (message.content == ('(╯°□°）╯︵ ┻━┻')){
  message.channel.send('┬━┬ノ(▀̿̿Ĺ̯̿̿▀̿ ̿ノ) Aweee! Nuu!');
}else if (message.content == ('coland')) {
      message.channel.send('Coland is love :heart: Coland is life!! ColorPixeled :revolving_hearts: Aland ')
}else if (message.content == ('CoLand')) {
  message.channel.send('Coland is love :heart: Coland is life!! ColorPixeled :revolving_hearts: Aland ')
}else if (message.content == ('Coaland')) {
  message.channel.send('Coland is love :heart: Coland is life!! ColorPixeled :revolving_hearts: Aland ')
}else if (message.content == ('CoAland')) {
  message.channel.send('Coland is love :heart: Coland is life!! ColorPixeled :revolving_hearts: Aland ')
}else if (message.content == ('COLAND')) {
  message.channel.send('Coland is love :heart: Coland is life!! ColorPixeled :revolving_hearts: Aland ')
}else if (message.content == ('ღゝ◡╹)ノ♡')) {
  message.channel.send('♡ (◕‿◕✿)')
}else if (message.content == ('(ʘ言ʘ╬)')) {
  message.channel.send('≧☉_☉≦')
}else if (message.content == ('Cleanza')) {
  message.channel.send('Cleanza : Iza :revolving_hearts: Cleaner')
}else if (message.content == ('cleanza')) {
  message.channel.send('Cleanza : Iza :revolving_hearts: Cleaner')
}else if (message.content == ('(ノಠ益ಠ)ノ彡┻━┻')) {
  message.channel.send('┬━┬ノ(▀̿̿Ĺ̯̿̿▀̿ ̿ノ) Aweee! #LeaveTablesAlone..')
}else if (message.content == ('(ノಠ益ಠ)ノ彡┻━┻')) {
  message.channel.send('┬━┬ノ(▀̿̿Ĺ̯̿̿▀̿ ̿ノ) Aweee! #LeaveTablesAlone..')
}else if (message.content == ('kalishan')) {
  message.channel.send('Kalishan?? Well, its a love Story of Kalimzoo :heart: KishanSital')
}else if (message.content == ('kalishan')) {
  message.channel.send('Kalishan?? Well, its a love Story of Kalimzoo :heart: KishanSital')
}else if (message.content == ('Kalishan')) {
  message.channel.send('Kalishan?? Well, its a love Story of Kalimzoo :heart: KishanSital')
}else if (message.content == ('KALISHAN')) {
  message.channel.send('Kalishan?? Well, its a love Story of Kalimzoo :heart: KishanSital')
}

 if (!message.content.startsWith(prefix)) return;
      
      var args = message.content.substring(prefix.length).split(" ");
      console.log(`(Divine) ${message.author.id}: ${message.content}`);
  
       switch (args[0].toLowerCase()) {
         
        case"ping":
        var botpppt = bot.ping.toString();
        var botzping = botpppt.substring(0, 5);
        var embed = new Discord.RichEmbed()
        .addField(new Date().getTime() - message.createdTimestamp + "ms. :alarm_clock: ", botzping+"ms. :heartbeat:" )
        .setColor(("#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); })))
        message.channel.send(embed);
        break;
        case"hello":
        message.reply("Hey there, "+ message.author);
        break;
        case"chair":
        var pewdiechairmeme = 'https://media1.tenor.com/images/ecedecd45958c923a44a20bb04e1997c/tenor.gif?itemid=10722056';
        var embed = new Discord.RichEmbed()
        .addField(`Me - Oe ${message.author.username}, Do u got a Chair bro ??`, `${message.author.username} - Yes, i am sitting on one rn`)
        .setImage(pewdiechairmeme)
        .setColor(("#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); })))
         message.channel.send(embed);
        break;
        case"de":
        var embed = new Discord.RichEmbed()
        .addField("Doris :revolving_hearts: Ethan", "     :angel::smiling_imp:" )
        .setColor(("#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); })))
        message.channel.send(embed);
        break;
        case"bored":
        message.channel.send("Thats life, i cant do anything in that xD");
        break;
        case"divine":
        message.channel.send("I am super duper Divine Bottt!! Type d!help for all the commands");
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
        message.author.send('```-=[Divine Commands]=- \n \n d!fun - Fun Commands.. \n d!Social - Social Commands. \n d!Chatbot - Wanna talk with Divine bot? \n d!Info - About Divine Bot..\n d!MHelp - Moderators Commands \n d!Music - Music Commands..```');
        break;
        case"music":
        message.channel.send(message.author+", Commands has Sent to you DM")
        var embed = new Discord.RichEmbed()
        .addField("-=[Music Commands]=-", "*"+musichelp)
        .setColor(("#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); })))
        message.author.send(embed);
        break;
        case"social":
        message.channel.send(message.author+", Commands Sent to your Dm")
        var embed = new Discord.RichEmbed()
        .addField("-=[Social Commands]=-", "``` "+socialhelp)
        .setColor(("#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); })))
        message.author.send(embed);
        break;
        case"mhelp":
        message.channel.send(message.author+", Commands Sent to Dm")
        var embed = new Discord.RichEmbed()
        .addField("-=[Moderaor Commands]=-", "``` "+modhelp)
        .setColor(("#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); })))
        message.author.send(embed);;
        break;
        case"chatbot":
        message.reply("Chatbot has been taken down for maintance..")
        break;
        case"fun":
        message.channel.send(message.author+", Commands Sent to Dm")
        var embed = new Discord.RichEmbed()
        .addField("-=[Fun Commands]=-", "``` "+fun)
        .setColor(("#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); })))
        message.author.send(embed);;
        break;
        break;
        case"info":
        message.channel.send(message.author+", Commands Sent to Dm").catch(console.error)
        var embed = new Discord.RichEmbed()
        .addField("-=[About me]=-", "``` "+divineinfo)
        .setColor(("#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); })))
        message.author.send(embed);;
        break;
        case"version":
        var embed = new Discord.RichEmbed()
        .addField("Version -", "5.7")
        .setColor(("#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); })))
        message.channel.send(embed);
        break;
        case"dab":
        message.channel.sendMessage("<o/  \o/  \o>");
        break;
        case"shoot":
        if (args[1]) message.channel.send(message.author + " (╯°□°)--︻╦╤─ - - - " + message.mentions.members.first());
        else message.channel.send("Whom to shoot? d!Shoot [Name]").catch(console.error);
        break;
        case'say':
        let modRolee = message.guild.roles.find("name", "[Contributor]");
        if(message.member.roles.has(modRolee.id)){
          if (args[1]){
          const sayMessage = args.join(" ");
        message.delete().catch(O_o=>{}); 
        message.channel.send(sayMessage.substring(3, 5000));
          }
          else { message.channel.send("Format-  d!say [Message]").catch(console.error); }
        } 
           else {
             message.channel.send('You dont have Permission to use this Command');
           }
        break;
        case"kill":
        if (args[1]) message.channel.send(message.author + " has killed " + message.mentions.members.first()+"....*RIP*");
        else message.channel.send("Who to kill? d!kill [Name]").catch(console.error);
        break;
        case"007":
        message.channel.send("̿̿  ̿̿ ̿̿ ̿'̿'\̵͇̿̿\з=( ͡° ͜ʖ ͡°)=ε/̵͇̿̿/’̿’̿ ̿ ̿̿ ̿̿ ̿̿  ");         
        break;
        case"creator":
        message.channel.send(" @Ethan8 Created this bot while breaking his head on walls :'D..");         
        break;
        case"uptime":
        String.prototype.toHHMMSS = function () {
          var sec_num = parseInt(this, 10); 
          var hours   = Math.floor(sec_num / 3600);
          var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
          var seconds = sec_num - (hours * 3600) - (minutes * 60);
      
          if (hours   < 10) {hours   = "0"+hours;}
          if (minutes < 10) {minutes = "0"+minutes;}
          if (seconds < 10) {seconds = "0"+seconds;}
          var time    = hours+':'+minutes+':'+seconds;
          return time;
      }
      
          var time = process.uptime();
          var uptime = (time + "").toHHMMSS();
          var embed = new Discord.RichEmbed()
        .setAuthor("Divine Bot Uptime", 'https://cdn.discordapp.com/avatars/370590531937632276/f08b19bd7b016f968cac2075614be50f.png')
        .addField(uptime, 'Bot is Running perfectly..')
        .setColor(("#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); })))
         message.channel.send(embed);
        break;
        case'avatar':
        var member = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;
        if (!message.mentions.members.first()||message.guild.members.get(args[0])) return message.reply("Please provide a vaild Mention or USER ID");
        var pfp = member.user.avatarURL;
        var embed = new Discord.RichEmbed()
        .setTimestamp()
        .setURL(pfp)
        .addField("Avatar of user -", `${member.user.username}#${member.user.discriminator}`)
        .setImage(pfp)
        .setColor(("#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); })))
        message.channel.send(embed);
        break;
        case'profile':
        var memberz = message.mentions.members.first()||message.guild.members.get(args[0]);
        if (!message.mentions.members.first()||message.guild.members.get(args[0])) return message.reply("Please provide a vaild Mention or USER ID");
        var pfp = memberz.user.avatarURL;
        var embed = new Discord.RichEmbed() 
        .setAuthor("Discord Profile", 'https://thumb1.shutterstock.com/display_pic_with_logo/164466002/576253150/stock-vector-vector-man-profile-icon-transparent-background-576253150.jpg')
        .setFooter("Bot developed by - @Eshxn8#1061 ", "https://cdn.discordapp.com/avatars/370590531937632276/f08b19bd7b016f968cac2075614be50f.png")
        .setThumbnail(pfp)
        .addField('User Name', `${memberz.user.username}`)
        .addField('Discriminator', memberz.user.discriminator) 
        .addField('User ID', memberz.user.id)
        .addField('Last Message ', memberz.user.lastMessage)
        .addField('Status',`${memberz.user.presence.status}`)
        .addField('Account Created on', `${memberz.user.createdAt}`.substring(0,24))
        // .addBlankField(true)
        .setColor(("#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); })))
        message.channel.send(embed);
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
            message.reply('Audio Playing :notes: ');
            console.log('Audio Playing');
        });
        break;
        case 'p':
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
            message.reply('Audio Playing :notes: ');
            console.log('Audio Playing');
        });
        break;s
    case 'skip':
        var server = servers[message.guild.id];
        if (server.dispatcher) server.dispatcher.end();
        message.reply('Audio skipped  :track_next:');
        console.log('Audio skipped').catch(console.error);
        break;
    case 's':
        var server = servers[message.guild.id];
        if (server.dispatcher) server.dispatcher.end();
        message.reply('Audio skipped  :track_next:');
        console.log('Audio skipped').catch(console.error);
        break;
    case 'stop':
    var server = servers[message.guild.id];
    message.reply("Music Stopped  :stop_button:")
    
    if (message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
        break;
    case 'leave':
        var server = servers[message.guild.id];
        message.reply("Disconnected. :stop_button:")
        
        if (message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
            break;
    case 'disconnect':
    var server = servers[message.guild.id];
    message.reply("Disconnected.  :stop_button:")
    
    if (message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
        break;
    

       //-----------=[Music Commands]=----------

       //-----------=[Moderator Commands]=----------
        case "warn":
//         let modRole = message.guild.roles.find("name", "[Moderator]");
//         if(message.member.roles.has(modRole.id)){
           if (message.member.hasPermission("MANAGE_MESSAGES")) {
          if (args[1] , args[2]) message.channel.send(message.mentions.members.first()+", You have been warned for breaking a server's law..");
          else message.channel.send("Format-  d!Warn [@user] [Reason]").catch(console.error);
        } 
           else {
             message.channel.send('You dont have Permission to use this Command');
           }
        break;
        case "kick":
        // let modRolek = message.guild.roles.find("name", "Moderator")
        // if(message.member.roles.has(modRolek.id)){
        if (message.member.hasPermission("KICK_MEMBERS")) {
        if(message.mentions.members.size == 0) { return message.reply("Please mention a user to kick d!kick [@user]");}
        let kickmember = message.guild.member(message.mentions.members.first()+message.channel.send(message.mentions.members.first()+", has been kicked."));
        if(!kickmember){return message.reply("That user does not seems vaild");}
        if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) { return message.channel.send("I dont have the permission (KICK_MEMBER) to do this..");}
        kickmember.kick().catch(console.error);
        }
        else{message.reply(', You dont have permission to use that command..')}
        break;
        case "clear":
        if (message.member.hasPermission("MANAGE_MESSAGES")) {
          if (args[1]) {
          let messagecount = parseInt(args[1]);
          message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));                      
          message.reply(+args[1]+" Messages has been deleted..");
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

bot.login(process.env.BOT_TOKEN);
