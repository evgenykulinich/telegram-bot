module.exports = {
  menu: async function (bot, chatId, text, lastMessage) {
    try {
      if (text === '/start')
        await bot.sendMessage(chatId, 'Bot is working!', { reply_to_message_id: lastMessage })
    } catch (e) {
      console.log('Menu commands error: ', e)
    }
  }
}