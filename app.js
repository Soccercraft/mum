var Uscore = 0;
var mutiplier = 1;

var highscore = 15;
var press = function pressed() {
	Uscore=Uscore+(1*mutiplier);
	document.getElementById('score').innerHTML = "Cookies: " + Uscore;
	check();

};

if(Uscore>99) {
	pressed();
}


var check = function() {
	if (Uscore === 1000){
		alert("You Won!");
		document.getElementById('win').innerHTML = 'YOU WON!';
	} else if (Uscore === 150) {
	mutiplier=4;
	Uscore=Uscore+(1*mutiplier);
	document.getElementById('score').innerHTML = "Cookies: " + Uscore;
	} else if (Uscore === 100) {
	mutiplier=3;
	Uscore=Uscore+(1*mutiplier);
	document.getElementById('score').innerHTML = "Cookies: " + Uscore;
	} else if (Uscore === 50) {
	mutiplier=2;
	Uscore=Uscore+(1*mutiplier);
	document.getElementById('score').innerHTML = "Cookies: " + Uscore;
	} else if (Uscore > highscore) {
		highscore = Uscore;
		document.getElementById('highhhhhscore').innerHTML = "Highscore: " + highscore;
	}
};

function reset () {
location.reload();
}


alert('Welcome To Bok Choi\'s Cookie Clicker. DO WUT U NEED TO DO OR THE ASIAN INVASION WILL FIND YOU!');

