// Variables
	var canvasHtml;
//Constants
var kEpsilon = 0.001;
var kHugeValue	= 1.0E10;
var scene;

// Listeners
	window.onload = ViewDidLoad;

	function ViewDidLoad(){
		canvasHtml = document.getElementById("canvas");
		scene = new CanvasObj(canvasHtml,0,0,20,20,"#eeee77");
		var world = new World();
		world.Build();
		TestStuff();
	};

	function TestStuff(){
	};