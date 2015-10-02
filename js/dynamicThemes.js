/*
Project:     Delatek Chess club;
Creator:     Petar Apostolov;
Part:        Javascript software;
Description: This software creates dynamic, manageable themes.
			 He change the themes in loop and allow to choose some theme.
Format:

var val;
var val;
....

function fn();
...

*/

/*
***Software resources***
*/
//Buttons for choosing a theme.
var themeButt = new Array();
themeButt[0] = document.getElementById("dynamicButton1");
themeButt[1] = document.getElementById("dynamicButton2");
themeButt[2] = document.getElementById("dynamicButton3");

//Elements with different content in every theme.
var chEls = new Array();
chEls[0] = document.getElementById("part1");
chEls[1] = document.getElementById("dynTitUp");
chEls[2] = document.getElementById("dynTitDown");

//Contents for every theme.
var chVals = new Array();
chVals[0] = ["url(images/dynamic1.jpg)", "url(images/dynamic2.jpg)", "url(images/dynamic3.jpg)"];
chVals[1] = ["the game", "chess", "play"];
chVals[2] = ["to train your mind", "is for everyone", "the royal game"];

//CSS attributes for adding content.
var cssAtrr = ["backgroundImage", "innerHTML", "innerHTML"];

//Help element for hiding the theme image.
var dynamicWall = document.getElementById("dynamicWall");

//Other element affected by the animation.
var dynTinyText = document.getElementById("dynTinyText");

//Animation action listener.
var changeAct = false;

//Current theme index.
var currTheme = 0;

//Elements opacity value.
var elsOp = 1;
var backOp = 0;

//Animation velocity.
var elsVell = -0.02;
/*
***Software resources***END
*/

/*
Changing the elements values.
*/
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

/*
Changing the theme.
*/
function buttThemeClick(n){
	
	//Activates current theme button.
	for(var a = 0; a < themeButt.length; a ++){
		themeButt[a].style.background = "none";
	}
	themeButt[n].style.background = "#FFF";
	
	//Remember the current theme index.
	currTheme = n;
	
	//Checks if the themes are moving.
	if(changeAct === false){
		
		//If we check not active theme, starts animation.
		if(chEls[1].innerHTML !== chVals[1][n]){
			changeAct = true;
			changeAction();
		}
	}else{
		
		//Check for moving back the theme or going for a new.
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

/*
Animation action.
*/
function changeAction(){
	
	//Start animation interval (60 frames/sec).
	var actInt = setInterval(function(){
		
		//Set the elements opacity.
		dynamicWall.style.opacity = backOp;
		
		for(var a = 1; a < chEls.length; a ++){
			chEls[a].style.opacity = elsOp;
		}
		dynTinyText.style.opacity = elsOp;
		
		//Increase/decrease the opacity.
		elsOp += elsVell;
		backOp -= elsVell;
		
		//Checks for changing the direction or stopping the animation.
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

/*
Periodically changing the theme. Using function recursively.
*/
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

/*
Starts the dynamic themes cycle.
*/
setTimeout(function(){
	actLoop();
},5000);