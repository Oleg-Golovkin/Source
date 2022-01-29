const tabs = () => {
    function tabsDo({
        headerSliderSelector,
        tabsSelector,        
        btnIMGSelector,
        linkSelektor,
        contentSelector,
        indexTabs
    }) {
        const header = document.querySelector(headerSliderSelector),
            tabs = document.querySelectorAll(tabsSelector),
            btnIMG = document.querySelectorAll(btnIMGSelector),
            link = document.querySelectorAll(linkSelektor),
            content = document.querySelectorAll(contentSelector);

        function hideTab() {
            content.forEach(content => {
                content.classList.add('hide');
                content.classList.remove('show');
            });                        
        }

        function showTab(i = 0) {
            content[i].classList.add('show');
            content[i].classList.remove('hide');
            link[3].parentNode.classList.add('after_click');
        }
        hideTab();
        showTab();

        header.addEventListener('click', (e) => {
            const target = e.target;
            if (target && (target.matches(btnIMGSelector) ||
                    target.matches(linkSelektor))) {
                tabs.forEach((tab, i) => {
                    if (target == btnIMG[i]) {
                        hideTab();
                        showTab((+tab.getAttribute(indexTabs)));
                    }
                    if (target == link[i]) {
                        hideTab();
                        showTab((+tab.getAttribute(indexTabs)));
                        link.forEach(link => {
                            link.parentNode.classList.remove('after_click');                
                        });
                        link[i].parentNode.classList.add('after_click'); 
                    }
                });
            }
        });
    }


    tabsDo({
        headerSliderSelector: '.glazing_slider',
        tabsSelector: '.glazing_block',
        btnIMGSelector: '.glazing_block img',
        linkSelektor: '.glazing_block a',
        contentSelector: '.glazing_content',
        indexTabs: 'data-tab-slider'
    });

    tabsDo({
        headerSliderSelector: '.decoration_slider',
        tabsSelector: '.decoration_item',       
        linkSelektor: '.decoration_item a',
        contentSelector: '.tab__content',
        indexTabs: 'data-btn-tab'
    });





};


export default tabs
;