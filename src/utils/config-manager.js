'use strict';

const fs = require('fs');

function ConfigManager() {
  this.path = '.config.json';
  this.context = JSON.parse(fs.readFileSync(this.path, { encoding: 'utf-8' }));
}

ConfigManager.prototype.get = function (section) {
  if (!section) {
    return this.context;
  }
  return this.context[section];
};

module.exports = new ConfigManager();
