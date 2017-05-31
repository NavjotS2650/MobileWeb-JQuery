// myscript.js for selectorsActions.html
$(document).ready(function(){
	// al jquery must be included inside doc.ready function
	$("#country").html("Canada");
	$("#country").css("font-style","italic");
	$("#country").addClass("countryname");
	
	$("#capital").html("Ottawa");
	$("#capital").addClass("countrycapital");
	$("#capital").append(", ON");
	$("#capital").css("font-family","Courier New");
	
	// for hide the capital name
	
	$("#hide").click(function(){
		$("#capital").hide();
	});
	

		$("#show").click(function(){
		$("#capital").show();
	});
	
		$("#toggle").click(function(){
		$("#capital").toggle();
	});
	
	// for imgae
	
		$("#showclass").click(function(){
			// eh saria img lai a
		//$("img").addClass("newstyle");
		
		// eh sirf ik lai a 
		$("img:nth(0)").addClass("newstyle");
		// keywork first
		$("img:nth(1)").addClass("newstyle");
	});
	

		$("#removeclass").click(function(){
			// eh sirf ik lai a 
		$("img:nth(0)").removeClass("newstyle");
		// keywork first
		$("img:nth(1)").removeClass("newstyle");
	});
	
		$("#toggleclass").click(function(){
		$("img:nth(0)").toggleClass("newstyle");
		// keywork first
		$("img:nth(1)").toggleClass("newstyle");
	});
	
	// for all li tags
	
	// s2 button
	
		$("#pick1").click(function(){
		$("li[id ^= 'web']").css("color","red");
	});
	
		$("#pick2").click(function(){
		$("li:contains('base')").css("color","white");
	});
	
			$("#pick3").click(function(){
		$("img[src $= '.gif']").css({"box-shadow": "5px 5px 5px 5px blue",
		"border":"thick solid black"});
	});
	
			$("#pick4").click(function(){
		$("section:has(img)").css("font-style","italic");
	});
	
				$("#pick5").click(function(){
		$("section:has(p:contains('para1'))").css("text-decoration","underline");
	});
	
	// paral -1
				$("#para1").mouseover(function(){
		$(this).css("background","yellow");
	});
				$("#para1").mouseout(function(){
		$(this).css("background","white");
	});
	
	// para 2
		$("#para2").click(function(){
		$(this).slideToggle(3000);
	});
	
	// para 3
		$("#para3").click(function(){
		$(this).fadeOut(3000,function(){
			$("#para4").html("click on image<br>");
		$("#para4").append("<img src='_images/back.gif'>");
		
		
		});
	});
	// para 4
		$("#para4").click(function(){
		$("#para3").fadeOut(3000,function(){
		$("#para4").html("hahahhhahahahah");
		});
	});
	
	
	
});