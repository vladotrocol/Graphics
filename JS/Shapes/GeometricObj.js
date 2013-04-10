//This file contains the class definition for a geometric object
//Constructors
	function GeometricObj(a){
		this.type = "geometric";
		if(arguments.length == 0){
			this.color = new RgbColor();
		}
		else if(arguments.length == 1){
			this.color = a.color;
		}
	};

//Current geometric object becomes a
	GeometricObj.prototype.Becomes = function(a){
		if(a.type == "geometric"){
			this.color = a.color;
			return this;
		}
	};

//Get the current color
	GeometricObj.prototype.GetColor = function(){
		return this.color;
	};

//Set the current color
	GeometricObj.prototype.SetColor = function (a1,a2,a3){
		if(arguments.length == 1){
			this.color = a1;
		}
		else if(arguments.length == 3){
			this.color = new RgbColor(a1,a2,a3);
		}
	};


