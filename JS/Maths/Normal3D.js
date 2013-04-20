//This file contains the class definition of a 3d Normal
//Constructors
function Normal3D(a1, a2, a3){
	this.type = "normal";
	//Normal from 3 constants
	if(arguments.length == 3){
		this.nx = a1;
		this.ny = a2;
		this.nz = a3;
	}
	else if(arguments.length == 1){
		//Normal from constant
		if(typeof a1 == "number"){
			this.nx = a1;
			this.ny = a1;
			this.nz = a1;
		}
		//Normal from point
		else if(a1.type == "point"){
			this.nx = a1.x;
			this.ny = a1.y;
			this.nz = a1.z;
		}
		//Normal from vector
		else if(a1.type == "vector"){
			this.nx = a1.ux;
			this.ny = a1.uy;
			this.nz = a1.uz;
		}
		//Normal from normal
		else if(a1.type == "normal"){
			this.nx = a1.nx;
			this.ny = a1.ny;
			this.nz = a1.nz;
		}
	}
	//Normal from void
	else if(arguments.length == 0){
		this.nx = 0;
		this.ny = 0;
		this.nz = 0;
	}
};

//--------------------Prototypes----------------
	//Current normal becomes a
		Normal3D.prototype.Becomes = function(a){
			//Assign a point to current normal
			if(a.type == "point"){
				this.nx = a.x;
				this.ny = a.y;
				this.nz = a.z;
			}
			//Assign a vector to current normal
			else if(a.type == "vector"){
				this.nx = a.ux;
				this.ny = a.uy;
				this.nz = a.uz;
			}
			//Assign a normal to current normal
			else if(a.type == "normal"){
				this.nx = a.nx;
				this.ny = a.ny;
				this.nz = a.nz;
			}
			return this;
		};

	//Magnitude of current normal
		Normal3D.prototype.Magnitude = function(){
			return Math.sqrt(Math.pow(this.nx,2)+Math.pow(this.ny,2)
				+Math.pow(this.nz,2));
		};

	//Normalize current normal
		Normal3D.prototype.Normalize = function(){
			var l = this.Magnitude();
			this.nx /= l;
			this.ny /= l;
			this.nz /= l;
		};

	//Normalize and return current normal
		Normal3D.prototype.Hat = function(){
			this.Normalize();
			return this;
		};

	//Negate current normal
		Normal3D.prototype.Negate = function(){
			var temp = new Normal3D(-this.nx,-this.ny,-this.nz);
			return temp; 
		};

	//Add a to current normal
		Normal3D.prototype.Add = function(a){
			if(a.type == "normal"){
				this.nx+=a.nx;
				this.ny+=a.ny;
				this.nz+=a.nz;
				return this;
			}
		};

	//Multiply current normal by a
		Normal3D.prototype.Multiply = function(a){
			if(typeof a === "number"){
				return (new Normal3D(this.nx*a, this.ny*a, this.nz*a));
			}
		};

		Normal3D.prototype.ToVector = function(){
			return (new Vector3D(this));
		}
//---------------------Functions--------------------
	//Multiplication between normal n and matrix m
		function MultiplyMatrixNormal(m,n){
			var temp = new Point3D(m.Get(0,0)*n.nx+m.Get(1,0)*n.ny+m.Get(2,0)*n.nz,
				m.Get(0,1)*n.nx+m.Get(1,1)*n.ny+m.Get(2,1)*n.nz,
				m.Get(0,2)*n.nx+m.Get(1,2)*n.ny+m.Get(2,2)*n.nz);
			return temp;
		};

	//Multiplication between normal and double
		function MultiplyConstantNormal(c,n){
			return (new Normal3D(c*n.nx, c*n.ny, c*n.nz));
		};

	//Addition of a vector and a normal 
		function AddVectorNormal(v,n){
			return (new Vector3D(v.ux+n.nx, v.uy+n.ny, v.uz+n.nz));
		};

	//Subtraction of a vector and a normal 
		function SubtractVectorNormal(v,n){
			return (new Vector3D(v.ux-n.nx, v.uy-n.ny, v.uz-n.nz));
		};

	//Dot product of a vector and a normal 
		function DotVectorNormal(v,n){
			return (v.ux*n.nx+v.uy*n.ny+v.uz*n.nz);
		};