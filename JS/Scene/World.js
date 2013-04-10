function World(){
	this.type = "world";
	if(arguments.length == 0){
		this.background = new RgbColor(10,100,100);
		this.tracer = null;
		this.view = new View();
		this.plane = new Plane();
		this.objects = new Array();
	}
};

//-----------------------------Prototypes---------------------------------
	World.prototype.Render = function(){
		var pixelColor = new RgbColor();
		var ray = new Ray3D();
		var hres = this.view.hres;
		var vres = this.view.vres;
		var pixel = this.view.pixel;
		var zw = 100;
		ray.d = new Vector3D(0,0,-1);
		for(var i=0;i<vres;i++){
			for(var j=0;j<hres;j++){
				ray.o = new Point3D(this.pixel*(j-hres/2+0.5),this.pixel*(i-vres/2+0.5),zw);
				pixelColor = this.tracer.TraceRay(ray);
				scene.DrawPixel(j,this.view.vres - i -1,pixelColor*255);
			}
		}
	};

	World.prototype.AddObject = function(o){
		this.objects.Add(o);
	};

	World.prototype.HitBareBones = function(r){
		var sr = new ShadeRec(this);
		var t;
		var tmin = kHugeValue;
		var n = this.objects.length;
		for(var i=0; i < n ;i++){
			if(this.objects[i].Hit(r,tmin,sr) && (t<tmin)){
				sr.hitObject = true;
				tmin = t;
				sr.color = this.objects[i].getColor();
			}
		}
		return sr;
	};

	World.prototype.Build = function(){
		this.view.Hres(200);
		this.view.Vres(200);
		this.view.Pixel(1);
		this.view.Gamma(1);
		
		this.tracer = new TraceAll(this);
		this.Render();
	};

//--------------------------Functions----------------------------

	function MaxToOne(rgb){
		var maxValue = Math.max(rgb.r, Math.max(rgb.g,rgb.b));
		if(maxValue>1){
			return rgb.Divide(maxValue);
		}
		else{
			return rgb;
		}
	};

	function ClampToColor(rgb){
		var c = new RgbColor(rgb);
		if(c.r>1||c.g>1||c.b>1){
			c.r = 1;
			c.g = 0;
			c.b = 0;
		}
		return c;
	};