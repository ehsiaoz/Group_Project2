

// Dependencies
// =============================================================
var db = require("../models");
var geocoder = require("geocoder");

// Routes
// =============================================================
module.exports = function(app) {

  // Create a new businesseses
  app.post("/biz", function(req, res) {
    var Biz = req.body;
  	console.log("biz: ", Biz);
  	console.log("biz_name: ", Biz.biz_name);
  	console.log("biz_desc: ", Biz.biz_desc);
    var geocode_addr = Biz.biz_street + ', ' + Biz.biz_city + ', ' + Biz.biz_state;

    geocoder.geocode(geocode_addr, function(err, data) {
      console.log(JSON.stringify(data.results[0].geometry.location, null, 2));
      var biz_latitude = data.results[0].geometry.location.lat;
      var biz_longitude = data.results[0].geometry.location.lng;
      console.log('longitude: ', biz_longitude, '; latitude: ', biz_latitude);

      createBiz(biz_latitude, biz_longitude);

    });
    function createBiz(biz_latitude, biz_longitude) {

      db.Biz.create({
        biz_name: Biz.biz_name,
        biz_desc: Biz.biz_desc,
        biz_cat: Biz.biz_cat,
        biz_image: Biz.biz_image,
        biz_street: Biz.biz_street,
        biz_city: Biz.biz_city,
        biz_state: Biz.biz_state,
        biz_lat: biz_latitude,
        biz_long: biz_longitude
      }).then(function(data) {
        res.redirect('/biz');
      });
    }

  });

  // If a user sends data to add a new character...
  app.post("/api/new", function(req, res) {

    // Take the request...
    // var character = req.body;
    //
    // // Create a routeName
    // var routeName = character.name.replace(/\s+/g, "").toLowerCase();
    //
    // // Then add the character to the database using sequelize
    // Character.create({
    //   routeName: routeName,
    //   name: character.name,
    //   role: character.role,
    //   age: character.age,
    //   forcePoints: character.forcePoints
    // });

  });
};
