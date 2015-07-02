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
		console.log(data);
		data = data.split("newData\n");
		console.log("numero de música: "+(data.length-1));
	
		for(var i=data.length-1; i>=0 && temp.length<11; i--){
			var aux = music.parseMusic(data[i], type);
			if(aux != null)
				temp[temp.length] = aux;	
		}
		console.log("data size: "+(temp.length));
		console.log("genero: "+$('.gener').text());
		$('.gener').text($('.gener').text()+type);
	}else{
		console.log("nenhuma música cadastrada");
		$('.gener').text("nenhuma música cadastrada");
	}
	for(var i=0; i<temp.length; i++){
		
		$('p>span[itemprop="name"]').eq(i).text(temp[i].Name);
		console.log("old value: "+$('span>meta[itemprop="name"]').eq(i).text());
		$('span[itemprop="byArtist"]>span[itemprop="name"]').eq(i).text(temp[i].Artist); //-------------
		$('span[itemprop="inAlbum"]>span[itemprop="name"]').eq(i).text(temp[i].Album); //-------------
		$('p>span[itemprop="datePublished"]').eq(i).text(temp[i].Year);
		$('p>span[itemprop="duration"]').eq(i).text(temp[i].Duration);
		$('span[itemprop="publisher"]>span[itemprop="name"]').eq(i).text(temp[i].Recorder); //-------------
		$('p>span[itemprop="duration"]').eq(i).attr("content", "PT"+parseInt(temp[i].Duration.split(":")[0])+"M"+ parseInt(temp[i].Duration.split(":")[1]) + "S");
		$('textarea').eq(i).val(temp[i].Description);
	}
});