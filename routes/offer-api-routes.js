

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