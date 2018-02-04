const Discord = require("discord.js");
const YTDL = require("ytdl-core");
const YouTube = require("discord-youtube-api");
const bot = new Discord.Client();
const prefix = "d!";
const sql = require("sqlite");
sql.open("./score.sqlite");


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
  "Please Report any bugs to @EckzosC#1061 ``` **d!Hello** - Say Hello.. \n **d!Bored** - Well.. \n **d!Fortune** - Fortune Teller \n **d!Flipcoin** - Head or Tale.. \n **d!Dab** - Dab on Haters!.. \n **d!Shoot** - Shoot Someone \n **d!Kill** - Murderder Someone \n **d!007** - James Bond!! \n **d!Roast** - Roast someone.. \n **d!kill** - Kill a tagged user.. \n **d!kiss** - Kiss a tagged user \n **d!Punch** - Punch the tagged user \n **d!love** - Love tagged user. \n **d!Marry** - Marry the tagged user..```",
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
var chathelp = [
  "!!Level - Check ur level.. \n !!Points - Check ur points.. \n !!Rank - Check your rank.. "
]


//--------------------------------------
bot.on('ready', () => {
  console.log('Online!');
  bot.user.setGame('d!help | Adventure Awaits')
//   bot.user.setActivity('d!help | Adventure Awaits', {
//     type: 'STREAMING',
//     url: 'https://twitch.tv/EshanEC',
//   });
  bot.user.setStatus("online")
});

