//Contructor
function Matrix(h,w){
	this.w = w;
	this.h = h;
	this.m = new Array();
	this.Init();
};

//Initialize the matrix with 0s
	Matrix.prototype.Init = function(){
		for(var i=0; i<this.h; i++){
			this.m[i] = new Array(); 
			for(var j=0; j<this.w; j++){
				this.m[i][j] = 0;
			}
		}
	};

//Get element at positions i,j
	Matrix.prototype.Get = function(i,j){
		return this.m[i][j];
	};

//Set value v to element at position i,j
	Matrix.prototype.Set = function(i,j,v){
		this.m[i][j] = v;
	};

//Add constant c to matrix


