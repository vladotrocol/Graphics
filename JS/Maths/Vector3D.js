//This file contains the class definition of a 3d Vector
//Constructors
	function Vector3D(a1,a2,a3){
		this.type = "vector";
		//Vector from Void
		if(arguments.length == 0){
			this.ux = 0;
			this.uy = 0;
			this.uz = 0;
		}
		//Vector from 3 constants
		else if(arguments.length == 3){
			this.ux = a1;
			this.uy = a2;
			this.uz = a3;
		}
		else if(arguments.length == 1){
			//Vector from constant
			if(typeof a1 === "number"){
				this.ux = a1;
				this.uy = a1;
				this.uz = a1; 
			}
			//Vector from Point
			else if(a1.type == "point"){
				this.ux = a1.x;
				this.uy = a1.y;
				this.uz = a1.z; 
			}
			//Vector from Vector
			else if(a1.type == "vector"){
				this.ux = a1.ux;
				this.uy = a1.uy;
				this.uz = a1.uz;
			}
			//Vector from Normal
			else if(a1.type == "normal"){
				this.ux = a1.nx;
				this.uy = a1.ny;
				this.uz = a1.nz;
			}
		}
	};

// ----------------Prototypes--------------

	//Check if current vector is equal to vector v 
		Vector3D.prototype.Equals = function(v){
			if(this.ux == v.ux && 
				this.uy == v.uy && 
				this.uz == v.uz){
				return true;
			}
			else{
				return false;
			}
		};

	//Add vector v to current vector
		Vector3D.prototype.Add = function(v){
			this.ux = this.ux+v.ux;
			this.uy = this.uy+v.uy;
			this.uz = this.uz+v.uz;
			return this;
		};

	//Substract vector v from current vector
		Vector3D.prototype.Subtract = function(v){
			var temp = new Vector3D(this);
			temp.ux = temp.ux-v.ux;
			temp.uy = temp.uy-v.uy;
			temp.uz = temp.uz-v.uz;
			return temp;
		};

	//Multiply vector v to current vector
		Vector3D.prototype.Multiply = function(a){
			var b = new Vector3D(this.ux, this.uy, this.uz); 
			if(a.type == "vector"){
				b.ux *= a.ux;
				b.uy *= a.uy;
				b.uz *= a.uz;
			}
			else if(typeof a === "number"){
				b.ux *= a;
				b.uy *= a;
				b.uz *= a;
			}
			return b;
		};

	//Current vector becomes a
		Vector3D.prototype.Becomes = function(a){
			//Assign a Point to current vector
			if(a.type == "point"){
				this.ux = a.x;
				this.uy = a.y;
				this.uz = a.z;
			}
			//Assign a Vector to current vector
			else if(a.type == "vector"){
				this.ux = a.ux;
				this.uy = a.uy;
				this.uz = a.uz;
			}
			//Assign a Normal to current vector
			else if(a.type == "normal"){
				this.ux = a.nx;
				this.uy = a.ny;
				this.uz = a.nz;
			}
			return this;
		};

	//Negate current vector
		Vector3D.prototype.Negate = function(){
			var temp = new Vector3D(this);
			temp.ux = -temp.ux;
			temp.uy = -temp.uy;
			temp.uz = -temp.uz;
			return temp;
		}

	//The Magnitude of the current vector
		Vector3D.prototype.Magnitude = function(){
			return Math.sqrt(Math.pow(this.ux,2)+Math.pow(this.uy,2)
				+Math.pow(this.uz,2));
		};

	//The Magnitude of the current vector
		Vector3D.prototype.MagnitudeSquared = function(){
			return Math.pow(this.ux,2)+Math.pow(this.uy,2)
				+Math.pow(this.uz,2);
		};

	//The dot product of current vector with vector v
		Vector3D.prototype.Dot = function(a){
			if(a.type == "vector"){
				return this.ux*a.ux+this.uy*a.uy+this.uz*a.uz;
			}
			else if(a.type == "normal"){
				return this.ux*a.nx+this.uy*a.ny+this.uz*a.nz;
			}
		};

	//The cross product between current vector and v 
		Vector3D.prototype.Cross = function(v){
			var r = new Vector3D(this.uy*v.uz-this.uz*v.uy,
								this.uz*v.ux-this.ux*v.uz,
								this.ux*v.uy-this.uy*v.ux);
			return r;
		};

	//Normalize current vector
		Vector3D.prototype.Normalize = function(){
			var l = this.Magnitude();
			this.ux /= l;
			this.uy /= l;
			this.uz /= l;
		};

	//Normalize and return the new vector
		Vector3D.prototype.Hat = function(){
			this.Normalize();
			return this;
		}

