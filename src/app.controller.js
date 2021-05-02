'use strict';

const { Telegraf } = require('telegraf');

const AppService = require('./app.service');
const ConfigManager = require('./utils/config-manager');
const KeyboardAction = require('./models/keyboard-action');

function AppController() {
  this.config = ConfigManager.get('telegram');
  this.bot = new Telegraf(this.config.token);
  this.service = AppService;
}

AppController.prototype.listen = function () {
  this.bot.start(context => this.service.start(context));
  this.bot.hears([KeyboardAction.PYTHON, 'питон'], context =>
    this.service.python(context),
  );
  this.bot.hears([KeyboardAction.NODE, 'нода'], context =>
    this.service.node(context),
  );
  this.bot.hears([KeyboardAction.PHP, 'пых'], context =>
    this.service.php(context),
  );
  this.bot.launch();
};

module.exports = AppController;
