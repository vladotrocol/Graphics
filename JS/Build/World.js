function World(){
	this.type = "world";
	if(arguments.length == 0){
		this.background = "white";
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
				pixelColor = this.tracer.traceRay(ray);
				this.DisplayPixel(j,i,pixelColor);
			}
		}
	};

	World.prototype.AddObject = function(o){
		this.objects.Add(o);
	};

	World.prototype.DisplayPixel = function(i,j,c){
		var y = this.view.vres - i -1;
		 
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
