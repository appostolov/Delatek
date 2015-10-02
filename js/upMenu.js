var deskMenu = new Array();
deskMenu[0] = document.getElementById("deskMenu1");
deskMenu[1] = document.getElementById("deskMenu2");
deskMenu[2] = document.getElementById("deskMenu3");
deskMenu[3] = document.getElementById("deskMenu4");
deskMenu[4] = document.getElementById("deskMenu5");

var mobMenu = new Array();
mobMenu[0] = document.getElementById("mobMenu1");
mobMenu[1] = document.getElementById("mobMenu2");
mobMenu[2] = document.getElementById("mobMenu3");
mobMenu[3] = document.getElementById("mobMenu4");
mobMenu[4] = document.getElementById("mobMenu5");

var mobMenuHolder = document.getElementById("upMenu_mobile_buttons_holder");

var showingMenuAction = false;

var currMenuNum;

var menuRealHeight = 100;

var menuCurrHeight = 0;

var menuHeightVell = 10;

function showMenu(mode, n){
	var menu;
	switch(mode){
		case 'desk':
			menu = deskMenu;
			break;
		case 'mob':
			menu = mobMenu;
			break;
	}
	
	if(menu[n].style.display !== "block"){
		
		currMenuNum = n;
		menuCurrHeight = 0;
		
		for(var a = 0; a < menu.length; a ++){
			deskMenu[a].style.display = "none";
			mobMenu[a].style.display = "none";
			
			deskMenu[a].style.height = "0";
			mobMenu[a].style.height = "0";
		}
		deskMenu[n].style.display = "block";
		mobMenu[n].style.display = "block";
		
	}else{
		
		deskMenu[n].style.display = "none";
		mobMenu[n].style.display = "none";
		
	}
	
	if(showingMenuAction === false){
		showingMenuAction = true;
		showMenuAnim();
	}
	return;
};

function showHydeMenu(el){
	if(el.style.display !== "block"){
		el.style.display = "block";
	}else{
		el.style.display = "none";
	}
	return;
};

function showMobMenu(){
	for(var a = 0; a < mobMenu.length; a ++){
		deskMenu[a].style.display = "none";
		mobMenu[a].style.display = "none";
	}
	
	showHydeMenu(mobMenuHolder);
	return;
};

function showMenuAnim(){
	var showMenuAnimInt = setInterval(function(){
		if(menuCurrHeight < menuRealHeight){
			menuCurrHeight += menuHeightVell;
		}else{
			menuCurrHeight = menuRealHeight;
		}
		
		deskMenu[currMenuNum].style.height = menuCurrHeight+"px";
		mobMenu[currMenuNum].style.height = menuCurrHeight+"px";
		
		if(menuCurrHeight === menuRealHeight){
			showingMenuAction = false;
			clearInterval(showMenuAnimInt);
		}
		
	},17);
	return;
};