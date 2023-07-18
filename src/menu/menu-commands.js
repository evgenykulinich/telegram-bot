const { constants } = require('../constants')

module.exports = {
  menuCommands: [
    { command: constants.menu.start, description: constants.menu.startDesc },
    { command: constants.menu.command, description: constants.menu.commandDesc },
  ]
}