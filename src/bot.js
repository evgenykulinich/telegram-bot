import TelegramApi from 'node-telegram-bot-api'
import dotenv from 'dotenv'
dotenv.config()

const bot = new TelegramApi(process.env.TOKEN, { polling: true })

const start = async () => {
  try {
    // todo
  } catch (e) {
    console.log('START ERROR: ', e)
  }

  // Message listener
  bot.on('message', async message => {
    const text = message.text

    try {
      console.log(text)
    } catch (e) {
      console.log('message listener error: ', e)
    }
  })

  // Button listener
  bot.on('callback_query', async message => {
    const btnData = message.data

    try {
      console.log(btnData)
    } catch (e) {
      console.log('button listener error: ', e)
    }
  })
}

start()

// Use bot.logOut() to end developing session
