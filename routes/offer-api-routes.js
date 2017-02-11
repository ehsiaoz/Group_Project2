

// Dependencies
// =============================================================
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

<<<<<<< HEAD
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
=======
  // Search for Specific Character (or all characters) then provides JSON
  app.get("/api/:offer?", function(req, res) {

    // // If the user provides a specific character in the URL...
    // if (req.params.characters) {
    //
    //   // Then display the JSON for ONLY that character.
    //   // (Note how we're using the ORM here to run our searches)
    //   Character.findOne({
    //     where: {
    //       routeName: req.params.characters
    //     }
    //   }).then(function(result) {
    //     return res.json(result);
    //   });
    // }

    // Otherwise...
    // else {
      // Otherwise display the data for all of the characters.
      // (Note how we're using Sequelize here to run our searches)
  //     Character.findAll({})
  //       .then(function(result) {
  //         return res.json(result);
  //       });
  //   }
  //
  });


  app.get("/api/offers/:bizId?", function(req, res) {
    var bizId = req.body.bizId
    db.Offer.findAll({
      where: {
        fk_bizId: bizId
      }
    }).then(function(data){
      console.log("Offers from DB: ", data);
      var Offers = { offers: data};
      console.log("Offers (hbsObject): ", Offers);
      res.json(Offers);
    });
  });

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
>>>>>>> df1cc2eed7661ddf953d6c0b671a371d118c8d61

  });
};
