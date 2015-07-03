/**
*	REGISTER X - SCRIPT
*
*/

var counter = 0;

jQuery(function (){

	var status = localStorage.getItem('login');
	if(status != 'done'){
		confirm('por favor identifique-se no login.');
		window.open('login.html');
		window.close();
	} else{
		var user = localStorage.getItem('user');
		var userData = localStorage.getItem(user);
		//console.log(userData);
		$("#name").val(userData.split('\n')[pos.name]);
	}
	//$("#date").datepicker();
	$(".newField").click(function (){
		var fieldClass = 'img';
		if($(".img").eq(-1).val() != ""){

			$(this).before('<input type="file" class='+fieldClass+'>');
			$(this).before('<input type="button" class="remField"' +
				'value="remove" onclick = "removeField(this)">');		
		}
		
	});
	
	$(".newData").click(function (){
		var fieldClass = 'extra';
		if($(".extra").eq(-1).val() != ""){
			var label = "";
			switch(counter){
				case 0:
						label = "Artista";
						break;
				case 1:
						label = "Ano";
						break;
				case 2:
						label = "Album";
						break;
				case 3:
						label = "Gravadora";
						break;
				case 4:
						label = "Duração";
						break;
				default:						
						return;
			}

			$('#lastTag').before('<div class="row no-pad"><label class="col-md-3 no-pad " for="">'+label+'</label><input type="text" class="col-md-9 no-pad input-form" '+fieldClass+' maxlength="50"></div>');
			counter++;
			if(counter == 5)
				$(this).remove();
		}
		
	});
});

function removeField (obj){

	var fieldClass = $(obj).prev().attr('class');
	if(fieldClass == 'img' || fieldClass == 'extra'){
		$(obj).prev().remove();	
		$(obj).remove();
	}
};

function registerSuccess () {

	$(".error").remove();

	var data = "newData\n";

	data += "author\n" + $("#name").val() + '\n';
	data += "nameX\n" + $("#nameX").val() + '\n';
	data += "description\n" + $("#descrip").val() + '\n';

	for(var i=0; i<$(".img").length; i++)
		if($(".img").eq(i).val() != "")
			data += "image\n" + $(".img").eq(i).val() + '\n';

	for(var i=0; i<$(".category").length; i++)
		if($(".category").eq(i).prop("checked"))
			data += "category\n" + $(".category").eq(i).val() + '\n';

	for(var i=0; i<$(".extra").length; i++)
		if($(".extra").eq(i).val() != "")
			data += "extra\n" + $(".extra").eq(i).val() + '\n';

	data += "avaliação\n1\n";
	data += "avaliações\n0\n";
		
	var temp = "";
	temp = localStorage.getItem("musicList");
	if(temp == null)
		temp = "";
	temp += data;
	localStorage.setItem("musicList", temp);

	//window.location.replace("index.html");
	temp = localStorage.getItem("musicList");
	alert("\ncadastro de Música efetuado com sucesso.\n");

	return true;
}

function validator ()
{

	var report = [];
	if (IsNotInserted($("#nameX"))){

		report[report.length] = "invalid name\n";
	}

	if (IsNotCategory($(".category"))){

		report[report.length] = "category not checked\n";
	}

	if (IsNotInserted($(".img"))){

		report[report.length] = "image was not inserted\n";
	}

	if (counter != 5){
		
		report[report.length] = "all description data need to be inputted\n";
	}
	else{
		if (IsNotInserted($(".extra"))){

			report[report.length] = "all extra information need to be inserted\n";
		}
		
		if (IsNotYear($(".extra").eq(1).val())){

			report[report.length] = "extra informations: Ano is invalid\n";
		}
		
		if (IsNotTime($(".extra").eq(4).val())){

			report[report.length] = "extra informations: Duração is invalid\n";
		}
	}
	
	if(report.length == 0){

		return registerSuccess ();
	}
	reportError (report);
	
	return false;
}
