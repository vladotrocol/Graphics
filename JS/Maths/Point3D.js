//Constructor
	function Point3D(x,y,z){
		this.x = x;
		this.y = y;
		this.z = z;
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