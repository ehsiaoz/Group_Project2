//REMEMBER: CODE EVERYTHING ONLY ONCE
//Do not Repeat Yourself = DRY
document.addEventListener("DOMContentLoaded", function(event) {
	// document.querySelector("body").style.backgroundImage = "url(./assets/img/" + backgroundImages[Math.floor(Math.random()*backgroundImages.length)]+ ")";
	// spinIcon('search-icon');
});

var backgroundImages = ['jn_0322.JPG', 'jn_0324.JPG', 'jn_3516.JPG', 'jn_3604.JPG', 'jn_4677.JPG'];

function spinIcon(icon){
	document.getElementById(icon).parentNode.addEventListener('mouseenter', function(event){
		document.getElementById(icon).classList.add('fa-spin');
	});
	document.getElementById(icon).parentNode.addEventListener('mouseleave', function(event){
		document.getElementById(icon).classList.remove('fa-spin');
	});
}

