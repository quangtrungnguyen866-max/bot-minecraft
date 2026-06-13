const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: '163.5.201.8',
  port: 13113,
  username: 'Bot_AFK',
  version: false
});

bot.on('spawn', () => {
  console.log('Bot da vao server!');
  setInterval(() => {
    bot.setControlState('jump', true);
    setTimeout(() => bot.setControlState('jump', false), 500);
  }, 20000);
});

bot.on('kicked', console.log);
bot.on('error', console.log);
