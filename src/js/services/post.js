function postForms(form) {
    
    const message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    };

    const post = async function (url, request) {
        let res = await fetch(url, {
            method: "POST",
            body: request
        });
        return await res.text();
    };

    // 1. На каждую форму вешаем обработчик события.
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const formData = new FormData(form);

        let statusMessage = document.createElement('div');
        statusMessage.classList.add('status');
        form.appendChild(statusMessage);
    // Запуск фукнции post    
        post("assets/server.php", formData)
            .then(data => {
                console.log(data);
                statusMessage.textContent = message.success;            })
            .catch(() => {
                console.log('хуй');
                statusMessage.textContent = message.failure;
            })
            .finally(() => {
                form.reset();
            });
    });
}

export default postForms;