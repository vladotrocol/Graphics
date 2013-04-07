//This file contains the class definition of a 3d Point
//Constructors
	function Point3D(a1,a2,a3){
		this.type = "point";
		//Point from constant
		if(arguments.length==1){
			if(typeof a1 === "number"){
				this.x = a1;
				this.y = a1;
				this.z = a1;
			}
		//Point from Point
			else if(a1.type == "point"){
				this.x = a1.x;
				this.y = a1.y;
				this.z = a1.z;
			}
		}
		//Point from Void
		else if(arguments.length==0){
			this.x = 0;
			this.y = 0;
			this.z = 0;
		}
		//Point from 3 constants
		else if(arguments.length == 3){
			this.x = a1;
			this.y = a2;
			this.z = a3;
		}
	};

//--------------Prototypes-------------------
	//Add point p to current point
		Point3D.prototype.Add = function(p){
			this.x += p.x;
			this.y += p.y;
			this.z += p.z;
			return this;
		};

	//Add point p from current point
		Point3D.prototype.Subtract = function(p){
			this.x -= p.x;
			this.y -= p.y;
			this.z -= p.z;
			return this;
		};

	//Negate point
		Point3D.prototype.Negate = function(){
			this.x = -this.x;
			this.y = -this.y;
			this.z = -this.z;
			return this;
		};

	//Return the vector that joins the current point and point p
		Point3D.prototype.Join = function(p){
			return (new Vector3D(this.x - p.x, this.y-p.y, this.z-p.z));
		};

	//Distance from current point to point p
		Point3D.prototype.Distance = function(p){
			return Math.sqrt(Math.pow(this.x-p.x,2)+
			Math.pow(this.y-p.y,2)+
			Math.pow(this.z-p.z,2));
		};

	//Squared distance from current point to point p
		Point3D.prototype.DistanceSquared = function(p){
			return (Math.pow(this.x-p.x,2)+
			Math.pow(this.y-p.y,2)+
			Math.pow(this.z-p.z,2));
		};

	//Current point becomes point p
		Point3D.prototype.Becomes = function(p){
			this.x = p.x;
			this.y = p.y;
			this.z = p.z;
			return this;
		};

	//Add vector v to current point
		Point3D.prototype.AddVector = function(v){
			return (new Point3D(this.x+v.ux, this.y+v.uy, this.z+v.uz));
		};

	//Subtract vector v from current point
		Point3D.prototype.SubtractVector = function(v){
			return (new Point3D(this.x-v.ux, this.y-v.uy,this.z-v.uz));
		};

	//Multiplication by constant c
		Point3D.prototype.MultiplyConstant = function(c){
			return (new Point3D(this.x*c, this.y*a, this.z*a));
		};
//--------------Functions--------------------

	//Add points p1,p2
		function AddPoint(p1,p2){
			var r = new Point3D(p1.x+p2.x,p1.y+p2.y,p1.z+p2.z);
			return r;
		};

	//Substract point p2 from p1
		function SubtractPoint(p1,p2){
			var r = new Point3D(p1.x-p2.x,p1.y-p2.y,p1.z-p2.z);
			return r;
		};

	//Distance between points p1 and p2 
		function DistancePoint(p1,p2){
			return Math.sqrt(Math.pow(p1.x-p2.x,2)+
			Math.pow(p1.y-p2.y,2)+
			Math.pow(p1.z-p2.z,2));
		};

	//Multiply constant c by point p
		function MultiplyConstantPoint(c,p){
			return (new Point3D(c*p.x, c*p.y, c*p.z));
		};

	//Multiplication between point p and matrix m
		function MultiplyMatrixPoint(m,p){
			var temp = new Point3D(m.Get(0,0)*p.x+m.Get(0,1)*p.y+m.Get(0,2)*p.z+m.Get(0,3),
				m.Get(1,0)*p.x+m.Get(1,1)*p.y+m.Get(1,2)*p.z+m.Get(1,3),
				m.Get(2,0)*p.x+m.Get(2,1)*p.y+m.Get(2,2)*p.z+m.Get(2,3));
			return temp;
	};
