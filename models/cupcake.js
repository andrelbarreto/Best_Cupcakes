// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");
// all = selectAtll ; create = insertOne; update = updateOne according to requirements of exercise
var cupcake = {
  all: function(cb) {
    orm.all("cupcakes", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are used to pass the attribute into db for name of cupcake and value of devoured if true or false
  create: function(cols, vals, cb) {
    orm.create("cupcakes", cols, vals, function(res) {
      cb(res);
    });
  },
 //update allows to change the condition of the cupcake from fresh to devoured
  update: function(devoured, condition, cb) {
    orm.update("cupcakes", devoured, condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (cupcakesController.js).
module.exports = cupcake;
