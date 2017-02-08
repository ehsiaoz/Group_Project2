

// Dependencies
// =============================================================
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // Create a new offer
  app.post("/api/offer", function(req, res) {
    var Offer = req.body;
  // console.log("Offer (req.body): ", Offer);
  // console.log("offer_title: ", Offer.offer_title);
  // console.log("offer_origPrice: ", Offer.offer_origPrice);

    db.Offer.create({
      offer_title: Offer.offer_title,
      offer_origPrice: Offer.offer_origPrice,
      offer_dealPrice: Offer.offer_dealPrice,
      offer_image: Offer.offer_image
    })
    .then(function(data) {
      res.redirect('/offers');
    });

  });

  // Create a new offer
  app.get("/api/offer/:biz_id", function(req, res) {

    db.Offer.findAll({
      where: {
        fk_biz: req.params.biz_id
      }
    }).then(function(data){
      console.log("Offers for biz: ", data);
      var offers = { offers: data};
      console.log("Offers (hbsObject): ", offers);
      res.send(offers);
    });

  });
};
