/**
*	SIGNIN - SCRIPT
*
*/

function signinSuccess () {

	$(".error").remove();

	var data = "";
	data += $("#name").val() + '\n';
	data += $("#date").val() + '\n';
	data += $("#city").val() + '\n';
	data += $("#state option:selected").val() + '\n';
	data += $("#celphone").val() + '\n';
	data += $("#email").val() + '\n';
	data += $("#password").val();
	
	localStorage.setItem($("#email").val() + 'data', data);
	
	alert("cadastro efetuado com sucesso.");

	window.open("index.html");
	window.close();
	//window.location.replace("index.html");
	
	return true;
}

function validator ()
{
	console.log("entrou");
	var data = localStorage.getItem($("#email").val());
	var report = [];
	if(data != null){

		report[report.length] = "email is already used\n";
	}
	if (IsNotName($("#name").val())){

		report[report.length] = "invalid name\n";
	}
	if (IsInvalidDate($("#date").val())){
		
		report[report.length] = "invalid Date\n";
	}
	if (IsNotName($("#city").val())){
		
		report[report.length] = "invalid city\n";
	}
	if (IsNotState($("#state option:selected").val())){
		
		report[report.length] = "invalid state\n";
	}
	if (IsNotCel($("#celphone").val())){
		
		report[report.length] = "invalid celphone number\n";
	}
	if(IsNotEmail($("#email").val())){
		
		report[report.length] = "invalid email";
	}
	else if(IsExistEmail($("#email").val())){
		
		report[report.length] = "used email";
	}
	if (IsNotPassword($("#password").val())){
		
		report[report.length] = "invalid password";
	}
	if (IsNotEqualPassword($("#password").val(), $("#confirm").val())){
		
		report[report.length] = "invalid confirm password";
	}
	
	if(report.length == 0){
		
		return signinSuccess ();
	}
	
	reportError (report);
	
	return false;
}
