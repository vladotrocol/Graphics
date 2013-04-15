// Variables
	var canvasHtml;
//Constants
var kEpsilon = 0.00001;
var kHugeValue	= 1.0E10;
var scene;
var camera = {x:0,y:0,z:0, ux:0,uy:0,uz:-1};
var world;
var Width=400, Height=400;
// Listeners
	window.onload = ViewDidLoad;

	function ViewDidLoad(){
		canvasHtml = document.getElementById("canvas");
		scene = new CanvasObj(canvasHtml,0,0,Width,Height,"#eeee77");
		world = new World();
		var start = new Date().getTime();
		world.Build();
		var end = new Date().getTime();
		console.log("Time: " + (end-start));
		document.getElementById("renderButton").onclick = function (){
			var start = new Date().getTime();
			world.Render();
			var end = new Date().getTime();
			console.log("Time: " + (end-start));
		}
		document.getElementById("saveButton").onclick = function () {
			var img = canvasHtml.toDataURL("image/png");
			var d= document.createElement("a");
			d.href = img.replace('image/png', 'image/octet-stream');
			d.download  =  "img01.png";
			d.click();
		}
		TestStuff();
	};

	document.onkeydown = function(e){
		//console.log(e.keyCode);
	};

	function TestStuff(){

	};