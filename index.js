

var article = document.querySelector(".article");
var bodyWrapper = document.querySelector(".bodyClass");
var header = document.querySelector(".headerContainer");
//console.log(window.pageYOffset)


bodyWrapper.addEventListener("scroll",()=>{
	if (bodyWrapper.scrollTop > article.offsetTop-70){
		header.style.transform = `translateY(${article.offsetTop - 70 - bodyWrapper.scrollTop}px)`
	}else{
		header.style.transform = "translateY(0px)"
	}
});