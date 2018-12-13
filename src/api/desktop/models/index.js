"use strict";

var fs        = require("fs");
var path      = require("path");
var Sequelize = require("sequelize");
var sqlite3   = require("sqlite3")
var env       = process.env.NODE_ENV || "development";
var config    = require('../../../config/db.json')[env];
const t = require("./Account.js")
if (process.env.DATABASE_URL) {
  var sequelize = new Sequelize(process.env.DATABASE_URL,config);
} else {
  var sequelize = new Sequelize(config.database, config.username, config.password, config);
}
var db        = {};

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf(".") !== 0) && (file !== "index.js");
  })
  .forEach(function(file) {
    var model = sequelize.import(file, require("./" + file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if ("associate" in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default {...db};
