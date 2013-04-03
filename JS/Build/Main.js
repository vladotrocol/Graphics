// Variables
	var canvasHtml;

// Listeners
	window.onload = ViewDidLoad;

	function ViewDidLoad(){
		canvasHtml = document.getElementById("canvas");
		var scene = new CanvasObj(canvasHtml,0,0,800,400,"#eeee77");
		TestStuff();
	};

	function TestStuff(){
		var m1 = new Matrix(10,20);
		var m2 = new Matrix(10,20);
	};