function Normal3D(arg){
	this.type = "normal";
	if(typeof arg == "number"){
		this.nx = arg;
		this.ny = arg;
		this.nz = arg;
	}
	else if(arg.type == "point"){
		this.nx = arg.x;
		this.ny = arg.y;
		this.nz = arg.z;
	}
	else if(arg.type == "vector"){
		this.nx = arg.ux;
		this.ny = arg.uy;
		this.nz = arg.uz;
	}
	else{
		this.nx = 0;
		this.ny = 0;
		this.nz = 0;
	}
};


