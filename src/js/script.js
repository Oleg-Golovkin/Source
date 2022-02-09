import "./modules/slider";
import "./modules/phoneNumberMask";
import "./modules/timer";
import modal from './modules/modal';
import tabs from './modules/tabs';
import forms from "./modules/forms";
import images from "./modules/images";
import widthScroll from "./modules/widthScroll";


window.addEventListener('DOMContentLoaded', () => {    
    modal();
    tabs();
    forms();
    images();
    widthScroll();
});