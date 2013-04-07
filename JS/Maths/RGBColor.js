//This file is the class definition of rgb color
function RgbColor(a1,a2,a3){
	this.type = "color";
	//rgb color from void
	if(arguments.length == 0){
		this.r = 0;
		this.g = 0;
		this.b = 0;
	}
	//rgb color from 3 constants
	else if(arguments.length == 3){
		this.r = a1;
		this.g = a2;
		this.b = a3;
	}
	else if(arguments.length == 1){
		//rgb color from constant
		if(typeof a1 === "number"){
			this.r = a1;
			this.g = a1;
			this.b = a1;
		}
		//rgb color from rgb color
		else if(a1.type == "color"){
			this.r = a1.r;
			this.g = a1.g;
			this.b = a1.b;
		}
	}
};

// -----------------------Prototypes------------------------
	//rgb color becomes rgb color
		RgbColor.prototype.Becomes = function(rgb){
			this.r = rbg.r;
			this.g = rgb.g;
			this.b = rgb.b;
			return this;
		};

	//Add color rgb to current color
		RgbColor.prototype.Add = function(rgb){
			this.r += rgb.r;
			this.g += rgb.g;
			this.b += rgb.b;
			return this;
		};

	//Subtract color rgb from current color
		RgbColor.prototype.Subtract = function(rgb){
			this.r -= rgb.r;
			this.g -= rgb.g;
			this.b -= rgb.b;
			return this;
		};

	//Multiply current color by a 
		RgbColor.prototype.Multiply = function(a){
			if(typeof a === "number"){
				this.r *= a;
				this.g *= a;
				this.b *= a;
			}
			else if(a.type == "color"){
				this.r *= a.r;
				this.g *= a.g;
				this.b *= a.b;
			}
		};

	//Divide current color by a 
		RgbColor.prototype.Divide = function(a){
			if(typeof a === "number"){
				this.r /= a;
				this.g /= a;
				this.b /= a;
			}
			else if(a.type == "color"){
				this.r /= a.r;
				this.g /= a.g;
				this.b /= a.b;
			}
		};

	//Is current color equal to color rgb
		RgbColor.prototype.Equals = function(rgb){
			if(this.r == rgb.r && this.g == rgb.g && this.b == rgb.b){
				return true;
			}
			else {
				return false;
			}
		};

	//Return current color's average
		RgbColor.prototype.Average = function(){
			return (0.333333333333 * (this.r + this.g + this.b));
		};

	