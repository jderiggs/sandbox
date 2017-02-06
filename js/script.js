document.getElementById("input");

function countWords(){
	character = document.getElementById("input").value;
	document.getElementById("word").value = character.split('').length;
}

check.addEventListener("click", countWords, false);


