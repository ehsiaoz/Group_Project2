// Dependencies
// =============================================================
var path = require("path");
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/test.html"));
  });

  // add route loads the add.html page,
  // where users can enter new characters to the db
  // app.get("/biz", function(req, res) {
  //   // res.sendFile(path.join(__dirname + "/../public/add.html"));
  //   db.Biz.findAll({}).then(function(data){
  //     console.log("data from DB: ", data);
  //     var hbsObject = { businesses: data};
  //     console.log("Businesses (hbsObject): ", hbsObject);
  //     res.render('index', hbsObject);
  //   });
  // });

  // add route loads the add.html page,
  // where users can enter new characters to the db
  app.get("/biz", function(req, res) {
    // res.sendFile(path.join(__dirname + "/../public/add.html"));
    db.Biz.findAll({}).then(function(data){
      console.log("data from DB: ", data);
      var businesses = { businesses: data};
      console.log("Businesses (hbsObject): ", businesses);
      res.render('bizListings', businesses);
    });
  });


  // all route loads the all.html page,
  // where all characters in the db are displayed
  app.get("/biz/:biz_id", function(req, res) {
    // res.sendFile(path.join(__dirname + "/../public/all.html"));

    db.Biz.findById(req.params.biz_id)
    // db.Biz.findOne({
    //   where: {
    //     id: req.params.biz_id
    //   }
    // }
  // )
  .then(function(data){
      console.log("data from DB: ", data);
      var business = { business: data};
      console.log("Business (hbsObject): ", business);
      res.render('biz', business);
    });
  });

};
