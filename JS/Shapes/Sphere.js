//This file contains the class definition of a sphere object
//Constructors
function Sphere(a1,a2){
	this.gtype = "sphere";
	this.material = new Specular();
	this.color = new RgbColor(1,0,0);
	//Sphere from void
	if(arguments.length == 0){
		this.o = new Point3D();
		this.r = 65;
	}
	//Sphere from point and constant
	else if(arguments.length == 2){
		this.o = a1;
		this.r = a2;
	}
	//Sphere from sphere
	else if(arguments.length == 1){
		this.o = a1.o;
		this.r = a1.r;
	}
};

//-----------------------Prototypes--------------
//Object hierarchy
	Sphere.prototype = new GeometricObj;

//Clone current sphere
	Sphere.prototype.Clone = function(){
		return new Sphere(this);
	};

//Current sphere becomes sphere
	Sphere.prototype.Becomes = function(s){
		this.o = s.o;
		this.r = s.r;
		return this;
	};

//Check if current sphere is hit by ray r 
	Sphere.prototype.Hit = function(ray,sr){
		var t;

		var temp = ray.o.Join(this.o); //Returns Vector

		var a = ray.d.Dot(ray.d); //Scalar
		var b = temp.Dot(ray.d)*2;
		var c = temp.Dot(temp)-(this.r*this.r);
		var disc = b*b-4*a*c;
		if(disc<0){
			return {y:false, t:0, sr:sr};
		}
		else{
			var e = Math.sqrt(disc);
			var denom = a*2;
			t = (-b-e)/denom;

			if(t>kEpsilon){
				sr.normal = (temp.Add(ray.d.Multiply(t))).Multiply(1/this.r);
				sr.localHit = ray.o.Add(ray.d.Multiply(t));
				return {y:true,t:t, sr:sr};
			}

			t = (-b+e)/denom;

			if(t>kEpsilon){
				sr.normal = (temp.Add(ray.d.Multiply(t))).Multiply(1/this.r);
				sr.localHit = ray.o.Add(ray.d.Multiply(t));
				return {y:true,t:t, sr:sr};
			}
		}
		return {y:false,t:0, sr:sr};
	};

	//Set current sphere's center
	Sphere.prototype.Center = function(a1,a2,a3){
		if(arguments.length == 3){
			this.o = new Point3D(a1,a2,a3);
		}
		else if(arguments.length == 1){
			this.o = a1;
		}
	};

	//Set current sphere's radius
	Sphere.prototype.Radius = function(r){
		this.r = r;
	};

	Sphere.prototype.GetSurfaceNormal = function(surfacePoint){
		return (this.o.Join(surfacePoint)); 
	};

		Sphere.prototype.ShadowHit = function(ray){
		var temp = ray.o.Join(this.o); //Returns Vector

		var a = ray.d.Dot(ray.d); //Scalar
		var b = temp.Dot(ray.d)*2;
		var c = temp.Dot(temp)-(this.r*this.r);
		var disc = b*b-4*a*c;
		if(disc<0){
			return {y:false,t:0};
		}
		else{
			var e = Math.sqrt(disc);
			var denom = a*2;

			t = (-b-e)/denom;
			if(t>kEpsilon){
				//console.log(t);
				return {y:true,t:t};
			}

			t = (-b+e)/denom;
		
			if(t>kEpsilon){
				return {y:true,t:t};
			}	
		}
		return {y:false,t:0};
	};