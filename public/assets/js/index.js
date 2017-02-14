//REMEMBER: CODE EVERYTHING ONLY ONCE
//Do not Repeat Yourself = DRY
document.addEventListener("DOMContentLoaded", function(event) {
	// document.querySelector("body").style.backgroundImage = "url(./assets/img/" + backgroundImages[Math.floor(Math.random()*backgroundImages.length)]+ ")";
	// spinIcon('search-icon');
	if(document.getElementById('deal-container-ind')){
		//populateIndBusDeals(3);
	}
});

function spinIcon(icon){
	document.getElementById(icon).parentNode.addEventListener('mouseenter', function(event){
		document.getElementById(icon).classList.add('fa-spin');
	});
	document.getElementById(icon).parentNode.addEventListener('mouseleave', function(event){
		document.getElementById(icon).classList.remove('fa-spin');
	});
}

//function to add howMany deals to the individual business page deals section
function populateIndBusDeals(howMany){
	var imagesArray = dealImages.slice(0);
	for(var i = 0; i < howMany; i ++){
		var selectedImage = Math.floor(Math.random()*imagesArray.length);
		var deal = document.createElement('div');
		deal.className = 'deal-panel';
		deal.setAttribute('actual-url', imagesArray[selectedImage].actualurl);
		deal.setAttribute('disclaimer', 'This image used without explicit permission.');
		var title = document.createElement('span');
		var titleContent = document.createElement('span');
		var titleAdjectives = ['hipster', 'hand made', 'unforgettable', 'extravagant', 'unique', 'personalized', 'custom', 'unrivaled', 'fresh', 'stylish', 'premium', 'upgraded', 'exclusive', 'modern'];
		var titleNouns = ['fried chicken', 'retreat', 'service', 'opportunity', 'luxury', 'experience', 'style', 'relaxation', 'package'];
		var origPrice = document.createElement('span');
		var origPriceContent = document.createElement('span');
		origPriceContent.style.textDecoration = 'line-through';
		var price = document.createElement('span');
		var priceContent = document.createElement('span');
		//days left to purchase:
		var daysLeft = document.createElement('span');
		var daysLeftContent = document.createElement('span');

//special "cut corners" effect. make a div hold the two cornered elements.
//then have text in the parent div
// 		<div class="cornered"></div>
// <div class="main">Hello</div>
// <div class="cornered2"></div>
// 		.cornered {
//     width: 160px;
//     height: 0px;
//     border-bottom: 40px solid green;
//     border-right: 40px solid white;
// }
// .main {
//     width: 200px;
//     height: 20px;
//     background-color: red;
// }
// .cornered2 {
//     width: 160px;
//     height: 0px;
//     border-top: 40px solid green;
//     border-right: 40px solid white;
// }
		//savings will be (originalPrice - price) / originalprice
		var savings = document.createElement('span');
		var savingsContent = document.createElement('span');
		var created = document.createElement('span');
		var createdContent = document.createElement('span');
		var updated = document.createElement('span');
		var updatedContent = document.createElement('span');

		//div.innerText = arr[i].number;
		//deals.innerHTML += dealPanel; appendChild(div)
		document.getElementById('deal-container-ind').appendChild(deal);
		imagesArray.splice(selectedImage, 1);
	}
}

var dealImages = [
	{
		localurl: '../image/deal_image_01.jpg',
		actualurl:'http://www.hsalam-bamako.com/wp-content/uploads/2016/12/o-HAPPY-PEOPLE-facebook.jpg'
	},
	{
		localurl: '../image/deal_image_02.jpg',
		actualurl: 'http://youhaveacalling.com/wp-content/uploads/2012/05/Fun-Group-of-Young-People-Jump-19461599.jpg'
	},
	{
		localurl: '../image/deal_image_03.jpg',
		actualurl: 'http://www.siwallpaperhd.com/wp-content/uploads/2015/05/happy_people_colorful_wallpaper_hd_5.jpg'
	},
	{
		localurl: '../image/deal_image_04.jpg',
		actualurl: 'http://ultimate-luxury-community.com/wp-content/uploads/2011/10/MiSST-frontpage-red-girl-shopping-smaller-the-same.jpg'
	},
	{
		localurl: '../image/deal_image_05.jpg',
		actualurl: 'http://aplustexashomebuilders.com/wp-content/uploads/2015/09/luxury-homes-builders.jpg'
	},
	{
		localurl: '../image/deal_image_06.jpg',
		actualurl: 'http://www.eliteluxuryhomes.com/swserve/custom_themes/bootstrapeliteluxury/wctheme/images/home/location-beverly-hills.jpg'
	},
	{
		localurl: '../image/deal_image_07.jpg',
		actualurl: 'http://skylinegp.com/wp-content/uploads/2015/06/Chicago-Skyline.jpg'
	}
];