function Light(){
	this.shadows = false;
};

Light.prototype.Becomes = function(l){
	this = l;
	return this;
};