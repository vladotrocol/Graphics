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
		};

	//Add point p from current point
		Point3D.prototype.Subtract = function(p){
			this.x -= p.x;
			this.y -= p.y;
			this.z -= p.z;
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