var wHeight = window.innerHeight,
	navHeight = document.querySelector('.navbar').offsetHeight;

function setHeight(element) {
	element.style.height = (wHeight - navHeight) + 'px' ;
}

document.ready = (function(){
	setHeight(bigImage);
}());