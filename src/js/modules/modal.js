const modal = () => {
    // 1. Функции
    // 1.1. Скрытие, показ модального окна 
    function actionModal({
        selectorButton,
        /* кнопка, открываюая мод. окно */
        selectorModal,
        /* само модальное окно */
        selectorClose,
        /* кнопка, закрывающая модальное окно */
        selectorActive,
        /* класс, присваивающий display: block; */
    }) {
        const button = document.querySelectorAll(selectorButton),
            modal = document.querySelector(selectorModal);
        close = document.querySelectorAll(selectorClose);

        // Прописать класс показывающий и скрывающий модальное окно
        function closeModal() {
            modal.classList.remove(selectorActive);
            // Окно не прокручивается
            document.body.style.overflow = "hidden";
        }

        function showModal() {
            modal.classList.add(selectorActive);
            document.body.style.overflow = "";
          
        }
        // Событие на несколько кнопок
        button.forEach(button => {
            button.addEventListener("click", (e) => {
                e.preventDefault();
                if (e.target) {
                    showModal()
                }
            })
        })

        // Клик на крестики - окно исчезает
        close.forEach(close => {
            close.addEventListener("click", (e) => {
                closeModal()
            })
        });

        // Клик на подложку - окно исчезает
        modal.addEventListener("click", (e) => {
            // Если кликаем только на подложку,
            // а не на само модальное окно
            if (e.target == modal) {
                closeModal()
            }
        })

        // Закрытие окна на клавишу 
        document.addEventListener('keydown', (e) => {
            if (e.code === "Escape" && modal.classList.contains(selectorActive)) {
                closeModal()
            }
        });
    };

    //1.2.Через время открываются не все, а конкретное окно
    function timerShowModal({selectorModal, time, selectorActive}) {
        setTimeout(function () {
            document.querySelector(selectorModal).classList.add(selectorActive);
        }, time);
    }

    // 2. Вызовы функций
    // 2.1. Вызов открытия конкретного окна через время
    timerShowModal({
        selectorModal: ".popup_engineer", 
        time: 3000, 
        selectorActive: 'popup__active'})

    // 2.2. Вызов одного модального окна при нажатии на одну
    // из кнопок 
    actionModal({
        selectorButton: ".popup_engineer_btn",
        /* кнопка, открываюая мод. окно */
        selectorModal: '.popup_engineer',
        /* само модальное окно */
        selectorClose: '.popup_close',
        /* кнопка, закрывающая модальное окно */
        selectorActive: 'popup__active' /* класс (без точки), присваивающий display: block; */
    })

    // 2.3. Вызов другого модального окна при нажатии на одну
    // из кнопок
    actionModal({
        selectorButton: ".phone_link",
        selectorModal: '.popup',
        selectorClose: '.popup_close',
        selectorActive: 'popup__active'
    })
}

export default modal