const images = () => {
    const parentImages = document.querySelector(".works"),
        div = document.createElement("div"),
        img = document.createElement("img");

    div.classList.add("popup");    
    div.style.justifyContent = "center";
    div.style.alignItems = "center";
    div.append(img);
    img.style.width = "600px";
    img.style.height = "600px";  
    parentImages.append(div);


    parentImages.addEventListener("click", (e) => {
        e.preventDefault();
        const target = e.target;
        if (target && target.matches("img.preview")) {
            div.style.display = "flex";
            document.body.style.overflow = "hidden";
            const srcValue = target.parentNode.getAttribute("href");
            img.setAttribute("src", srcValue);
        }

        if (target && target.matches(".popup")) { 
            div.style.display = "none";
            document.body.style.overflow = "";          
        }
    });

};

export default images;