function Lambert(kd){
	if(arguments.length == 0){
		this.kd = 0.1;
	}
	else if(arguments.length == 1){
		this.kd = kd;
	}
	this.type = "lambert";
};