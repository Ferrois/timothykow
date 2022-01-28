


var bodyWrapper = document.querySelector(".bodyClass")
var header = document.querySelector(".headerContainer")
//console.log(window.pageYOffset)
bodyWrapper.addEventListener("scroll",()=>{
	if (bodyWrapper.scrollTop > 352){
		console.log("ia")
		header.style.transform = `translateY(${352 - bodyWrapper.scrollTop}px)`
	}else{
		header.style.transform = "translateY(0px)"
	}
});