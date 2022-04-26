// Seleccionar Elementos:
const userInput = document.querySelector("#userInput");
const encriptBtn = document.querySelector("#btnEncriptado");
const decriptBtn = document.querySelector("#btnDesencriptado");
const imgContainer = document.querySelectorAll(".img-container");
const resultDisplay = document.querySelectorAll(".result-display");
const resultDisplayP = document.querySelectorAll(".result-display > p");
const resultDisplayBtn = document.querySelectorAll(".result-display > button");
const restartBtn = document.querySelectorAll(".restartBtn");

// Reemplazos:
const encripter = {
	a: "ai",
	e: "enter",
	i: "imes",
	o: "ober",
	u: "ufat",
};
const remaker = {
	ai: "a",
	enter: "e",
	imes: "i",
	ober: "o",
	ufat: "u",
};

// Utils:
const replaceVowels = (myString) => {
	myString = myString.replace(/a|e|i|o|u/gi, function (matched) {
		return encripter[matched];
	});
	return myString;
};

const remakeVowels = (myString) => {
	myString = myString.replace(/ai|enter|imes|ober|ufat/gi, function (matched) {
		return remaker[matched];
	});
	return myString;
};

// === Main Functions ===

const encriptado = () => {
	var myInput = userInput.value;
	let response = replaceVowels(myInput);

	imgContainer.forEach((i) => {
		i.style.display = "none";
	});
	resultDisplay.forEach((i) => {
		i.style.display = "block";
		i.firstElementChild.innerHTML = response;
	});
};

const desencriptado = () => {
	let myInput = userInput.value;
	let response = remakeVowels(myInput);

	imgContainer.forEach((i) => {
		i.style.display = "none";
	});
	resultDisplay.forEach((i) => {
		i.style.display = "block";
		i.firstElementChild.innerHTML = response;
	});
};

const clearBoard = () => {
	window.location.reload();
};
// Events:
encriptBtn.addEventListener("click", encriptado);
decriptBtn.addEventListener("click", desencriptado);
restartBtn.forEach((i) => {
	i.addEventListener("click", clearBoard);
});
