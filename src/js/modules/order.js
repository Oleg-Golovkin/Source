const order = () => {
    function setOrder(setOrder) {
    const parentInputs = document.querySelector(".popup_calc"),
        inputs = parentInputs.querySelectorAll("input");
                
        inputs.forEach((input, i) => {
            input.addEventListener('input', () => {
                setOrder[input.value] = i;
            });            
        });


    }
    setOrder(setOrder);

    
};

export default order;