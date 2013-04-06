// Variables
	var canvasHtml;
//Constants
var kEpsilon = 0.001;

// Listeners
	window.onload = ViewDidLoad;

	function ViewDidLoad(){
		canvasHtml = document.getElementById("canvas");
		var scene = new CanvasObj(canvasHtml,0,0,800,400,"#eeee77");
		TestStuff();
	};

	function TestStuff(){
		var s = new Sphere();
		console.log(s.color);
	};