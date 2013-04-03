// Variables
	var canvasHtml;

// Listeners
	window.onload = ViewDidLoad;

	function ViewDidLoad(){
		canvasHtml = document.getElementById("canvas");
		var scene = new CanvasObj(canvasHtml,0,0,800,400,"#999900");
		TestStuff();
	};

	function TestStuff(){

	}