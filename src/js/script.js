import "./modules/slider";
import modal from './modules/modal';
import tabs from './modules/tabs';
import forms from "./modules/forms";
import windowOptions from "./modules/windowOptions";

window.addEventListener('DOMContentLoaded', () => {

    let setWindowOptions = {};
    windowOptions(setWindowOptions);
    
    modal();
    tabs();
    forms();
});