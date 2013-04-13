
function BuildScene1(){
	Width = 600;
	Height = 400;
	ResizeCanvas(canvasHtml, Width, Height);

	var p = new Plane();
	p.n = new Normal3D(1,0,0);
	world.AddObject(p);

	var s = new Sphere();
	s.SetColor(1,0,0);
	s.Center(1,0.5,0);
	world.AddObject(s);

};