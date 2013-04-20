function BuildScene4(){
	Width = 400;
	Height = 400;
	ResizeCanvas(scene, Width, Height);

	// var d = new Directional();
	// d.d = new Vector3D(0,-1,-1);
	// d.i = 0.5;
	// world.lights.push(d);

	var po = new PointLight();
	po.o = new Point3D(30,-60,100);
	po.i = 0.8;
	po.color = new RgbColor(1);
	po.d = new Vector3D(0,-0.5,1);
	po.fallOff = 10;
	world.lights.push(po);

	// var po2 = new PointLight();
	// po2.o = new Point3D(-70,0,100);
	// po2.i = 0.8;
	// po2.color = new RgbColor(1);
	// world.lights.push(po2);


	var t1 = new Triangle(new Point3D(50,100,50),
		new Point3D(100,-50,0),
		new Point3D(0,-20,0));
	t1.SetColor(1,0.6,0);
	t1.material = new Specular();
	t1.material.ks = 0.5;
	t1.material.exp = 90;
	world.AddObject(t1);

//Point Light Sphere
	// var s0 = new Sphere(new Point3D(30,-60,100),5);
	// s0.SetColor(1,1,1);
	// this.material = new Glow();
	// world.AddObject(s0);

	// var s1 = new Sphere(new Point3D(50,0,0),30);
	// s1.SetColor(1,0,0);
	// world.AddObject(s1);

	var s2 = new Sphere(new Point3D(-20,0,0),30);
	s2.SetColor(1,0,1);
	s2.material = new Specular();
	world.AddObject(s2);

	var s3 = new Sphere(new Point3D(-90,0,0),30);
	s3.SetColor(0,1,1);
	world.AddObject(s3);

	var p1 = new Plane(new Point3D(0,-70,0),new Normal3D(0,0,-1));
	p1.SetColor(0.2,0.6,0.3);
	p1.material = new Specular();
	p1.material.kd =0.2;
	p1.material.ks = 0.5;
	 p1.material.exp = 80;
	world.AddObject(p1);
}