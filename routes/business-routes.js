// Dependencies
// =============================================================
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  app.get("/api/businesses", function(req, res) {
    db.Biz.findAll({
    })
    .then(function(dbPost) {
      res.json(dbPost);
    });
  });
};