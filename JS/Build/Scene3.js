function BuildScene3(){
	Width = 400;
	Height = 400;
	ResizeCanvas(scene, Width, Height);
	GenerateSquares(40);
};

function GenerateSquare(s,offsetX, offsetY,depth){

	var t1 = new Triangle(new Point3D(-100+offsetX,100+offsetY,depth),
		new Point3D(-100+offsetX + s/2,100+offsetY - s/2,depth),
		new Point3D(-100+offsetX+ s,100+offsetY,depth));
	t1.SetColor(Math.random(),Math.random(),Math.random());
	world.AddObject(t1);

	var t2 = new Triangle(new Point3D(-100+offsetX+ s,100+offsetY,depth),
		new Point3D(-100+offsetX + s/2, 100+offsetY - s/2,depth),
		new Point3D(-100+offsetX + s,100+offsetY-s,depth));
	t2.SetColor(Math.random(),Math.random(),Math.random());
	world.AddObject(t2);

	var t3 = new Triangle(new Point3D(-100+offsetX,100+offsetY-s,depth),
		new Point3D(-100+offsetX + s/2, 100+offsetY - s/2,depth),
		new Point3D(-100+offsetX + s,100+offsetY-s,depth));
	t3.SetColor(Math.random(),Math.random(),Math.random());
	world.AddObject(t3);

	var t4 = new Triangle(new Point3D(-100+offsetX,100+offsetY-s,depth),
		new Point3D(-100+offsetX + s/2, 100+offsetY - s/2,depth),
		new Point3D(-100+offsetX,100+offsetY,depth));
	t4.SetColor(Math.random(),Math.random(),Math.random());
	world.AddObject(t4);
};

function GenerateSquares(size){
	for(var i=0;i<Height;i+=size){
		for(var j = 0; j<Width; j+=size){
			GenerateSquare(size,j, -i,90);
		}
	}
}