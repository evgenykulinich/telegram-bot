import { constants } from '../constants/index.js'

export const menu = async function (bot, chatId, text, lastMessage) {
  try {
    if (text === constants.menu.start)
      await bot.sendMessage(chatId, constants.menu.success, { reply_to_message_id: lastMessage })
  } catch (e) {
    console.log('Menu commands error: ', e)
  }
}
