import TelegramApi from 'node-telegram-bot-api'
import dotenv from 'dotenv'
dotenv.config()

import { menu } from './menu/menu.js'
import { menuCommands } from './menu/menu-commands.js'

const bot = new TelegramApi(process.env.TOKEN, { polling: true })

const start = async () => {
  try {
    await bot.setMyCommands(menuCommands)
  } catch (e) {
    console.log('Bot starting error: ', e)
  }

  // Message listener
  bot.on('message', async message => {
    const chatId = String(message.chat.id)
    const text = message.text
    const lastMessage = message.message_id

    try {
      await menu(bot, chatId, text, lastMessage)
    } catch (e) {
      console.log('Message listener error: ', e)
    }
  })

  // Button listener
  bot.on('callback_query', async message => {
    const btnData = message.data

    try {
      console.log(btnData)
    } catch (e) {
      console.log('Button listener error: ', e)
    }
  })
}

start()

// Use bot.logOut() to end developing session
