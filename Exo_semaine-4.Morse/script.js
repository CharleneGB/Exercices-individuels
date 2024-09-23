// Etape 1

function getLatincharacterList(text) {
    return text.split('')
}

console.log(getLatincharacterList("Hello,world"))

const latinToMorse = {
	'A':'.-',
	'B':'-...',
	'C':'-.-.',
	'D':'-..',
	'E':'.',
	'F':'..-.',
	'G':'--.',
	'H':'....',
	'I':'..',
	'J':'.---',
	'K':'-.-',
	'L':'.-..',
	'M':'--',
	'N':'-.',
	'O':'---',
	'P':'.--.',
	'Q':'--.-',
	'R':'.-.',
	'S':'...',
	'T':'-',
	'U':'..-',
	'V':'...-',
	'W':'.--',
	'X':'-..-',
	'Y':'-.--',
	'Z':'--..'
}

//Etape 2



function translateLatinCharacter(letter) {
let latinCharacter = letter.toUpperCase()
return latinToMorse[latinCharacter]
}

console.log(translateLatinCharacter("A"))

//Etape 3

function encode(latinText) {
   let morse ="";
   let latinSplit = getLatincharacterList(latinText);
   for (let index = 0; index < latinSplit.length; index++){
    let character = translateLatinCharacter(latinSplit[index])
	morse += character + " "
	}
	return morse
}

console.log(encode("Hello world"))