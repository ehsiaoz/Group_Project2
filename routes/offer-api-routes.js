

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

//=====================================================
  app.get("/api/offers/:bizId?", function(req, res) {
    var bizId = req.body.bizId;
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

  });
};

//===================================================
//j routes
//get route from individual business page to create deal
  // app.get('/create/offer/:business_id', function(request, response){
  //   db.Biz.findById(request.params.business_id)
  //   .then(function(data){
  //     var business = { business: data};
  //     console.log("Business data to create offer form: ", business);
  //     response.render('createoffer', business);
  //   });
  // });

  // //create deal
  // app.post("/createdeal", function(request, response) {
  //   var deal = request.body;
  //   console.log("deal information: ", deal);
    
  //     db.Offer.create({
  //       offer_title: deal.title,
  //       offer_origPrice: deal.originalPrice,
  //       offer_dealPrice: deal.dealPrice,
  //       offer_image: deal.image
  //     }).then(function(data) {
  //       //redirect to this businesses' page (will show updated deals)
  //       // res.redirect('/biz');
  //     });
  // });
//end of j routes
//===================================================