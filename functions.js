
function sound() {
	alert("Sounded!");
}

function poly2 () {
	var a = document.getElementById("poly2a").value;
	var b = document.getElementById("poly2b").value;
	var c = document.getElementById("poly2c").value;

	var disc = Math.sqrt((b*b)-(4*a*c));
	var x1 = (-b + disc)/(2*a);
	var x2 = (-b - disc)/(2*a);

	document.getElementById("answerPoly2A").value = "x= "+x1;
	document.getElementById("answerPoly2B").value = "x= "+x2;

	if(isNaN(x1)) {document.getElementById("answerPoly2A").value = "No solution";}
	if(isNaN(x2)) {document.getElementById("answerPoly2B").value = "No solution";}
}

function factorial () {
	var n = document.getElementById("factInput").value;
	m = 1;
	
	if (n==0) {document.getElementById("answerN").value = 1;}
	
	else if (n < 0) {document.getElementById("answerN").value = "n must > 0";}

	else (n > 0) 
	{	
	
	n++;
	for (var i = 1; i < n; i++) {m *= i;}
	document.getElementById("answerN").value = m;

	}

}