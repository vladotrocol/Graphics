function PointLight(){
	this.o = new Point3D();
	this.i = 0;
	this.color = new RgbColor(1);
	this.type = "pointLight";
	this.d = null;
	this.fallOff = 10;
};