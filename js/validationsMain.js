import { errorTypes, msgs } from "./validations/customErros.js";
import isValidImageUrl from "./validations/validate-image.js";
import isValidName from "./validations/validate-name.js";
import isValidPrice from "./validations/validate-price.js";

const inputs = document.querySelectorAll("[required]");

inputs.forEach((input) => {
    input.addEventListener("blur", () => checkInput(input));
});

function checkInput(input) {
    let errorMsg = "";
	input.setCustomValidity("");


	if (input.name === "input-name" && input.value.length >= 3) {
        const isValid = isValidName(input);
        if (!isValid) {
            errorMsg = msgs[input.name]?.patternMismatch;
        }
    }

	if (input.name === "input-price" && input.value.length >= 1) {
        const isValid = isValidPrice(input);
        if (!isValid) {
            errorMsg = msgs[input.name]?.patternMismatch;
        }
    }

    if (input.name === "input-image" && input.value.length >= 10) {
        const isValid = isValidImageUrl(input);
        if (!isValid) {
            errorMsg = msgs[input.name]?.patternMismatch;
        }
    }

    errorTypes.forEach((error) => {
        if (input.validity[error]) {
            const message = msgs[input.name]?.[error];
            if (message) {
                errorMsg += message + "\n";
            }
        }
    });

    const spanError = input.parentNode.querySelector(".error-msg");
    const validateInputCheck = input.checkValidity();

    if (!validateInputCheck) {
        spanError.textContent = errorMsg.trim(); // Eliminar espacios en blanco al final
    } else {
        spanError.textContent = "";
    }
}
