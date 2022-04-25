// Seleccionar Elementos:
const userInput = document.querySelector("#userInput");
const encriptBtn = document.querySelector("#btnEncriptado");
const decriptBtn = document.querySelector("#btnDesencriptado");
const imgContainer = document.querySelectorAll(".img-container");
const resultDisplay = document.querySelectorAll(".result-display");
const resultDisplayP = document.querySelectorAll(".result-display > p");
const resultDisplayBtn = document.querySelectorAll(".result-display > button");

// Letras
const customA = "ai";
const customE = "enter";
const customI = "imes";
const customO = "ober";
const customU = "ufat";
const remaker = {
	ai: "a",
	enter: "e",
	imes: "i",
	ober: "o",
	ufat: "u",
};

// Utils:
const replaceVowels = (myString) => {
	return myString
		.map((char) => {
			switch (char) {
				case "a":
					char = customA;
					break;
				case "e":
					char = customE;
					break;
				case "i":
					char = customI;
					break;
				case "o":
					char = customO;
					break;
				case "u":
					char = customU;
					break;
				default:
					break;
			}
			return char;
		})
		.join("");
};

const remakeVowels = (myString) => {
	myString = myString.replace(/ai|enter|imes|ober|ufat/gi, function (matched) {
		return remaker[matched];
	});
	return myString;
};

// === Main Functions ===

const encriptado = () => {
	// Toma Value:
	var myInput = userInput.value.split("");

	// Encriptado:
	let response = replaceVowels(myInput);

	// Display Resultado:
	imgContainer.forEach((i) => {
		i.style.display = "none";
	});
	resultDisplay.forEach((i) => {
		i.style.display = "block";
		i.firstElementChild.innerHTML = response;
	});
};

const desencriptado = () => {
	// Toma Value:
	let myInput = userInput.value;

	// Desencriptado:
	let response = remakeVowels(myInput);

	// Display Resultado:
	imgContainer.forEach((i) => {
		i.style.display = "none";
	});
	resultDisplay.forEach((i) => {
		i.style.display = "block";
		i.firstElementChild.innerHTML = response;
	});
};

// Events:
encriptBtn.addEventListener("click", encriptado);
decriptBtn.addEventListener("click", desencriptado);
