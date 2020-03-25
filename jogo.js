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
	}

	// inserting seconds in span
	document.getElementById("chronometer").innerHTML = seconds;

}