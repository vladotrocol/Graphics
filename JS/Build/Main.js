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
		scene = new CanvasObj(canvasHtml,0,0,600,400,"#eeee77");
		var world = new World();
		world.Build();
		document.getElementById("saveButton").onclick = function () {
			var img = canvasHtml.toDataURL("image/png");
			var d= document.createElement("a");
			d.href = img.replace('image/png', 'image/octet-stream');
			d.download  =  "img01.png";
			d.click();
		}
		TestStuff();
	};

	function TestStuff(){
	};