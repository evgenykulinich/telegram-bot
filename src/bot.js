const TelegramApi = require('node-telegram-bot-api')
const dotenv = require('dotenv')
dotenv.config()

const { menu, menuCommands } = require('./menu')

const bot = new TelegramApi(process.env.TOKEN, { polling: true })

const start = async () => {
  try {
    await bot.setMyCommands(menuCommands)
  } catch (e) {
    console.log('starting bot error: ', e)
  }

  // Message listener
  bot.on('message', async message => {
    const chatId = String(message.chat.id)
    const text = message.text

    try {
      await menu(bot, chatId, text)
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
