/**
*	RECENT LIST - SCRIPT
*
*/

jQuery(function (){

	var data = localStorage.getItem("musicList");
	var type = localStorage.getItem("typeList");
	//var type = "Funk";
	var temp = [];
	var tempMusic = null;
	if(data != null){
		data = data.split("newData\n");
	
		for(var i=data.length-1; i>=0 && temp.length<11; i--){
			var aux = music.parseMusic(data[i]);
			if(aux != null)
				temp[temp.length] = aux;	
		}
		$('.gener').text($('.gener').text()+type);
	}else{
		$('.gener').text("nenhuma música cadastrada");
	}
	for(var i=0; i<temp.length && i < 10; i++){
		
		var typed = false;
		for(var j=0; j < temp[i].Category.length; j++)
			if(temp[i].Category[j] == type){
				typed = true;
				break;
			}
				
		if(typed){
			$(".img-resp-2").eq(i).attr("src", temp[i].Image[0]);
			$('p[class="item-field music"]').eq(i).text("Música: "+temp[i].Name);
			$('p[class="item-name autor"]').eq(i).text("Banda: "+temp[i].Artist); //-------------
			$('p[class="item-field album"]').eq(i).text("Album: "+temp[i].Album); //-------------
			$('p[class="item-field nota"]').eq(i).text("Nota: "+temp[i].Avaliation); //-------------
			$('p[class="item-field avaliations"]').eq(i).text("Avaliações: "+temp[i].Avaliations); //-------------
			$('p[class="item-field ano"]').eq(i).text("Ano: "+temp[i].Year);
			$('p[class="item-field recorder"]').eq(i).text("Gravadora: "+temp[i].Recorder); //-------------
			$('p[class="item-field duration"]').eq(i).text("Duração: "+temp[i].Duration); //attr("content", "PT"+parseInt(temp[i].Duration.split(":")[0])+"M"+ parseInt(temp[i].Duration.split(":")[1]) + "S");
			$('textarea').eq(i).val(temp[i].Description);
		}
	}
});