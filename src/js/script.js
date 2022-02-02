import "./modules/slider";
import modal from './modules/modal';
import tabs from './modules/tabs';
import forms from "./modules/forms";
import order from "./modules/order";

window.addEventListener('DOMContentLoaded', () => {
    
    let setOrder = {};

    
    order(setOrder);
    console.log(setOrder);
    modal();
    tabs();
    forms();
});
