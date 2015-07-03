jQuery(function(){
	
	$("#first_elem").before(
	"<div><span class=\"sr-only\">"+
	"<p>Teclas de atalhos para acessibilidade:</p>"+
    "<p>Em todas as páginas pressionando-se a tecla ALT em conjunto com as inicial em inglês das operações chega-se diretamente a suas páginas.</p>"+
    "<p>Teclando-se ALT + H nas páginas do site, chega-se diretamente ao botão inicial HOME</p>"+
    "<p>Teclando-se ALT + L nas páginas do site, chega-se diretamente ao botão de LOGIN, logar</p>"+
    "<p>Teclando-se ALT + S nas páginas do site, chega-se diretamente ao botão de SIGNUP, cadastrar</p>"+
    "<p>Teclando-se ALT + O nas páginas do site, desde que já esteja logado, é possível chegar-se diretamente ao botão logOut, deslogar</p>"+
    "<p>Teclando-se ALT + R nas páginas do site, desde que já esteja logado, chega-se diretamente ao botão  de REGIST music, registrar uma nova música</p>"+
    "<p>Teclando-se ALT + V nas páginas de músicas, desde que já esteja logado, é possível chegar-se diretamento ao campo de VOTE, votação</p>"+
    "<p>Teclando-se ALT + C nas páginas de músicas, desde que já esteja logado, é possível chegar-se diretamento ao campo de COMMENT, comentários</p>"+
    "<p>Teclando-se ALT + J nas páginas do site, é possível dar JUMP, pular para o conteúdo principal de cada site.</p>"+
    "<p>As observações anteriores referem-se ao navegador Internet Explorer.</p>"+
    "<p>No caso do Firefox, ao invés de ALT + número, deve-se teclar simultaneamente ALT + SHIFT + número.</p>"+
    "<p>No Opera, as teclas são SHIFT + ESCAPE + número. Ao teclar-se apenas SHIFT + ESCAPE, abre-se uma janela com todas as alternativas de ACCESSKEY da página.</p>"+
    "<p>No Firefox e no Opera, ao se teclar suas alternativas de acesso, entra-se diretamente na página proposta, enquanto que no Internet Explorer, ele apenas posiciona</p>" +
    	"o mouse no link para se clicar e, No caso da navegação via teclado, deve-se precionar ENTER para acessar a página desejada.</p>" +
    "</span></div>");

	var type = "Funk"
	var data = localStorage.getItem("musicList");
	//var type = "Funk";
	var temp = [];
	var tempMusic = null;

	if(data != null){
		data = data.split("newData\n");
	
		for(var i=data.length-1; i>=0; i--){
			var aux = music.parseMusic(data[i]);
			if(aux != null)
				temp[temp.length] = aux;	
		}
	}
	
	var counter = 0;
	for(var i=0; i<temp.length ; i++){
		
		console.log(type);
		
		var typed = false;
		for(var j=0; j < temp[i].Category.length; j++)
			if(temp[i].Category[j] == type){
				typed = true;
				counter ++;
				break;
			}
		
		console.log("Musica: "+ temp[i].Category +" type: " + type + " counter: "+counter + " i: "+i + " typed: " + typed + " temp.lenght: "+temp.length);
		
		if((i == temp.length-1 && typed == false) || counter > 3){
			i = 0;
			counter  = 0;
			switch(type){
			case "Funk":
				type = "Hip-Hop";
				continue;
				break;
			case "Hip-Hop":
				type = "Pagode";
				continue;
				break;
			case "Pagode":
				typed = false;
				i = temp.length;
				continue;
				break;
			default:
				typed = false;
				break;
			}
		}
	
		
		
		if(typed){
			$(".img-resp-4").eq(i).attr("src", temp[i].Image[0]);
			$('p[class="item-name"]').eq(i).text("Música: "+temp[i].Name);
			$('p[class="item-buttom"]').eq(i).text("Nota: "+temp[i].Avaliation); //-------------
		}
	}
	
});