function GeometricObj(a){
	if(arguments.length == 0){
		this.color = "black";
	}
	else if(arguments.length==1){
		this.color = a.color;
	}
};

GeometricObj.prototype.Becomes = function(a){
	this.color = a.color;
	return this;
};