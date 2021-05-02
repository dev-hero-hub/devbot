'use strict';

const { Keyboard } = require('telegram-keyboard');

const KeyboardAction = require('../models/keyboard-action');

function KeyboardManager() {}

KeyboardManager.prototype.getBaseKeyboard = () =>
  Keyboard.make(
    [KeyboardAction.PYTHON, KeyboardAction.NODE, KeyboardAction.PHP],
    { pattern: [3] },
  ).reply();

module.exports = new KeyboardManager();
