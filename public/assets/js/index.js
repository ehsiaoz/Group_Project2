//REMEMBER: CODE EVERYTHING ONLY ONCE
//Do not Repeat Yourself = DRY
document.addEventListener("DOMContentLoaded", function(event) {
	// document.querySelector("body").style.backgroundImage = "url(./assets/img/" + backgroundImages[Math.floor(Math.random()*backgroundImages.length)]+ ")";
	// spinIcon('search-icon');
});

function spinIcon(icon){
	document.getElementById(icon).parentNode.addEventListener('mouseenter', function(event){
		document.getElementById(icon).classList.add('fa-spin');
	});
	document.getElementById(icon).parentNode.addEventListener('mouseleave', function(event){
		document.getElementById(icon).classList.remove('fa-spin');
	});
}

var dealImages = [//used without explicit permission
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
	}];