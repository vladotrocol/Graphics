/* Copyright Vlad Otrocol */

/*------------------------------------------------*/

// The standard canvas object
	function CanvasObj(canvas, x, y, w, h, fill){
		this.x = x||0;
		this.y = y||0;
		this.w = w||0;
		this.h = h||0;
		this.ctx =  ContextFor(canvas);
		this.Init(canvas, fill);
		this.screen = this.ctx.createImageData(this.h,this.w);
	};

// Initial set-up of the canvas
	CanvasObj.prototype.Init = function(canvas, fill){
		PositionElement(canvas, this.x, this.y);
		ResizeCanvas(canvas, this.w, this.h);
		DrawRect(this.ctx, 0, 0, this.w, this.h, fill);
	};

// Draw a pixel
	CanvasObj.prototype.DrawPixel = function(x,y,c){
		index = (x + y * this.screen.width) * 4;
	    this.screen.data[index+0] = c.r;
	    this.screen.data[index+1] = c.g;
	    this.screen.data[index+2] = c.b;
	    this.screen.data[index+3] = 1;
	    this.ctx.putImageData(this.screen,0,0);
	};
