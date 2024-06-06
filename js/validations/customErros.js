export const errorTypes = [
	"valueMissing", 
	"typeMismatch", 
	"patternMismatch", 
	"tooShort", 
	"customError"
];

export const msgs = {
  "input-name": {
    valueMissing: "El campo nombre no puede estar vacío.",
    patternMismatch: "Por favor, ingrese un nombre válido.",
    tooShort: "Por favor, ingrese un nombre válido.",
  },
  "input-price": {
    valueMissing: "El campo precio no puede estar vacío.",
    patternMismatch: "Por favor, ingrese un precio válido.",
    tooShort: "Por favor, ingrese un precio válido.",
  },
  "input-image": {
    valueMissing: "El campo imagen no puede estar vacío.",
    patternMismatch: "Por favor, ingrese una url válida.",
    tooShort: "El campo url no tiene caracteres suficientes.",
  }
};
