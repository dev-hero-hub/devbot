'use strict';

function KeyboardManager() {}

KeyboardManager.prototype.random = function (min, max) {
  return (
    Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min))) +
    Math.ceil(min)
  );
};

module.exports = new KeyboardManager();
