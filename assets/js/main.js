var wHeight = window.innerHeight, // get window height
	navHeight = document.querySelector('.navbar').offsetHeight; // get the navigationbar height


// set the height to full screen
function setHeight(element) {
	element.style.height = (wHeight - navHeight) + 'px' ;
} // End setHeight

document.ready = (function(){
	setHeight(bigImage);
}());