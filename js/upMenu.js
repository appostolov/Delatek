/*
Project:     Delatek Chess club;
Creator:     Petar Apostolov;
Part:        Javascript software;
Description: This script manage the navigation buttons menus.
             We can show and hide menus by clicking the up menu buttons.
             The selected menu is appearing by animation.
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

//Up buttons menus for desktop appearance.
var deskMenu = new Array();
deskMenu[0] = document.getElementById("deskMenu1");
deskMenu[1] = document.getElementById("deskMenu2");
deskMenu[2] = document.getElementById("deskMenu3");
deskMenu[3] = document.getElementById("deskMenu4");
deskMenu[4] = document.getElementById("deskMenu5");

//Up buttons menus for mobile appearance.
var mobMenu = new Array();
mobMenu[0] = document.getElementById("mobMenu1");
mobMenu[1] = document.getElementById("mobMenu2");
mobMenu[2] = document.getElementById("mobMenu3");
mobMenu[3] = document.getElementById("mobMenu4");
mobMenu[4] = document.getElementById("mobMenu5");

//Mobile buttons holder.
var mobMenuHolder = document.getElementById("upMenu_mobile_buttons_holder");

//Showing animation action listener.
var showingMenuAction = false;

//Index of the menu for showing.
var currMenuNum;

//Full height of the menu.
var menuRealHeight = 100;

//Menu height at the moment.
var menuCurrHeight = 0;

//Menu appearing velocity.
var menuHeightVell = 10;
/*
***Software resources***END
*/

/*
Show desired menu.
*/
function showMenu(mode, n){
	
	//Checks is a desktop or mobile keyboard is clicked.
	var menu;
	switch(mode){
		case 'desk':
			menu = deskMenu;
			break;
		case 'mob':
			menu = mobMenu;
			break;
	}
	
	//Checks to show or to hide the menu.
	if(menu[n].style.display !== "block"){
		
		//Remember the current menu index and set start position.
		currMenuNum = n;
		menuCurrHeight = 0;
		
		//Hide all menus.
		for(var a = 0; a < menu.length; a ++){
			deskMenu[a].style.display = "none";
			mobMenu[a].style.display = "none";
			
			deskMenu[a].style.height = "0";
			mobMenu[a].style.height = "0";
		}
		
		//Makes the current menu visible.
		deskMenu[n].style.display = "block";
		mobMenu[n].style.display = "block";
		
	}else{
		//Hides the current menu.
		deskMenu[n].style.display = "none";
		mobMenu[n].style.display = "none";
		
	}
	
	//Starts animation if needed.
	if(showingMenuAction === false){
		showingMenuAction = true;
		showMenuAnim();
	}
	return;
};

/*
Show/hide buttons keyboard. (Used for mobile keyboard)
*/
function showHydeMenu(el){
	if(el.style.display !== "block"){
		el.style.display = "block";
	}else{
		el.style.display = "none";
	}
	return;
};

/*
Show/hide buttons keyboard and hide all menus.
*/
function showMobMenu(){
	for(var a = 0; a < mobMenu.length; a ++){
		deskMenu[a].style.display = "none";
		mobMenu[a].style.display = "none";
	}
	
	showHydeMenu(mobMenuHolder);
	return;
};

/*
Show menus animation.
*/
function showMenuAnim(){
	
	//Start animation interval (60 frames/sec).
	var showMenuAnimInt = setInterval(function(){
		
		//Increase showing menu height value.
		if(menuCurrHeight < menuRealHeight){
			menuCurrHeight += menuHeightVell;
		}else{
			menuCurrHeight = menuRealHeight;
		}
		
		//Sets the increased height.
		deskMenu[currMenuNum].style.height = menuCurrHeight+"px";
		mobMenu[currMenuNum].style.height = menuCurrHeight+"px";
		
		//Checks for ending the animation.
		if(menuCurrHeight === menuRealHeight){
			showingMenuAction = false;
			clearInterval(showMenuAnimInt);
		}
		
	},17);
	return;
};