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
			var b = new RgbColor(this);
			if(typeof rgb === "number"){
				b.r += rgb;
				b.g += rgb;
				b.b += rgb;
				return b;
			}
			else if(rgb.type == "color"){
				b.r += rgb.r;
				b.g += rgb.g;
				b.b += rgb.b;
				return b;
			}
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
			var temp = new RgbColor(this);
			if(typeof a === "number"){
				temp.r *= a;
				temp.g *= a;
				temp.b *= a;
			}
			else if(a.type == "color"){
				temp.r *= a.r;
				temp.g *= a.g;
				temp.b *= a.b;
			}
			return temp;
		};

	//Divide current color by a 
		RgbColor.prototype.Divide = function(a){
			var temp = new RgbColor(this);
			if(typeof a === "number"){
				temp.r /= a;
				temp.g /= a;
				temp.b /= a;
			}
			else if(a.type == "color"){
				temp.r /= a.r;
				temp.g /= a.g;
				temp.b /= a.b;
			}
			return temp;
		};

		RgbColor.prototype.Pow = function(p){
			return new RgbColor(Math.pow(this.r,p),Math.pow(this.g,p),Math.pow(this.b,p));
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

	