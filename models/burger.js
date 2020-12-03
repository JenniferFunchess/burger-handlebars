// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  selectAll: function (cb) {
    orm.selectAll("burgers", function (res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function (burgerName, cb) {
    orm.create("burgers", "burger_name", burgerName, function (res) {
      cb(res);
    });
  },
  update: function (burgerId, cb) {
    orm.update("burgers", "devoured", 1, "id", burgerId, function (res) {
      cb(res);
    });
  },
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
