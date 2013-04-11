// Variables
	var canvasHtml;
//Constants
var kEpsilon = 0.001;
var kHugeValue	= 1.0E10;
var scene;
var camera = {x:0,y:0,z:0, ux:0,uy:0,uz:-1};
var world;
// Listeners
	window.onload = ViewDidLoad;

	function ViewDidLoad(){
		canvasHtml = document.getElementById("canvas");
		scene = new CanvasObj(canvasHtml,0,0,600,400,"#eeee77");
		world = new World();
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

	document.onkeydown = function(e){
		console.log(e.keyCode);
		if(e.keyCode=='38'){
			camera.uy +=0.1;
			world.Render();
		}
		if(e.keyCode=='40'){
			camera.uy -=0.1;
			world.Render();
		}
		if(e.keyCode=='39'){
			camera.ux +=0.1;
			world.Render();
		}
		if(e.keyCode=='37'){
			camera.ux -=0.1;
			world.Render();
		}
		if(e.keyCode == "219"){
			world.view.pixel++;
			world.view.vres/=2;
			world.view.hres/=2;
			world.Render();
		}
		if(e.keyCode == "221"){
			world.view.pixel--;
			world.Render();
		}
	};

	function TestStuff(){
	};