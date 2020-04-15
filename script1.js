//Nav Bar animation on scroll
function navScroll(){
	console.log("Scrolled function");
	var top=document.getElementById("navbar");
	var ypos=window.pageYOffset;
	console.log(ypos);
	if(ypos>650){
		top.style.background="rgba(60,60,60,1)";
		document.getElementById("logo").style.opacity='1';	
	}
	else if(ypos>605){
		top.style.background="rgba(60,60,60,0.9)";
		document.getElementById("logo").style.opacity='0.9';	
	}
	else if(ypos>560){
		top.style.background="rgba(60,60,60,0.8)";
		document.getElementById("logo").style.opacity='0.8';	
	}
	else if(ypos>505){
		top.style.background="rgba(60,60,60,0.7)";
		document.getElementById("logo").style.opacity='0.7';	
	}
	else if(ypos>460){
		top.style.background="rgba(60,60,60,0.6)";
		document.getElementById("logo").style.opacity='0.6';	
	}
	else if(ypos>415){
		top.style.background="rgba(60,60,60,0.5)";
		document.getElementById("logo").style.opacity='0.5';	
	}
	else if(ypos>370){
		top.style.background="rgba(60,60,60,0.4)";
		document.getElementById("logo").style.opacity='0.4';	
	}
	else if(ypos>335){
		top.style.background="rgba(60,60,60,0.3)";
		document.getElementById("logo").style.opacity='0.2';	
	}
	else if(ypos>290){
		top.style.background="rgba(60,60,60,0.2)";
		document.getElementById("logo").style.opacity='0.1';	
	}
	else if(ypos>240){
		top.style.background="rgba(60,60,60,0.1)";
		document.getElementById("logo").style.opacity="0.05";
	}
	else{
		top.style.background="rgba(60,60,60,0)";
		document.getElementById("logo").style.opacity="0";
	}
}
window.addEventListener('scroll',navScroll);

