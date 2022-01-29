const tabs = () => {
    function tabsDo({
        btnParentSelector,
        btnIMGSelector,
        btnLinkSelector,
        tabsSelector,
        indexAttribute,
        activeClass
    }) {
        const btnParent = document.querySelectorAll(btnParentSelector),
            btnIMG = document.querySelectorAll(btnIMGSelector),
            btnLink = document.querySelectorAll(btnLinkSelector),
            tabs = document.querySelectorAll(tabsSelector);
        //  btn = document.querySelectorAll('.glazing_block');

        // console.log(btnLink);

        function showTab(tabs) {
            tabs.classList.add('show');
            tabs.classList.remove('hide');

        }

        function hideTab(tabs) {
            tabs.classList.add('hide');
            tabs.classList.remove('show');

        }


        btnParent.forEach((btn, i) => {
            btn.addEventListener('click', (e) => {
                if (e.target && e.target == btnIMG[i]) {
                    tabs.forEach((tab, num) => {
                        hideTab(tab);
                        if (num === +btn.getAttribute(indexAttribute)) {
                            showTab(tab);
                        }
                    });
                }
                if (e.target && e.target == btnLink[i]) {
                    tabs.forEach((tab, num) => {
                        hideTab(tab);
                        if (num === +btn.getAttribute(indexAttribute)) {
                            showTab(tab);
                        }
                    });
                    
                }
            });
        });
    }

    tabsDo({
        btnParentSelector: '.glazing_block',
        btnIMGSelector: '.glazing_block img',
        btnLinkSelector: '.slider-window__link',
        tabsSelector: '.glazing_content',
        indexAttribute: 'data-btn-slider'
    });

    tabsDo({
        btnParentSelector: '.decoration_item',
        btnLinkSelector: '.decoration_item div a',
        tabsSelector: '.tab__content',
        indexAttribute: 'data-btn-tab'
    });


};


export {
    tabs
};