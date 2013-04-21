function PointLight(){
	this.o = new Point3D();
	this.i = 0;
	this.color = new RgbColor(1);
	this.type = "pointLight";
	this.d = null;
	this.fallOff = 10;
};

PointLight.prototype.InShadow = function(ray){
	var tmin;
	var d = this.o.Distance(ray.o);
	for(var i=0;i<world.objects.length;i++){
			var sH = world.objects[i].ShadowHit(ray);
			if(sH.y&&sH.t<d){
				return true;
			}
	}
	return false;
}