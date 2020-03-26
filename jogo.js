// variable that stores the timeout() function
var timerID = null;

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
		seconds = 121;
	}
	else if (gameLevel == 2) {
		seconds = 61;
	}
	else if (gameLevel == 3) {
		// seconds = 31;
		seconds = 6; // only for tests
	}

	// inserting seconds in span
	document.getElementById("chronometer").innerHTML = seconds;

	// full ballons quantity
	var balloonQtd = 80;	

	// popped balloons quantity
	var popped_balloons_qnt = 0;

	createBalloons(balloonQtd);

	// print qnt of full balloons
	document.getElementById("full_balloons").innerHTML = balloonQtd;

	// print qnt of popped balloons
	document.getElementById("popped_balloons").innerHTML = popped_balloons_qnt;

	countTime(seconds);
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
}

function createBalloons(qtd){
	// alert("createBalloons()");
	for (var i = 0; i < qtd; i++) {
		// alert("inside the for loop");
		var balloon = document.createElement("img");
		balloon.src = "imagens/balao_azul_pequeno.png";
		balloon.style.margin = "10px";
		document.getElementById("cenario").appendChild(balloon);
	}
}