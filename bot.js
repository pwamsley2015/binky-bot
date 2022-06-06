const { Client, Intents } = require('discord.js');
const { info } = require('winston');
var logger = require('winston');
var auth = require('./auth.json');

// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});

logger.level = 'debug';

// Initialize Discord Bot

var bot = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
// var bot = new Discord.Client({
//     token: auth.token,
//     autorun: true
// });

bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    // logger.info(bot.username + ' - (' + bot.id + ')');
});

bot.on('ready', () => {
    console.log('I am ready!');
});

bot.on('message', message => {

    console.log("Message Recieved!");
    console.log(message);

    if (message.author.username === "binkgo") {
        info("Message from emory! Reply from async!");
        message.react('🤣');
    }

    if (message.author.username === "pwams") {
        info("Message from pwams! Reply from async!");
        message.react('☝️');
    }
});

bot.login(auth.token)