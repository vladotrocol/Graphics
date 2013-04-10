//This is the class definition of a plane geometric object
//Constructors
function Plane(a1, a2){
	this.color = new RgbColor(100,20,150);
	// Plane from void
	if(arguments.length == 0){
		this.o = new Point3D();
		this.n = new Normal3D();
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
	Plane.prototype.Hit = function(r,tmin,sc){
		var t = this.o.Join(ray.o).Dot(this.n)/ray.d.Dot(this.n);
		if(t>kEpsilon){
			tmin = t;
			sr.normal = n;
			sr.localHit = ray.o.Add(ray.d.Multyply(t));
			return true;
		}
		return false;
	};