//this file contains the class definition of ShadeRec
// Constructors
	function ShadeRec(a){
		this.type = "shaderec";
		if(a.type == "world"){
			this.hitObj = false;
			this.localHit = new Point3D();
			this.worldHit = new Point3D();
			this.normal = new Normal3D();
			this.color = new RgbColor();
			this.w = a;
		}
		if(a.type == "shaderec"){
			this.hitObj = a.hitObj;
			this.localHit = a.localHit;
			this.worldHit = a.worldHit;
			this.normal = new Normal3D();
			this.color = a.color;
			this.w = a.w;
		}
	};