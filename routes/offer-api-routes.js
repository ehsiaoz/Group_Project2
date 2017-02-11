

// Dependencies
// =============================================================
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
  // Post route for creating a new offer
  app.post("/api/offers/new/:bizId", function(req, res) {
    var bizId = req.params.bizId;
    var Offer = req.body;
    db.Offer.create({
      offer_title: Offer.offer_title,
      offer_origPrice: Offer.offer_origPrice,
      offer_dealPrice: Offer.offer_dealPrice,
      offer_image: Offer.offer_image,
      fk_biz: bizId
		}).then(function(data) {
		    res.redirect('/biz/', bizId);
	  });
  })

    app.post("/api/offer", function(req, res) {

      var Offer = req.body;
      db.Offer.create({
        offer_title: Offer.offer_title,
        offer_origPrice: Offer.offer_origPrice,
        offer_dealPrice: Offer.offer_dealPrice,
        offer_image: Offer.offer_image,
        fk_bizId: Offer.business
  		}).then(function(data) {
  		    res.redirect('/');
  	  });
  })
};
