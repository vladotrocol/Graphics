/* Copyright Vlad Otrocol */

/*------------------------------------------------*/

// The standard canvas object
	function CanvasObj(canvas, x, y, w, h, fill){
		this.x = x||0;
		this.y = y||0;
		this.w = w||0;
		this.h = h||0;
		this.objects = [];
		this.ctx =  ContextFor(canvas);
		this.Init(canvas, fill);
	};

// Initial set-up of the canvas
	CanvasObj.prototype.Init = function(canvas, fill){
		PositionElement(canvas, this.x, this.y);
		ResizeCanvas(canvas, this.w, this.h);
		DrawRect(this.ctx, 0, 0, this.w, this.h, fill);
	};
