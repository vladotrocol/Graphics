//Contructor
function Matrix(){
	this.m = new Array();
	this.Init();
}

//----------------------Prototypes----------------------
//Initialize the matrix with 0s
	Matrix.prototype.Init = function(){
		for(var i=0; i<4; i++){
			this.m[i] = new Array(); 
			for(var j=0; j<4; j++){
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

//Multiplicate current matrix by matrix m
	Matrix.prototype.Multiply = function(m){
		var prodM = new Matrix();
		for (var y = 0; y < 4; y++)
			for (var x = 0; x < 4; x++) {
				var sum = 0.0;

			for (var j = 0; j < 4; j++)
				sum += m.Get(x,j)* this.Get(j,y);
 
			prodM.Set(x,y,sum);
		}
		this.m = prodM.m;
	};

//Divide current matrix by c
	Matrix.prototype.Divide = function(c){
		for(var i=0;i<4;i++){
			for(var j=0;j<4;j++){
				this.Set(i,j,this.Get(i,j)/c);
			}
		}
	};

//Set current matrix to Identity
	Matrix.prototype.Identity = function(){
		for(var i=0;i<4;i++){
			for(var j=0;j<4;j++){
				if(i==j){
					this.Set(i,j,1);
				}
				else{
					this.Set(i,j,0);
				}
			}
		}
	}

//Print matrix
	Matrix.prototype.Print = function(){
		var s = "";
		for(var i=0;i<4;i++){
			for(var j=0;j<4;j++){
				s+=this.Get(i,j)+" ";
			}
			s+="\n";
		}
		console.log(s);
	};

// ----------------------Functions------------------------
//Multiplicate matrices m1 and m2
	function MultiplyMatrix(m1,m2){
		var prodM = new Matrix();
		for (var y = 0; y < 4; y++)
			for (var x = 0; x < 4; x++) {
				var sum = 0.0;

			for (var j = 0; j < 4; j++)
				sum += m1.Get(x,j)* m2.Get(j,y);
 
			prodM.Set(x,y,sum);
		}
		return prodM;
	};

//Divide matrix m by scalar c 
	function DivideMatrix(m,c){
		for(var i=0;i<4;i++){
			for(var j=0;j<4;j++){
				m.Set(i,j,m.Get(i,j)/c);
			}
		}
		return m;
	};

//Set current matrix to Identity
	function IdentityMatrix(){
		var m = new Matrix();
		for(var i=0;i<4;i++){
			for(var j=0;j<4;j++){
				if(i==j){
					m.Set(i,j,1);
				}
				else{
					m.Set(i,j,0);
				}
			}
		}
		return m;
	};