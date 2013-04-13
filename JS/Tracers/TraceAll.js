function TraceAll(a){
	if(arguments.length ==0){
		this.tracer = new Tracer();
	}
	else if(arguments.length == 1){
		this.tracer = new Tracer(a);
	}
};

//-----------------------Prototypes--------------
TraceAll.prototype.TraceRay = function(r){
	var sr = new ShadeRec(this.tracer.w.HitBareBones(r));
	if(sr.hitObj){
		return sr.color;
	}
	else{
			return this.tracer.w.background;
	}
}
