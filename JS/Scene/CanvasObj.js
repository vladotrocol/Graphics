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
		if(x<10&&y<10){
		    this.screen.data[index+0] = 200;
		    this.screen.data[index+1] = 0;
		    this.screen.data[index+2] = 0;
		    this.screen.data[index+3] = 255;		
		}else{
		    this.screen.data[index+0] = c.r;
		    this.screen.data[index+1] = c.g;
		    this.screen.data[index+2] = c.b;
		    this.screen.data[index+3] = 255;
		}
	    this.ctx.putImageData(this.screen,0,0);
	};

	CanvasObj.prototype.DrawSq = function(x,y,c){
		if(c.b<0){
			c.b=0;
		}
		if(c.g<0){
			c.g=0;
		}
		if(c.r<0){
			c.r=0;
		}
		DrawRect(this.ctx,x,y,1,1,RgbToHtml(parseInt(c.r*255),parseInt(c.g*255),parseInt(c.b*255)));
	};
