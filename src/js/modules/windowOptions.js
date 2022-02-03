import writeOnlyNumbers from "./writeOnlyNumbers";
const windowOptions = (objOption) => {
    const width = document.querySelectorAll('#width'),
        height = document.querySelectorAll('#height'),
        tabsSelector = document.querySelectorAll('.balcon_icons_img'),
        formControl = document.querySelectorAll(".form-control"),
        checkbox = document.querySelectorAll('.checkbox'),
        checkboxCustom = document.querySelectorAll('.checkbox-custom');

    

    
        function orderSelecktor(typeEvent, variables) {
        variables.forEach((variable, i) => {
            variable.addEventListener(typeEvent, (e) => { 
                if (e.target && variable.matches(".checkbox")) {
                    variables.forEach((item, j) => {
                        delete objOption[checkboxCustom[j].getAttribute('id')];
                        item.checked = false;
                        if (i == j) {
                            objOption[checkboxCustom[i].getAttribute('id')] = variable.checked = true;
                        }
                    });
                }
                if (e.target && (variable.matches(".form-control") ||
                        variable.matches("#view_type"))) {
                    objOption[variable.getAttribute('id')] = variable.value;
                }
                if (e.target && variable.matches(".balcon_icons_img")) {
                    objOption.form = i;
                }
            });
        });


    }

    writeOnlyNumbers('#width');
    writeOnlyNumbers('#height');

    orderSelecktor("input", width);
    orderSelecktor("input", height);
    orderSelecktor("click", tabsSelector);
    orderSelecktor("click", formControl);
    orderSelecktor("change", checkbox);




};

export default windowOptions;