// Constructors
function Ray3D(a1,a2){
	this.type = "ray";
	//Ray form Void
	if(arguments.length == 0){
		this.o = new Point3D(0);
		this.d = new Vector3D(0,0,1);
	}
	//Ray from point and vector
	else if(arguments.length == 2){
		this.o = a1;
		this.d = a2;
	}
	//Ray from other ray
	else if(arguments.length == 1){
		if(a1.type == "ray"){
			this.o = a1.o;
			this.d = a1.d;
		}
	}
};

//--------------------Prototypes-----------------
//Current Ray becomes ray r
	Ray3D.prototype.Becomes = function(r){
		this.o = r.o;
		this.d = r.d;
	};
//--------------------Functions-------------------