document.addEventListener('DOMContentLoaded', function(){
	var d = new Date();
	document.getElementById("simpleDate").innerHTML = d.toDateString();
	document.getElementById("hideText").addEventListener("change", makeInvisible);
	document.getElementById("colorsForBackground").addEventListener("change", ChangeHeaderBackground);
	document.getElementById("collegesubmitbutton").addEventListener("click", checkTextbox);
});

function makeInvisible() {
   var myCheck = document.getElementById("hideText")
   if(myCheck.checked)
   {
		document.getElementById("invisibleText").style.visibility = "hidden";
   }
   else
   {
		document.getElementById("invisibleText").style.visibility = "visible";
   }
}

function ChangeHeaderBackground(){
	var option = document.getElementById("colorsForBackground").value;	
	if(option != "OTHER")
	{		
		document.getElementById("backgroundtochange").style.background = option;
	}
	
	else if (option = "OTHER")
	{
		var colorchosen = prompt("Enter the color you want then!", "pink")
		document.getElementById("backgroundtochange").style.background = colorchosen;
	}
}

function checkTextbox(){
	var value1 = document.getElementById("CollegeName1").value;
	if(value1.length == 0)
	{
		var blank = alert("You cant submit without entering a college name!");
	}
}

