

// Dependencies
// =============================================================
var db = require("../models");
var geocoder = require("geocoder");

// Routes
// =============================================================
module.exports = function(app) {

  // Create a new business
  app.post("/api/create/biz", function(req, res) {
    var Biz = req.body;
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
};
