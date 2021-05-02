'use strict';

// const { Telegram } = require('telegraf');

const Utils = require('./utils/utils');
const ConfigManager = require('./utils/config-manager');
const KeyboardManager = require('./utils/keyboard-manager');
// const KeyboardAction = require('./models/keyboard-action');
const ClientMessage = require('./models/client-message');

function AppService() {
  this.config = ConfigManager.get('telegram');
  this.previousAction = null;
}

AppService.prototype.start = function (context) {
  context.reply(ClientMessage.GREETING);
  this.keyboard(context);
};

AppService.prototype.keyboard = function (context) {
  context.reply(ClientMessage.OPTION, KeyboardManager.getBaseKeyboard());
};

AppService.prototype.python = function (context) {
  const messages = ['🌮е', 'Медленный', 'PHP лучше', '...для детей', 'Кто?'];
  context.reply(messages[Utils.random(0, messages.length)]);
};

AppService.prototype.node = function (context) {
  const messages = [
    'Топ!',
    'Очень быстрая',
    'Только лучшие из лучших на ней пишут',
    'Для крупных проектов',
  ];
  context.reply(messages[Utils.random(0, messages.length)]);
};

AppService.prototype.php = function (context) {
  const messages = ['Не для школьников', 'Серьёзный', 'Отличный язык'];
  context.reply(messages[Utils.random(0, messages.length)]);
};

module.exports = new AppService();
