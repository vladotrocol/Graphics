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
						if (this.view.gamma != 1.0)
						pixelColor = pixelColor.Add(this.view.gamma);
					if (this.view.gammutShow){
						mappedColor = ClampToColor(pixelColor);
					}
					else{
						mappedColor = MaxToOne(pixelColor);
					}
					if(i>200&&i<204&&j>200&&j<204){
						debug=true;
					}
					else{
						debug = false;
					}
				scene.DrawSq(j,vres -i -1,mappedColor);
			}
		}
		console.log("finished render");
	};

	World.prototype.AddObject = function(o){
		this.objects.push(o);
	};

	World.prototype.Raytrace = function(r){
		var sr = new ShadeRec(this);
		var tmin = kHugeValue;
		var t;
		var n = this.objects.length;
		var pointLightDirection;
		var delta;
		var normal;
		var ambient = new RgbColor();
		var diffuse = new RgbColor();
		var specular =0;
		for(var i=0; i < n ;i++){
			var a = this.objects[i].Hit(r,sr);

			t = a.t;

			if(a.y && (t<tmin)){
				a.sr.hitObj = true;
				tmin = t;

				if(this.objects[i].gtype == "sphere"){
					normal =  this.objects[i].GetSurfaceNormal(a.sr.localHit).Hat();		
				}		
				else if(this.objects[i].gtype == "triangle"){
					normal = this.objects[i].n.ToVector().Hat();
				}
				else if(this.objects[i].gtype == "plane"){
					normal = this.objects[i].n.ToVector();
				}
				ambient=this.objects[i].GetColor().Multiply(this.ambient.color.Multiply(this.ambient.i*this.ambient.ka));
				diffuse = new RgbColor();
				specular = 0;
				var L = new RgbColor();

				for(var j=0;j<this.lights.length;j++){
					if(this.lights[j].type == "pointLight"){
							pointLightDirection = this.lights[j].o.Join(r.o.Add(r.d.Multiply(t))).Hat();
					}
					else if(this.lights[j].type == "directional"){
							pointLightDirection = this.lights[j].d.Hat().Negate();
					}
					if(this.objects[i].material.type == "lambert"||this.objects[i].material.type == "specular"){
						if(this.lights[j].type == "pointLight"){
							delta = pointLightDirection.Dot(normal.Negate());
						}
						else if(this.lights[j].type == "directional"){
							delta = pointLightDirection.Negate().Dot(normal);
						}
						if(delta>0){
							var shadowed = false;
							var sRay = new Ray3D(a.sr.localHit,pointLightDirection);
							shadowed = this.lights[j].InShadow(sRay,i);
							if(!shadowed){
								var I;
								if(this.lights[j].type == "pointLight" && this.lights[j].d!=null){
									I=this.lights[j].i*(Math.pow(this.lights[j].d.Dot(pointLightDirection),this.lights[j].fallOff));
								}
								else{
									I=this.lights[j].i;
								}
							  	L = L.Add(this.lights[j].color.Multiply(I).Multiply(delta));
						  	}
						}
						else{
							L = L.Add(new RgbColor(0));
						}
					}
					if(this.objects[i].material.type == "specular"){
						var R = pointLightDirection.Subtract(normal.Multiply(2*(pointLightDirection.Dot(normal))));
						var V = r.d;
						var theta = R.Dot(V);
						if(theta>0){
							specular += this.objects[i].material.ks*(Math.pow(theta,this.objects[i].material.exp));
						}
						else{
							specular += 0;
						}
					}
				}
				diffuse = this.objects[i].GetColor().Multiply(this.objects[i].material.kd*invPi);
				a.sr.color = ambient.Add(diffuse.Add(specular).Multiply(L));
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
		this.view.Pixel(0.8);
		this.view.Gamma(0.1);
		this.ambient.i = 0.5;
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