/**
*	MUSIC OBJECT - SCRIPT
*
*/

function Music () {
	this.Author = "";
	this.Name = "";
	this.Description = "";
	this.Image = [];
	this.Category = [];
	this.Artist = "";
	this.Year = 0;
	this.Album = "";
	this.Recorder = "";
	this.Duration = "0:00";
	this.Avaliation = 1;
	this.Avaliations = 0;
	this.Comments = [];
}

var music = new Music ();

function parseMusic (str) {
	var data = [];
	data = str.split("\n");
	var countExtra = 0;
	var tempMusic = new Music();
	//console.log('depois de new\n data: ' + data + "\nlength: "+data.length);
	//if(str.match("category\n"+type+"\n") == null)
	//	return null;
	for(var i=0; i<data.length; i+=2){
		//console.log("for do parse: "+data[i]);
		
		switch(data[i]){
			case "author":
							tempMusic.Author = data[i+1];
							break;
			case "nameX":
							tempMusic.Name = data[i+1];
							break;
			case "description":
							tempMusic.Description = data[i+1];
							break;
			case "image":
							tempMusic.Image[tempMusic.Image.length] = data[i+1];
							break;
			case "category":
							tempMusic.Category[tempMusic.Category.length] = data[i+1];
							break;
			case "extra":
							tempMusic.Artist = data[i+1];
							tempMusic.Year = data[i+3];
							tempMusic.Album = data[i+5];
							tempMusic.Recorder = data[i+7];
							tempMusic.Duration = data[i+9];
							i+=8;
							break;
			case "avaliação":
							tempMusic.Avaliation = data[i+1];
							break;
			case "avaliações":
							tempMusic.Avaliations = data[i+1];
							break;
			case "commentarios":
							tempMusic.Comments[tempMusic.Comments.length] = data[i+1];
							break;
			default: 
						break;
							
		}
		
	}
	console.log("mostrar temp music\nAutor: "+tempMusic.Author+"\nName :"+tempMusic.Name + "\nAno: " + tempMusic.Year + "\nAvaliação:" + tempMusic.Avaliation);
	return tempMusic;
}

function setAvaliation (avl) {
	this.Avaliations ++;
	this.Avaliation += avl/this.Avaliations;
}

function setCommetns (msg) {
	this.Comments[this.Comments.length] = msg;
}

music.parseMusic = parseMusic;
music.setAvaliation = setAvaliation;
music.setCommetns = setCommetns;