//--------------Prototypes and Points-----------
	//Add current vector to point p 
		Vector3D.prototype.AddPoint = function(p){
			var r = new Point3D(p.x+this.ux,p.y+this.uy,p.z+this.uz);
			return r;
		};

	//Substract vector v from point p 
		Vector3D.prototype.SubtractPoint = function(p){
			var r = new Point3D(p.x-this.ux,p.y-this.uy,p.z-this.uz);
			return r;
		};		

// -------------Functions---------------

	//Add vectors u and v
		function AddVector(u,v){
			var r = new Vector3D(u.ux+v.ux, u.uy+v.uy, u.uz+v.uz);
			return r;
		};

	//Substract vectors u and v
		function SubtractVector(u,v){
			var r = new Vector3D(u.ux-v.ux, u.uy-v.uy, u.uz-v.uz);
			return r;
		};

	//Multiply vectors u and v
		function MultiplyVector(u,v){
			var r = new Vector3D(u.ux*v.ux, u.uy*v.uy, u.uz*v.uz);
			return r;
		};

	//Scale vector u by s 
		function ScaleVector(u,s){
			var r = new Vector3D(s*u.ux,s*u.uy,s*u.uz);
			return r;
		};

	//Check if vector u is equal to vector v 
		function EqualsVector(u,v){
			if(u.ux==v.ux&&u.uy==v.uy&&u.uz=v.uz){
				return true;
			}
			else{
				return false;
			}
		};

	//Vector v becomes negative
		function NegVector(v){
			var r = new Vector3D(-v.ux,-v.uy,-v.uz);
		};

	//Magnitude of vector v
		function MagnitudeVector(v){
			return Math.sqrt(Math.pow(v.ux,2)+Math.pow(v.uy,2)
				+Math.pow(v.uz,2));
		};

	//Magnitude of vector v
		function MagnitudeSquaredVector(v){
			return Math.pow(v.ux,2)+Math.pow(v.uy,2)
				+Math.pow(v.uz,2);
		};

	//The dot product between vectors u and v
		function DotVector(u,v){
			return u.ux*v.ux+u.uy*v.uy+u.uz*v.uz;
		};

	//The cross product between vectors u and v 
		function CrossVector(u,v){
			var r = new Vector3D(u.uy*v.uz-u.uz*v.uy,
								u.uz*v.ux-u.ux*v.uz,
								u.ux*v.uy-u.uy*v.ux);
			return r;
		};

//--------------------Vectors and Points----------------

	//Add vector v to point p 
		function AddPointVector(p,v){
			var r = new Point3D(p.x+v.ux,p.y+v.uy,p.z+v.uz);
			return r;
		};

	//Substract vector v from point p 
		function SubtractPointVector(p,v){
			var r = new Point3D(p.x-v.ux,p.y-v.uy,p.z-v.uz);
			return r;
		};

//-------------------Vectors and Matrices----------------
	//Multiplication between vector v and matrix m
		function MultiplyMatrixVector(m,v){
			var temp = new Point3D(m.Get(0,0)*v.ux+m.Get(0,1)*v.uy+m.Get(0,2)*v.uz+m.Get(0,3),
				m.Get(1,0)*v.ux+m.Get(1,1)*v.uy+m.Get(1,2)*v.uz+m.Get(1,3),
				m.Get(2,0)*v.ux+m.Get(2,1)*v.uy+m.Get(2,2)*v.uz+m.Get(2,3));
			return temp;
		};
