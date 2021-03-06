/**
*	GENERAL - SCRIPT
*
*/

var pos = {
	name: 0,
	date: 1, 
	city: 2,
	state: 3, 
	number: 4, 
	email: 5,
	password: 6	
}

function reportError (report) {
	
	if(report == null)
		return;
	
	var msg = "";
	for(var i=0; i<report.length; i++)
		msg+= report[i]+"\n";
	
	$(".error").remove();
	$("#submit").before('<div class="error"><span>'+ msg +'</span><br></div>');
}

function IsNotEmail (email) {
	var padrao = /^[^\s\v\n\t\r]+[^\s\v\n\t\r.]+\@+[^\s\v\n\t\r.]+\.+[^\s\v\n\t\r]+[^\s\v\n\t\r.]$/;
	return !padrao.test(email);
}

function IsExistEmail (email) {
	var data = localStorage.getItem(email+'data');
	return data != null;
}

function IsNotName (name) {
	var padrao = /^[a-zA-Z\u00C0-\u00FF ]+$/;
	return !padrao.test(name);
}

function IsInvalidDate (date) {
	var vDate = date.split("-");
	console.log(vDate);
	if(vDate.length == 3){
		if(vDate[0].length == 4 && vDate[1].length == 2 && vDate[2].length == 2){
				date = new Date (vDate[0], vDate[1]-1, vDate[2]);
				today = new Date ();
				console.log(today);
				if((today - date)/1000/60/60/24/30/12 > 13)
					return false;
		}		
	}
	
	return true;
}
function IsNotState (state) {
	if(state == "--")
		return true;
	
	return false;
}

function IsNotCel(number) {
	var padrao = /^[0-9]+$/;
	
	return !padrao.test(number) || number.length != 10;	
}

function IsNotPassword (password){
	console.log(password);
	if(password.length > 7){
		console.log("length");
		if(!/^[^\W]+$/.test(password)){
			console.log("W");
			if(!/^[^0-9]+$/.test(password)){
				console.log("number");
				if(!/^[^a-z]+$/.test(password)){
					console.log("min");
					if(!/^[^A-Z]+$/.test(password)){
						console.log("caps");
						return false;
					}
				}
			}
		}
	}
	return true;
}

function IsNotEqualPassword (password, confirm) {
	return password !== confirm;
}

function IsNotCategory (vCategory) {
	for(var i=0; i<vCategory.length; i++){
		if(vCategory.eq(i).prop("checked"))
			return false;
	}
	return true;
}

function IsNotInserted (vInput) {
	for(var i=0; i<vInput.length; i++){
		if(vInput.eq(i).val() != "")
			return false;
	}
	return true;
}

function IsNotYear (year) {

	return isNaN(year) || year.length != 4 || (new Date() - new Date(year, 0, 1))<0;
}

function IsNotTime (time) {

	var padrao = /^[0-9]+\:+[0-9]+$/;
	var verif = time.split(":");
	return !padrao.test(time) || !(verif[0].length == 2 || verif[0].length == 1) || verif[1].length != 2 || verif[1] >= 60;
}