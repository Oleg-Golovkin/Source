import postForms from "../services/post";
import writeOnlyNumbers from "./writeOnlyNumbers";

const forms = () => {

    const forms = document.querySelectorAll("form");
    
    writeOnlyNumbers('input[name="user_phone"]');
    
    forms.forEach(form => {
        postForms(form);
    });


};

export default forms;