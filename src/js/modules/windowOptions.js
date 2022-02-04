import writeOnlyNumbers from "./writeOnlyNumbers";
const windowOptions = (objOption) => {
    const width = document.querySelectorAll('#width'),
        height = document.querySelectorAll('#height'),
        tabsSelector = document.querySelectorAll('.balcon_icons_img'),
        typeWindows = document.querySelectorAll("#view_type"),
        checkbox = document.querySelectorAll('.checkbox'),
        checkboxCustom = document.querySelectorAll('.checkbox-custom');
    let counter = 0;




    function orderSelecktor(typeEvent, variables, counter) {
        variables.forEach((variable, i) => {
            variable.addEventListener(typeEvent, (e) => {
                if (e.target && variable.matches(".balcon_icons_img")) {
                    objOption.form = i;
                }
                if (e.target && (variable.matches("#width") ||
                        variable.matches("#height") ||
                        variable.matches("#view_type"))) {
                    objOption[variable.getAttribute('id')] = variable.value;

                }
                if (e.target && variable.matches(".checkbox")) {
                    variables.forEach((item, j) => {
                        delete objOption[checkboxCustom[j].getAttribute('id')];
                        item.checked = false;
                        if (i == j) {
                            objOption[checkboxCustom[i].getAttribute('id')] = variable.checked = true;
                        }
                    });
                }
                console.log(objOption);
               
            });
        });



    }

    writeOnlyNumbers('#width');
    writeOnlyNumbers('#height');

    orderSelecktor("input", width, counter);
    orderSelecktor("input", height, counter);
    orderSelecktor("click", tabsSelector, counter);
    orderSelecktor("click", typeWindows, counter);
    orderSelecktor("change", checkbox, counter);




};

export default windowOptions;