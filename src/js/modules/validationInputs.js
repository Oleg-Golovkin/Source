
function writeOnlyNumbers(inputSelector) {
    const numInputs = document.querySelectorAll(inputSelector);
    numInputs.forEach(numInput => {
        numInput.addEventListener("input", () => {
            numInput.value = numInput.value.replace(/\D/, "");
        });
    });
}

function clearInputs(inputSelector) {
    const numInputs = document.querySelectorAll(inputSelector);
    numInputs.forEach(numInput => {
        numInput.value = "";
    });    
}

export {writeOnlyNumbers};
export {clearInputs};


