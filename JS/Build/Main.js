// Variables
	var canvasHtml;
//Constants
var kEpsilon = 0.001;
var scene;

// Listeners
	window.onload = ViewDidLoad;

	function ViewDidLoad(){
		canvasHtml = document.getElementById("canvas");
		scene = new CanvasObj(canvasHtml,0,0,800,400,"#eeee77");
		TestStuff();
	};

	function TestStuff(){
	};