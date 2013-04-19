function BuildScene4(){
	Width = 400;
	Height = 400;
	ResizeCanvas(scene, Width, Height);

	var d = new Directional();
	d.d = new Vector3D(1,-0.5,-1);
	d.i = 0.9;
	world.lights.push(d);

	var po = new PointLight();
	po.o = new Point3D(100,0,80);
	po.i = 0.8;
	po.color = new RgbColor(1);
	world.lights.push(po);

	var s0 = new Sphere(new Point3D(100,0,0),5);
	s0.SetColor(1,1,1);
	world.AddObject(s0);

	var s1 = new Sphere(new Point3D(50,0,0),30);
	s1.SetColor(1,0,0);
	world.AddObject(s1);

	var s2 = new Sphere(new Point3D(-20,0,0),30);
	s2.SetColor(1,0,1);
	world.AddObject(s2);

	var s3 = new Sphere(new Point3D(-90,0,0),30);
	s3.SetColor(0,1,1);
	world.AddObject(s3);


}