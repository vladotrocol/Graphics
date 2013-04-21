//This is the class definition of a plane geometric object
//Constructors
function Plane(a1, a2){
	this.gtype = "plane";
	this.material = new Lambert();
	this.color = new RgbColor(0.6,0.8,0.5);
	// Plane from void
	if(arguments.length == 0){
		this.o = new Point3D(0.0);
		this.n = new Normal3D(0,1,-0.01);
	}
	//Plane from plane
	else if(arguments.length == 1){
		this.o = a1.o;
		this.n = a1.n;
	}
	// Plane from point and normal
	else if(arguments.length == 2){
		this.o = a1;
		this.n = a2;
	}
};

//-----------------------Prototypes-----------------------
Plane.prototype = new GeometricObj;

//Colone current Plane
	Plane.prototype.Clone = function(){
		return (new Plane(this));
	};

//Current plane becomes plane p
	Plane.prototype.Becomes = function(pl){
		this.o = pl.o;
		this.n = pl.n;
	};

//Does ray r hit current Plane
	Plane.prototype.Hit = function(ray,sr){
		var t = this.o.Join(ray.o).Dot(this.n)/ray.d.Dot(this.n);
		if(t>kEpsilon){
			sr.normal = this.n;
			sr.localHit = ray.o.Add(ray.d.Multiply(t));
			return {y:true,t:t, sr:sr};
		}
		return {y:false,t:0, sr:sr};
	};

	Plane.prototype.ShadowHit = function(ray){
		var t = ray.o.Join(this.o).Dot(this.n)/ray.d.Dot(this.n);
		// if(ray.o.Join(this.o)!=0)
		//console.log(ray.o.Join(this.o).Dot(this.n));
		if(t>kEpsilon){
			return {y:true,t:t};
		}
		else{
			return {y:false,t:0};
		}
	};