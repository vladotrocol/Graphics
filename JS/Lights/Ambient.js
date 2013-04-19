function Ambient(a){
	if(arguments.length == 0){
		this.light = new Light();
		this.i = 0.1;
		this.color = new RgbColor(1);
	}
	else if(arguments.length == 1){
		this.light = a;
		this.i = a.i;
		this.color = a.color;
	}
};

Ambient.prototype.Becomes = function(l){
	this.light = l;
	this.ls = l.i;
	this.color = l.color;
};

Ambient.prototype.GetDirection = function(sr){
	return (new Vector3D());
};

Ambient.prototype.L = function(sr){
	return (this.color.Multiply(this.i));
};