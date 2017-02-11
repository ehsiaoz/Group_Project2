

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

    function latlong(input){
      var geocode_addr = Biz.biz_street + ', ' + Biz.biz_city + ', ' + Biz.biz_state;
      geocoder.geocode(geocode_addr, function(err, data) {
        var coordinate;
        if(input === 'lat'){
          coordinate = data.results[0].geometry.location.lat;
          return coordinate;
        }else if(input === 'long'){
          coordinate = data.results[0].geometry.location.lng;
          console.log('coordinate: ', coordinate);
          return coordinate;
        }
      });
    }
    console.log('business: ', Biz);

    var bizzob = {
      biz_name: Biz.biz_name,
      biz_desc: Biz.biz_desc,
      biz_image: Biz.biz_image,
      biz_street: Biz.biz_street,
      biz_city: Biz.biz_city,
      biz_state: Biz.biz_state,
      biz_lat: latlong('lat'),
      biz_long: latlong('lng')
    };

    var catcreateob = {
      Category: {
        cat_name: Biz.new_cat
      }
    };
    // var bizzCreatePromise;

    if (!Biz.categories && Biz.new_cat){
     db.Biz.create(Object.assign({}, bizzob, catcreateob) , { include: [db.Category]}).then(function(data) {
        res.redirect('/biz');
    });
    }

    if(Biz.categories) {
      var bb = Object.assign({}, bizzob,  {fk_catId: parseInt(Biz.categories)});
      db.Biz.create(bb).then(function(data) {
          res.redirect('/biz');
      });
    }
    if (!Biz.categories && !Biz.new_cat){
        //  db.Biz.create(bizzob).then(function(data) {
      //      res.redirect('/biz');
       //  });
       res.send("Need a category");
    }

    //db.Biz.create(bizzob , { include: [db.Category]})
    //
    // bizzCreatePromise.then(function(data) {
    //     res.redirect('/biz');
    // });


});

};