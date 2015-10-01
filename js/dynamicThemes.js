var themeButt = new Array();
themeButt[0] = document.getElementById("dynamicButton1");
themeButt[1] = document.getElementById("dynamicButton2");
themeButt[2] = document.getElementById("dynamicButton3");

var chEls = new Array();
chEls[0] = document.getElementById("part1");
chEls[1] = document.getElementById("dynTitUp");
chEls[2] = document.getElementById("dynTitDown");

var chVals = new Array();
chVals[0] = ["url(images/dynamic1.jpg)", "url(images/dynamic2.jpg)", "url(images/dynamic3.jpg)"];
chVals[1] = ["the game", "chess", "play"];
chVals[2] = ["to train your mind", "is for everyone", "the royal game"];

var cssAtrr = ["backgroundImage", "innerHTML", "innerHTML"];

var dynamicWall = document.getElementById("dynamicWall");
var dynTinyText = document.getElementById("dynTinyText");

var changeAct = false;

var currTheme = 0;

var elsOp = 1;
var backOp = 0;

var elsVell = -0.02;

function changeTheme(n){
	
	for(var a = 0; a < chEls.length; a ++){
		if(a === 0){
			chEls[a].style[cssAtrr[a]] = chVals[a][n];
		}else{
			chEls[a][cssAtrr[a]] = chVals[a][n];
		}
	}
	return;
};

function buttThemeClick(n){
	
	for(var a = 0; a < themeButt.length; a ++){
		themeButt[a].style.background = "none";
	}
	themeButt[n].style.background = "#FFF";
	
	currTheme = n;
	
	if(changeAct === false){
		if(chEls[1].innerHTML !== chVals[1][n]){
			changeAct = true;
			changeAction();
		}
	}else{
		if(elsVell > 0){
			if(chEls[1].innerHTML !== chVals[1][n]){
				elsVell = -elsVell;
			}
		}else{
			if(chEls[1].innerHTML === chVals[1][n]){
				elsVell = -elsVell;
			}
		}
	}
	return;
};

function changeAction(){
	
	var actInt = setInterval(function(){
		
		dynamicWall.style.opacity = backOp;
		
		for(var a = 1; a < chEls.length; a ++){
			chEls[a].style.opacity = elsOp;
		}
		dynTinyText.style.opacity = elsOp;
		
		elsOp += elsVell;
		backOp -= elsVell;
		
		if(elsOp < 0){
			elsOp = 0;
			backOp = 1;
			elsVell = -elsVell;
			changeTheme(currTheme);
		}else if(elsOp > 1){
			clearInterval(actInt);
			changeAct = false;
			elsOp = 1;
			backOp = 0;
			elsVell = -0.01;
		}
		
	},17);
	return;
};

function actLoop(){
	
	if(changeAct === false){
		
		if(currTheme < themeButt.length - 1){
			currTheme ++;
		}else{
			currTheme = 0;
		}
		buttThemeClick(currTheme);
		
	}
	setTimeout(function(){
		actLoop();
	},10000);
	
};

setTimeout(function(){
	actLoop();
},5000);