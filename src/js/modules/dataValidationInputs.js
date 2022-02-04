function dataValidationInputs(inputsSelector, showModal) {
    const input = document.querySelector(inputsSelector);
    console.log(input);

    input.addEventListener('input', (e) => {
        if (e.target && input.value == "") {
            console.log('Хуй');
        } else {
            showModal;
            console.log('Хуй');
        }


    });
}

export default dataValidationInputs;