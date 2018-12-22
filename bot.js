const Discord = require('discord.js');
const client = new Discord.Client();
const D = require("discord.js");
const client = new D.Client();
const moment = require("moment")


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("guildMemberAdd", m => {
    if (datediff(parseDate(moment(m.user.createdTimestamp).format('l')), parseDate(moment().format('l'))) < Month) {
        m.ban();
    };
});
function parseDate(str) {
    var mdy = str.split('/');
    return new Date(mdy[2], mdy[0]-1, mdy[1]);
};

function datediff(first, second) {
    return Math.round((second-first)/(10006060*24));
};
client.login(process.env.BOT_TOKEN);
