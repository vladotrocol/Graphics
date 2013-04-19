function World(){
	this.type = "world";
	if(arguments.length == 0){
		this.background = new RgbColor(0,0,0);
		this.tracer = null;
		this.view = new View();
		this.ambient = new Ambient();
		this.objects = new Array();
		this.lights = new Array(); 
	}
};

//-----------------------------Prototypes---------------------------------
	World.prototype.Render = function(){
		var pixelColor = new RgbColor();
		var ray = new Ray3D();
		var hres = this.view.hres;
		var vres = this.view.vres;
		var pixel = this.view.pixel;
		ray.o = new Point3D(camera.x,camera.y,camera.z);
		
		var sample = 2;
		console.log("finished building the world");
		for(var i=0;i<vres;i++){
			for(var j=0;j<hres;j++){
				ray.d = new Vector3D(pixel*(j-hres/2-0.5)+camera.ux,pixel*(i-vres/2+0.5)+camera.uy,-camera.d+camera.uz);
				ray.d.Normalize();
				pixelColor = this.tracer.TraceRay(ray);
					var mappedColor = new RgbColor();
					if (this.view.gammutShow)
						mappedColor = ClampToColor(pixelColor);
					else
						mappedColor = MaxToOne(pixelColor);
	
					if (this.view.gamma != 1.0)
						mappedColor = mappedColor.Pow(this.view.invsGamma);

				scene.DrawSq(j,vres -i -1,mappedColor);
			}
		}
		console.log("finished render");
	};

	World.prototype.AddObject = function(o){
		this.objects.push(o);
	};

	World.prototype.HitBareBones = function(r){
		var sr = new ShadeRec(this);
		var tmin = kHugeValue;
		var t;
		var n = this.objects.length;
		var closest;
		for(var i=0; i < n ;i++){
			var a = this.objects[i].Hit(r,sr);

			t = a.t;

			if(a.y && (t<tmin)){
				a.sr.hitObj = true;
				tmin = t;
				if(this.objects[i].gtype == "sphere"){
				
					var theta = this.objects[i].GetSurfaceNormal(a.sr.localHit).Hat().Dot(this.lights[0].d);
					a.sr.color = this.objects[i].GetColor().Multiply(theta*this.lights[0].i);
			}
			else if(this.objects[i].gtype == "triangle"){
				var theta = this.objects[i].n.ToVector().Hat().Dot(this.lights[0].d);
				a.sr.color = this.objects[i].GetColor().Multiply(theta*this.lights[0].i);
			}
			else if(this.objects[i].gtype == "plane"){
				a.sr.color = this.objects[i].GetColor().Multiply(this.lights[0].i);
			}
			//Add Ambient Light
			a.sr.color = a.sr.color.Add(this.ambient.color.Multiply(this.ambient.i));

			//Depth
				// var c = r.o.Distance(a.sr.localHit)/300;//BnW
				 // a.sr.color = (new RgbColor(1)).Add(-t/300); //BnW

				sr=a.sr;
			}
		}
		return sr;
	};

	World.prototype.Build = function(){
		// BuildScene1();
		BuildScene2();
		// BuildScene3();
		this.view.Hres(Width);
		this.view.Vres(Height);
		this.view.Pixel(1);
		this.view.Gamma(1);
		this.ambient.i = 0.1;
		this.ambient.color = new RgbColor(1,1,1);
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
		if(c.r>1){
			c.r =1;
		}
		if(c.g>1){
			c.g =1;
		}
		if(c.b>1){
			c.b =1;
		}

		return c;
	};