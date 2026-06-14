const mineflayer = require('mineflayer');

function startBot() {
    const bot = mineflayer.createBot({
        host: '163.5.201.2',
        port: 12253,
        username: 'Bot_AFK_2',
        version: '1.20.1', // Nhớ thay đúng phiên bản server của bạn
        physicsEnabled: false // Tắt vật lý để tránh lỗi di chuyển
    });

    bot.on('spawn', () => {
        console.log('Bot da vao game va o che do AFK!');
        // Nếu server có login, bỏ dấu // ở dòng dưới
        // bot.chat('/login MAT_KHAU_CUA_BOT');
    });

    bot.on('kicked', (reason) => {
        console.log('Bot bi kick, dang cho 20s de ket noi lai...', reason);
        setTimeout(startBot, 20000);
    });

    bot.on('error', (err) => {
        console.log('Loi ket noi:', err);
        setTimeout(startBot, 20000);
    });
}

startBot();
bot.on('chat', (username, message) => {
    // Không để bot tự trả lời chính nó
    if (username === bot.username) return;

    // Ví dụ: Nếu ai đó nhắn "Bot oi", nó sẽ trả lời
    if (message.includes('Bot oi')) {
        bot.chat('Toi day! Ban can gi khong?');
    }

    // Ví dụ: Bot tự động chào người mới vào
    if (message.includes('hello')) {
        bot.chat('Chao ban ' + username + '!');
    }
});
