var Uscore = 0;

var highscore = 15;

var press = function() {
	console.log('test');
	Uscore++;
	document.getElementById('score').innerHTML = "Cookies: " + Uscore;
	check();

};


var check = function() {
	if (Uscore > highscore) {
		highscore = Uscore;
		document.getElementById('highhhhhscore').innerHTML = "Highscore: " + highscore;
	};
};


alert('Welcome To Bok Choi\'s Cookie Clicker. DO WUT U NEED TO DO OR THE ASIAN INVASION WILL FIND YOU!');

