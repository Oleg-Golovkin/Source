const forms = () => {
    function postForms() {
        const forms = document.querySelectorAll("form");

        const postForm = async function (url, request) {
            let res = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: request
            });
            return await res.json();
        };

        forms.forEach(form => {
            sendinForm(form);
        });


        function sendinForm(form) {
            form.addEventListener("submit", (e) => {
                e.preventDefault();
                const formData = new FormData(form);
                const json = {};
                formData.forEach((value, key) => {
                    json[key] = value;
                });

                postForm("http://localhost:8888/Source/src/requests", json)
                    .then(data => {
                        console.log(data);
                        // ShowThanksModal(statusMassege.ok);
                    })
                    .catch(() => {
                        // ShowThanksModal(statusMassege.error);
                    })
                    .finally(() => {
                        form.reset();
                    });

            });
        }




    }

    postForms();
};

export default forms;