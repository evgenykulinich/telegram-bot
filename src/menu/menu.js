module.exports = {
  menu: async function (bot, chatId, text) {
    try {
      if (text === '/start')
        return bot.sendMessage(chatId, 'Bot is working!')
    } catch (e) {
      console.log('Menu commands error: ', e)
    }
  }
}