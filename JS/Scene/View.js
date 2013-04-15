function View(a){
	if(arguments.length == 0){
		this.hres = 400;
		this.vres = 400;
		this.pixel = 1;
		this.gamma = 1;
		this.invsGamma = 1;
		this.gammutShow = true;
	}
	else if(arguments.length == 1){
		this.hres = a.hres;
		this.vres =  a.vres;
		this.pixel = a.pixel;
		this.gamma = a.gamma;
		this.invsGamma = a.invsGamma;
		this.gammutShadow = a.gammutShadow;
	}
};

//---------------------------Prototypes---------------
	View.prototype.Becomes = function(a){
		this.hres = a.hres;
		this.vres =  a.vres;
		this.pixel = a.pixel;
		this.gamma = a.gamma;
		this.invsGamma = a.invsGamma;
		this.gammutShow = a.gammutShow;
	};

	View.prototype.Hres = function(a){
		this.hres = a;
	};

	View.prototype.Vres = function(a){
		this.vres = a;
	};

	View.prototype.Pixel = function(a){
		this.pixel = a;
	};

	View.prototype.Gamma = function(a){
		this.gamma = a;
	};

	View.prototype.GammutShow = function(a){
		this.gammutShow = a;
	};

