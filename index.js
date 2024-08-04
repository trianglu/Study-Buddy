document.addEventListener("DOMContentLoaded", function() {
    const login = document.getElementById('log_in');
    const myPopup = document.getElementById('myPopup');
    const closePopup = document.getElementById('closePopup');

    async function getData() {
        const input = document.getElementById('email');
        const value = input.value;

        if (document.getElementById("email").value == "") {
            myPopup.classList.add("show");
            return;
        }

        const url = "https://disify.com/api/email/" + value;
        const response = await fetch(url);
        const results = await response.json();

        if (results["format"] == false) {
            myPopup.classList.add("show");
            return;
        } else {
            successful.classList.add("show");
            return;
        }
    }

    login.addEventListener("click", function() {
        getData();
    });

    closePopup.addEventListener("click", function () {
        myPopup.classList.remove("show");
    });

    closePopupOk.addEventListener("click", function () {
        successful.classList.remove("show");
    });
});