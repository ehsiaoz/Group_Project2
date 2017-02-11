 

// Dependencies
// =============================================================
var db = require("../models");
var geocoder = require("geocoder");

// Routes
// =============================================================
module.exports = function(app) {

  // Create a new businesseses
  app.post("/api/create/biz", function(req, res) {
    var Biz = req.body;
    console.log(Biz);

    var geocode_addr = Biz.biz_street + ', ' + Biz.biz_city + ', ' + Biz.biz_state;

    geocoder.geocode(geocode_addr, function(err, data) {
      console.log(JSON.stringify(data.results[0].geometry.location, null, 2));
      var biz_latitude = data.results[0].geometry.location.lat;
      var biz_longitude = data.results[0].geometry.location.lng;

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
        biz_long: biz_longitude,
        // If it's new put new key, otherwise use existing category's fk
        Category: {
          cat_name: Biz.new_cat
        }
      }, {
        include: [db.Category]
  		})
      .then(function(data) {
  		    res.redirect('/biz');
  	  });
    }
  });

  // Create a new businesseses
  app.post("/api/create/cat", function(req, res) {
    var Category = req.body;
    console.log(Category);

    db.Category.create({
      cat_name: Category.cat_name,
    })
    .then(function(data) {
        res.redirect('/create/biz');
    });
  });

};
