/**
* 	PROCESS - SCRIPT
*
*/

jQuery(function (){
	
	$('a[href="login.html"]').attr("accesskey", "L");
	$('a[href="signin.html"]').attr("accesskey", "S");
	$('a[href="index.html"]').attr("accesskey", "H");
	$('a[href="registerX.html"]').attr("accesskey", "R");

	var login = localStorage.getItem("login");

	if(login == "done"){
		//alert($('a[href="login.html"]').text());
		$('a[href="login.html"]').text("Logout");
		$('a[href="login.html"]').attr("accesskey", "O");
		$('a[href="signin.html"]').hide();
		$('a[href="signin.html"]').attr("accesskey", "");
	}else{
		$('a[href="registerX.html"]').hide();
		$('a[href="registerX.html"]').attr("accesskey", "");
	}

	$('a[href="login.html"]').click(function (){
		var login = localStorage.getItem("login");

		if(login == "done"){
			//alert($('a[href="login.html"]').text());
			$('a[href="login.html"]').html("Login");
			$('a[href="login.html"]').attr("accesskey", "L");
			localStorage.setItem("login", "logout");
			alert("logout efetuado com sucesso.");
		}		
		
	});
	$(".dropdown-menu li a").attr("href", "recentList.html");

	$(".dropdown-menu li:nth-child(1) a").click(function (){
		
		localStorage.setItem("typeList", "Funk");
	});
	$(".dropdown-menu li:nth-child(2) a").click(function (){
		
		localStorage.setItem("typeList", "Hip-Hop");
	});
	$(".dropdown-menu li:nth-child(3) a").click(function (){
		
		localStorage.setItem("typeList", "Pagode");
	});
	$(".dropdown-menu li:nth-child(4) a").click(function (){
		
		localStorage.setItem("typeList", "Pop");
	});
	$(".dropdown-menu li:nth-child(5) a").click(function (){
		
		localStorage.setItem("typeList", "Rock");
	});
	$(".dropdown-menu li:nth-child(6) a").click(function (){
		
		localStorage.setItem("typeList", "Sertanejo");
	});
	
});