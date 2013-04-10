// Get 2D Context For
	function ContextFor(canvas){
		return canvas.getContext("2d");
	};

// Resize Canvas
	function ResizeCanvas(canvas, w, h){
		canvas.height = h;
		canvas.width = w;
	};

// Position Elements
	function PositionElement(element, x, y){
		element.style.position = "absolute";
		element.style.top = y + "px";
		element.style.left = x + "px";
	};

// Draw Rectangle
	function DrawRect(ctx, x, y, w, h, fill){
		ctx.fillStyle = fill;
		if(w=="auto")
			w=window.innerWidth;
		if(h=="auto")
			h=window.innerHeight;
		ctx.fillRect(x, y, w, h);
	};
//Convert RGB values to html format
	function RgbToHtml(red, green, blue){
	    var decColor =0x1000000+ blue + 0x100 * green + 0x10000 *red;
	    return '#'+decColor.toString(16).substr(1);
	};
