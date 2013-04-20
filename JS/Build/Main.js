// Variables
	var canvasHtml;
//Constants
var kEpsilon = 0.00001;
var kHugeValue	= 1.0E10;
var invPi = 0.31830988;
var scene;
var camera = {x:0,y:0,z:600, d:500, ux:0,uy:0,uz:0};
var world;
var Width=400, Height=400;
var debug = false;
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
		// console.log(e.keyCode);
		if(e.keyCode == "38"){
			camera.uy-=10;
			world.Render();
		}
		else if(e.keyCode == "40"){
			camera.uy+=10;
			world.Render();
		}
		else if(e.keyCode == "37"){
			camera.ux-=10;
			world.Render();
		}
		else if(e.keyCode == "39"){
			camera.ux+=10;
			world.Render();
		}
		else if(e.keyCode == "221"){
			camera.d+=10;
			camera.uz+=10;
			world.Render();
		}
	};

	function TestStuff(){

	};