//Commands.-------------------------------
bot.on('message', message => {
  console.log(`(General) ${message.author.id}: ${message.content}`);
 if (message.author.equals(bot.user))return;
if (message.content == ('(╯°□°）╯︵ ┻━┻')){
      message.channel.send('┬━┬ノ(▀̿̿Ĺ̯̿̿▀̿ ̿ノ) Aweee! Nuu!');
    }else if (message.content == ('ღゝ◡╹)ノ♡')) {
      message.channel.send('♡ (◕‿◕✿)')
    }else if (message.content == ('(ʘ言ʘ╬)')) {
      message.channel.send('≧☉_☉≦')
    }else if (message.content == ('(ノಠ益ಠ)ノ彡┻━┻')) {
      message.channel.send('┬━┬ノ(▀̿̿Ĺ̯̿̿▀̿ ̿ノ) Aweee! #LeaveTablesAlone..')
    }else if (message.content == ('(ノಠ益ಠ)ノ彡┻━┻')) {
      message.channel.send('┬━┬ノ(▀̿̿Ĺ̯̿̿▀̿ ̿ノ) Aweee! #LeaveTablesAlone..')
    }
    
     if (!message.content.startsWith(prefix)) return;
          
          var args = message.content.substring(prefix.length).split(" ");
          console.log(`(Divine) ${message.author.id}: ${message.content}`);
      
           switch (args[0].toLowerCase()) {
    //-=-=-=-=-=-=-=-=-=-=-FrostMods
          case'ty':
          if (message.member.hasPermission("MANAGE_MESSAGES")) {
          if (args[1]){message.delete().catch(O_o=>{});message.channel.send('**Solved**, Thanks for Reporting '+message.mentions.members.first())}
            else{message.reply(' Usage - d!ty [Mention]')}
          } 
             else {
               message.channel.send('You dont have Permission to use this Command');
             }
          break;
          case'ss':
          if (message.member.hasPermission("MANAGE_MESSAGES")) {
            if (args[1]){message.delete().catch(O_o=>{});message.channel.send(message.mentions.members.first()+', Cropped screenshots are not accepted..')}
            else{message.reply(' Usage - d!ss [Mention]')}
            } 
               else {
                 message.channel.send('You dont have Permission to use this Command');
               }
          break;
          case'inv':
          if (message.member.hasPermission("MANAGE_MESSAGES")) {
            if (args[1]){message.delete().catch(O_o=>{});message.channel.send(message.mentions.members.first()+', You have submitted an False report, Case Closed.')}
            else{message.reply(' Usage - d!inv [Mention]')}
            } 
               else {
                 message.channel.send('You dont have Permission to use this Command');
               }
          break;
          case'proof':
          if (message.member.hasPermission("MANAGE_MESSAGES")) {
            if (args[1]){message.delete().catch(O_o=>{});message.channel.send(message.mentions.members.first()+', Please provid a valid Proof')}
            else{message.reply(' Usage - d!proof [Mention]')}
            } 
               else {
                 message.channel.send('You dont have Permission to use this Command');
               }
          break;
          case'mod':
          if (message.member.hasPermission("MANAGE_MESSAGES")) {
             message.delete().catch(O_o=>{}); message.channel.send('T-mods do not have banning perms, Please wait for a @Moderator to tend to it. ')
            } 
               else {
                 message.channel.send('You dont have Permission to use this Command');
               }
          break;
          case'general':
          if (message.member.hasPermission("MANAGE_MESSAGES")) {
             message.delete().catch(O_o=>{}); message.channel.send('Please move to <#250021074559827968> for chatting..')
            } 
               else {
                 message.channel.send('You dont have Permission to use this Command');
               }
          break;
          case'support':
          if (message.member.hasPermission("MANAGE_MESSAGES")) {
            message.delete().catch(O_o=>{});message.channel.send('Please move to <#250249087679594496> for Reporting..')
            } 
               else {
                 message.channel.send('You dont have Permission to use this Command');
               }
          break;

//-=-=-=-=-FrostRealms
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
            .addField(`Me - Oe ${message.author.username}, Do u got a Chair bro ??`, `${message.author.username} - Yes.`)
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
            message.author.send('```-=[Divine Commands]=- \n \n d!fun - Fun Commands.. \n d!Social - Social Commands. \n d!Chatbot - Wanna talk with Divine bot? \n d!Info - About Divine Bot..\n d!MHelp - Moderators Commands \n d!Music - Music Commands(Unstable)..```');
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
            message.reply("Chat Bot has been moved to OutBreak Bot Example - @Outbreak Hello :D")
            break;
            case"fun":
            message.channel.send(message.author+", Commands Sent to Dm")
            var embed = new Discord.RichEmbed()
            .addField("-=[Fun Commands]=-", "``` "+fun)
            .setColor(("#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); })))
            message.author.send(embed);;
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
            case"marry":
            if (args[1]) message.channel.send(message.author + " has Married " + message.mentions.members.first());
            else message.channel.send("Usage - d!Marry [user]").catch(console.error);
            break;
            case"love":
            if (args[1]) message.channel.send(message.author + " loves " + message.mentions.members.first());
            else message.channel.send("Whom to shoot? d!Love [Name]").catch(console.error);
            break;
            case"kiss":
            if (args[1]) message.channel.send(message.author + "  Kissed " + message.mentions.members.first());
            else message.channel.send("Usage - d!Kiss [user]").catch(console.error);
            break;
            case"punch":
            if (args[1]) message.channel.send(message.author + "  punched " + message.mentions.members.first());
            else message.channel.send("Usage - d!Punch [user]").catch(console.error);
            break;
            case'say':
//             let modRolee = message.guild.roles.find("name", "[Contributor]");
            if (message.member.hasPermission("BAN_MEMBERS")) {
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
            break;
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
           if (!message.member.hasPermission("KICK_MEMBERS"))
      return message.reply("Sorry, you don't have permissions to use this!");
    let memberzzz = message.mentions.members.first();
    if(!memberzzz)
      return message.reply("Please mention a valid member of this server");
      message.guild.member(memberzzz).kick();
    if(!memberzzz.kickable) 
      return message.reply("I cannot kick this user! Do they have a higher role? Do I have kick permissions?");
    let reason = args.slice(2).join(' ');
    if(!reason)
      return message.reply("Please indicate a reason for the kick!");
    message.reply(`${memberzzz.user.tag} has been kicked by ${message.author.tag} because: ${reason}`)
        break;
             case 'ban':
           if (!message.member.hasPermission("BAN_MEMBERS"))
      return message.reply("Sorry, you don't have permissions to use this!");
    
    let memberzzzz = message.mentions.members.first();
    if(!memberzzzz)
      return message.reply("Please mention a valid member of this server");
                     message.guild.member(memberzzzz).ban();
    if(!memberzzzz.bannable) 
      return message.reply("I cannot ban this user! Do they have a higher role? Do I have ban permissions?");

    let reasonss = args.slice(2).join(' ');
    if(!reasonss)
      return message.reply("Please indicate a reason for the ban!");
    
    message.reply(`${memberzzzz.user.tag} has been banned by ${message.author.tag} because: ${reasonss}`);
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
