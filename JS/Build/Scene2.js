function BuildScene2(){
	Width = 400;
	Height = 400;
	ResizeCanvas(scene, Width, Height);

	// var d = new Directional();
	// d.d = new Vector3D(0,-1,-1);
	// d.i = 0.5;
	// d.color = new RgbColor(1);
	// world.lights.push(d);

	// var d2 = new Directional();
	// d2.d = new Vector3D(-1,-0.5,-1);
	// d2.i = 0.5;
	// d2.color = new RgbColor(0,1,0);
	// world.lights.push(d2);

	var po2 = new PointLight();
	po2.o = new Point3D(100,100,200);
	po2.i = 3;
	po2.color = new RgbColor(1);
	world.lights.push(po2);

	// var po = new PointLight();
	// po.o = new Point3D(-30,100,50);
	// po.i = 0.5;
	// po.color = new RgbColor(1);
	// world.lights.push(po);

	var p1 = new Plane(new Point3D(0,-100,0),new Normal3D(0,-1,0));
	p1.SetColor(0.2, 0.5, 0.1);
	// p1.material = new Specular();
	world.AddObject(p1);	

	// var p1 = new Plane(new Point3D(0,0,-500),new Normal3D(0,1,1));
	// p1.SetColor(0.1,0.3,0.1);
	// world.AddObject(p1);

	var t1 = new Triangle(new Point3D(-200,-90,-200),
		new Point3D(-100, 0,-200),
		new Point3D(0,-90,-200));
	t1.SetColor(1,0.6,0);
	world.AddObject(t1);

	var t3 = new Triangle(new Point3D(-300,-90,-190),
		new Point3D(-200, 0,-190),
		new Point3D(-100,-90,-190));
	t3.SetColor(1,0.9,0);
	world.AddObject(t3);

	var t2 = new Triangle(new Point3D(-50,-90,-250),
		new Point3D(150, 100,-250),
		new Point3D(300,-90,-250));
	t2.SetColor(1,0.3,0);
	world.AddObject(t2);

	var s1 = new Sphere(new Point3D(5,3,0),30);
	s1.SetColor(1,1,0);
	s1.material = new Specular();
	world.AddObject(s1);
	
	var s2 = new Sphere(new Point3D(45,-7,-60),20);
	s2.SetColor(0.71, 0.40, 0.16);
	s2.material = new Specular();
	world.AddObject(s2);

	var s3 = new Sphere(new Point3D(40,43,-100),17);
	s3.SetColor(0.0, 0.41, 0.41);
	world.AddObject(s3);
	
	var s4 = new Sphere(new Point3D(-20,28,-15),20);
	s4.SetColor(1, 0.75, 0);
	world.AddObject(s4);
	
	var s5 = new Sphere(new Point3D(-25, -7, -35), 27);
	s5.SetColor(0, 0.6, 0.3);
	world.AddObject(s5);
	
	var s6 = new Sphere(new Point3D(20, -27, -35), 25);
	s6.SetColor(0.65, 1, 0.30);
	world.AddObject(s6);
	
	var s7 = new Sphere(new Point3D(35, 18, -35), 22);
	s7.SetColor(0, 0.6, 0.3);
	world.AddObject(s7);
	
	var s8 = new Sphere(new Point3D(-57, -17, -50), 15);
	s8.SetColor(0.71, 0.40, 0.16);
	world.AddObject(s8);
	
	var s9 = new Sphere(new Point3D(-47, 16, -80), 23);
	s9.SetColor(0.65, 1, 0.30);
	world.AddObject(s9);
	
	var s10 = new Sphere(new Point3D(-15, -32, -60), 22);
	s10.SetColor(0.0, 0.41, 0.41);
	world.AddObject(s10);
	
	var s11 = new Sphere(new Point3D(-35, -37, -80), 22);
	s11.SetColor(0.61, 0.61, 0);
	world.AddObject(s11);
	
	var s12 = new Sphere(new Point3D(10, 43, -80), 22);
	s12.SetColor(0.61, 0.61, 0);
	world.AddObject(s12);
	
	var s13 = new Sphere(new Point3D(30, -7, -80), 10);
	s13.SetColor(0.61, 0.61, 0);
	world.AddObject(s13);
	
	var s14 = new Sphere(new Point3D(-40, 48, -110), 18);
	s14.SetColor(0.0, 0.41, 0.41);
	world.AddObject(s14);
	
	var s15 = new Sphere(new Point3D(-10, 53, -120), 18);
	s15.SetColor(0.71, 0.40, 0.16);
	world.AddObject(s15);
	
	var s16 = new Sphere(new Point3D(-55, -52, -100), 10);
	s16.SetColor(0.65, 0.3, 1);
	world.AddObject(s16);
	
	var s17 = new Sphere(new Point3D(5, -52, -100), 15);
	s17.SetColor(0.71, 0.40, 0.16);
	world.AddObject(s17);
	
	var s18 = new Sphere(new Point3D(-20, -57, -120), 15);
	s18.SetColor(0.5, 0, 1);
	world.AddObject(s18);
	
	var s19 = new Sphere(new Point3D(55, -27, -100), 17);
	s19.SetColor(0.0, 0.41, 0.41);
	world.AddObject(s19);
	
	var s20 = new Sphere(new Point3D(50, -47, -120), 15);
	s20.SetColor(0.71, 0.40, 0.16);
	world.AddObject(s20);
	
	var s21 = new Sphere(new Point3D(70, -42, -150), 10);
	s21.SetColor(0.65, 0.3, 1);
	world.AddObject(s21);
	
	var s22 = new Sphere(new Point3D(5, 73, -130), 12);
	s22.SetColor(0.65, 0.3, 1);
	world.AddObject(s22);
	
	var s23 = new Sphere(new Point3D(66, 21, -130), 13);
	s23.SetColor(0.5, 0, 1);
	world.AddObject(s23);
	
	var s24 = new Sphere(new Point3D(72, -12, -140), 12);
	s24.SetColor(0.65, 0.3, 1);
	world.AddObject(s24);
	
	var s25 = new Sphere(new Point3D(64, 5, -160), 11);
	s25.SetColor(0, 0.6, 0.3);
	world.AddObject(s25);
	
	var s26 = new Sphere(new Point3D(55, 38, -160), 12);
	s26.SetColor(0.65, 0.3, 1);
	world.AddObject(s26);
	
	var s27 = new Sphere(new Point3D(-73, -2, -160), 12);
	s27.SetColor(0.65, 0.3, 1);
	world.AddObject(s27);
	
	var s28 = new Sphere(new Point3D(30, -62, -140), 15);
	s28.SetColor(0.5, 0, 1);
	world.AddObject(s28);
	
	var s29 = new Sphere(new Point3D(25, 63, -140), 15);
	s29.SetColor(0.5, 0, 1);
	world.AddObject(s29);
	
	var s30 = new Sphere(new Point3D(-60, 46, -140), 15);
	s30.SetColor(0.61, 0.61, 0);
	world.AddObject(s30);
	
	var s31 = new Sphere(new Point3D(-30, 68, -130), 12);
	s31.SetColor(0.65, 0.3, 1);
	world.AddObject(s31);
	
	var s32 = new Sphere(new Point3D(58, 56, -180), 11);
	s32.SetColor(0, 0.6, 0.3);
	world.AddObject(s32);
	
	var s33 = new Sphere(new Point3D(-63, -39, -180), 11);
	s33.SetColor(0, 0.6, 0.3);
	world.AddObject(s33);
	
	var s34 = new Sphere(new Point3D(46, 68, -200), 10);
	s34.SetColor(0.65, 0.3, 1);
	world.AddObject(s34);
	
	var s35 = new Sphere(new Point3D(-3, -72, -130), 12);
	s35.SetColor(0.65, 0.3, 1);
	world.AddObject(s35);
	

};