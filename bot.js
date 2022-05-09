const CronJob = require('cron').CronJob
const config = require('./config.json')
const Discord = require('discord.js-selfbot');
const client = new Discord.Client();

var job = new CronJob('0 */120 * * * *', function () {
    const channel = client.channels.cache.get('814954977830371328');
    console.log(channel.lastMessage)
}, null, false)

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity("Sponge Killing Simulator");

    job.start();
})

client.on('message', (msg) => { // 814954977830371328
    if (msg.channel.id == 814954977830371328 && msg.author.id != 883428081166061628 && isNaN(msg.content) == false) {
        msg.channel.send(parseInt(msg.content) + 1)
    }
})

client.login(config.token);