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
  app.get("/api/businesses/:foreign", function(req, res) {
  	var category = req.params.foreign;
    db.Biz.findAll({
    	where: {
        fk_catId: category
      }
    })
    .then(function(dbPost) {
      res.json(dbPost);
    });
  });

  app.get("/api/categories", function(req, res) {
    db.Category.findAll({
    })
    .then(function(dbPost) {
      res.json(dbPost);
    });
  });
};