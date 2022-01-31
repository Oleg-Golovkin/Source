import postForms from "../services/post";

const forms = () => {
    
        const forms = document.querySelectorAll("form"),
            inputs = document.querySelectorAll('input[name="user_phone"]');

        inputs.forEach(input => {
            input.addEventListener("input", () => {
                input.value = input.value.replace(/\D/, "");
            });
        });
        
        forms.forEach(form => {
            postForms(form);
        }); 
        
       
};

export default forms;