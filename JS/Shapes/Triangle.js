function Triangle(a1, a2, a3){
	this.gtype = "triangle";
	this.material = new Material("plain");
	if(arguments.length == 0){
		this.v0  = new Point3D(0);
		this.v1  = new Point3D(0,0,1);
		this.v2  = new Point3D(1,0,0);
		this.n = new Normal3D(0,1,0);
	}
	else if(arguments.length == 3){
		this.v0 = a1;
		this.v1 = a2;
		this.v2 = a3;
		this.n = ComputeNormal(this.v0,this.v1,this.v2);
	}
};

function ComputeNormal(v0,v1,v2){
	var v = v1.Join(v0).Cross(v2.Join(v0));
	v.Normalize();
	return (new Normal3D(v.ux, v.uy, v.uz));
};

Triangle.prototype = new GeometricObj;

Triangle.prototype.Hit = function(ray, sr){
	
	var a = this.v0.x - this.v1.x;
	var b = this.v0.x - this.v2.x;
	var c = ray.d.ux;
	var d = this.v0.x - ray.o.x;

	var e = this.v0.y - this.v1.y;
	var f = this.v0.y - this.v2.y;
	var g = ray.d.uy;
	var h = this.v0.y - ray.o.y;

	var i = this.v0.z - this.v1.z;
	var j = this.v0.z - this.v2.z;
	var k = ray.d.uz;
	var l = this.v0.z - ray.o.z;

	var m = f*k - g*j;
	var n = h*k - g*l;
	var p = f*l - h*j;

	var q = g*i - e*k;
	var s = e*j - f*i;

	var invDenom = 1/(a*m+b*q+c*s);

	var el = d*m - b*n - c*p;
	var beta = el*invDenom;

	if(beta<0){
		return {y:false, t:0, sr:sr};
	}

	var r = e*l - h*i;
	var e2 = a*n + d*q + c*r;
	var gamma = e2 * invDenom;

	if(gamma < 0){
		return {y:false, t:0, sr:sr};
	}

	if(beta+gamma > 1){
		return {y:false, t:0, sr:sr};
	}

	var e3 = a*p - b*r + d*s;
	var t = e3*invDenom;

	if(t<kEpsilon){
		return {y:false, t:0, sr:sr};
	}

	sr.normal = this.n;
	sr.localHit = ray.o.Add(ray.d.Multiply(t));
	return {y:true, t:t, sr:sr};
};