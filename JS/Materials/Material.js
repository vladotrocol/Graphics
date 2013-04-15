function Material(type){
	if (type == "plain"){
		this.m = new Plain();
	}	
	else if(type == "lambert"){
		this.m = new Lambert();
	}
};