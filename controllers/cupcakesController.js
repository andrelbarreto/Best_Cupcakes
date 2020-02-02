var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var cupcake = require("../models/cupcake.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  cupcake.all(function(data) {
    var hbsObject = {
      cupcake: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/cupcake", function(req, res) {
  cupcake.create(["cupcake_name", "devoured"], [req.body.name, req.body.devoured], function(result) {
    // Send back the ID of the cupcake
    res.json({ id: result.insertId });
  });
});

router.put("/api/cupcake/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  cupcake.update(
    {
      devoured: req.body.devoured
    },
    condition,
    function(result) {
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();

    }
  );
});

// Export routes for server.js to use.
module.exports = router;
