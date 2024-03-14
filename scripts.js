const convertForm = document.getElementById('convert-form');
// Constantes para elementos de To Morse
const textToMorse = document.getElementById('text-toMorse');
const buttonToMorse = document.getElementById('button-toMorse');
const labelToMorse = document.getElementById('label-toMorse');
// Constantes para elementos de To Text
const textToText = document.getElementById('text-toText');
const buttonToText = document.getElementById('button-toText');
const labelToText = document.getElementById('label-toText');

const morseCode = {
    "A": ".-", "B": "-...", "C": "-.-.", "CH": "----", "D": "-..", "E": ".",
    "F": "..-.", "G": "--.", "H": "....", "I": "..", "J": ".---", "K": "-.-",
    "L": ".-..", "M": "--", "N": "-.", "Ñ": "--.--", "O": "---", "P": ".--.",
    "Q": "--.-", "R": ".-.", "S": "...", "T": "-", "U": "..-", "V": "...-",
    "W": ".--", "X": "-..-", "Y": "-.--", "Z": "--..", "0": "-----", "1": ".----",
    "2": "..---", "3": "...--", "4": "....-", "5": ".....", "6": "-....", "7": "--...",
    "8": "---..", "9": "----.", ".": ".-.-.-", ",": "--..--", "?": "..--..", '"': ".-..-."
};

// Evento de click para el botón to Morse
buttonToMorse.addEventListener('click', function() {
    const toMorseTextArea = textToMorse.value;
    const morseResult = toMorse(toMorseTextArea);
    labelToMorse.textContent = morseResult;
});

// Función que convierte la cadena a mayúsculas sin tildes
function normalizeText(string) {
    return string.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase().trim();
}

// Función que convierte el texto a morse
function toMorse(toMorseTextArea) { 
    const normalizedText = normalizeText(toMorseTextArea);
    let phraseMorse = "";

    for (let i = 0; i < normalizedText.length; i++) {
        const currentChar = normalizedText[i];
        
        if (currentChar === " ") {
            phraseMorse += "(...) "; // Agregar representación de espacios
        } else if (currentChar in morseCode) {
            phraseMorse += morseCode[currentChar] + " ";
        }
    }

    return phraseMorse.trim();
}





buttonToText.addEventListener('click', function() {
    const toTextTextArea = textToText.value;
    const textResult = toText(toTextTextArea);
    labelToText.textContent = textResult;
});

// Función que convierte el morse a texto
function toText(toTextTextArea) { 
    const morseValues = Object.values(morseCode);
    const morseKeys = Object.keys(morseCode);
    const wordList = toTextTextArea.split(" ");
    let phraseNaturalText = "";
    
    for (let word of wordList) {
        word = word.trim(); // Eliminar espacios en blanco adicionales
        
        if (morseValues.includes(word)) {
            const index = morseValues.indexOf(word);
            const character = morseKeys[index];
            phraseNaturalText += character;
        } else if (word === "") {
            phraseNaturalText += " ";
        }
    }
    
    return phraseNaturalText;
}

// Verificar si la frase contiene caracteres Morse
if (!/[-.]/.test(phrase)) {
    toMorse(phrase);
} else {
    console.log(toNaturalText(phrase));
}