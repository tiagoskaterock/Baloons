// variable that stores the timeout() function
var timerID = null;
var gameRodando = true;

function startGame(){
	// alert("Game started");
	var url = window.location.search;

	// alert(url);

	var gameLevel = url.replace("?", "");
	// alert(gameLevel);

	// easy --> 1 = 120 seconds
	// medium --> 2 = 60 seconds
	// hard --> 1 = 30 seconds

	var seconds = 0;

	if (gameLevel == 1) {
		seconds = 120;
	}
	else if (gameLevel == 2) {
		seconds = 60;
	}
	else if (gameLevel == 3) {
		seconds = 30;
		// seconds = 5; // only for tests
	}

	// inserting seconds in span
	document.getElementById("chronometer").innerHTML = seconds;

	// full ballons quantity
	var balloonQtd = 63;	

	// popped balloons quantity
	var popped_balloons_qnt = 0;

	createBalloons(balloonQtd);

	// print qnt of full balloons
	document.getElementById("full_balloons").innerHTML = balloonQtd;

	// print qnt of popped balloons
	document.getElementById("popped_balloons").innerHTML = popped_balloons_qnt;

	countTime(seconds + 1);
}

function countTime(sec){
	console.log("countTime()");
	console.log("sec: " + sec);
	sec--;

	if (sec < 0) {
		console.log("inside the if");
		clearTimeout(timerID);
		gameOver();
		return false;
	}

	document.getElementById("chronometer").innerHTML = sec;
	timerID = setTimeout("countTime("+sec+")", 1000);
	console.log("timerID: " + timerID);
}

function gameOver(){
	alert("Game over");
	gameRodando = false;
}

function createBalloons(qtd){
	// alert("createBalloons()");
	for (var i = 0; i < qtd; i++) {
		// alert("inside the for loop");
		var balloon = document.createElement("img");
		balloon.src = "imagens/balao_azul_pequeno.png";
		balloon.style.margin = "15px";
		balloon.id = 'b' + i;
		// alert(balloon.id);

		balloon.onclick = function(){
			tocaMusica();
			if (gameRodando) {
				// alert("it is in");
				// alert(balloon.id);
				xplode(this);
			}			
		}

		document.getElementById("cenario").appendChild(balloon);
	}
}

function xplode(elemento){
	// alert("xplodin balloon");
	var balloonID = elemento.id;

	// corrige o bug de poder clicar varias vezes no mesmo balao
	document.getElementById(balloonID).setAttribute("onclick", "");
	document.getElementById(elemento.id).src = "imagens/balao_azul_pequeno_estourado.png";

	// som da explosao do balao
	document.getElementById('balloon_explode_sound').play();

	// alert(balloonID);
	pontuacao(-1);
}

function tocaMusica(){
	document.getElementById('music_sound').play();
}

function pontuacao(acao){
	var cheios = document.getElementById("full_balloons").innerHTML;
	var furados = document.getElementById("popped_balloons").innerHTML;
	cheios = parseInt(cheios);
	furados = parseInt(furados);
	// alert(cheios);
	// alert(furados);
	cheios = cheios + acao;
	furados = furados - acao;
	document.getElementById("full_balloons").innerHTML = cheios;
	document.getElementById("popped_balloons").innerHTML = furados;

	situacaoJogo(cheios);

}

function situacaoJogo(cheios){
	if (cheios < 1) {
		alert("victory");
		pararJogo();
	}
}

function pararJogo(){
	clearTimeout(timerID);
	gameRodando = false;
}

