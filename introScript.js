// first page intro Animation
console.log("in");
	$(".navItem").hide();
	$("#fpage-logo").hide();
	$(".fpage-disc").hide();
	$(".fpage-button").hide();

	window.setTimeout(function(){
		$("#fpage-logo").fadeIn();
	}, 700);
	window.setTimeout(function(){
		$(".fpage-disc").fadeIn();
	}, 900);
	window.setTimeout(function(){
		$(".fpage-button").slideDown(150);
	}, 1000);
	window.setTimeout(function(){
		$("#navItem4").fadeIn();
	}, 1100);
	window.setTimeout(function(){
		$("#navItem3").fadeIn();
	}, 1200);
	window.setTimeout(function(){
		$("#navItem2").fadeIn();
	}, 1300);
	window.setTimeout(function(){
		$("#navItem1").fadeIn();
	}, 1400);
console.log("out");