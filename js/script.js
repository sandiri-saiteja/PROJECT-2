// console.log("JavaScript Loaded");

/*==========================================
        CATALOG SEARCH
==========================================*/


const searchBox = document.getElementById("searchBox");

if (searchBox) {

    searchBox.addEventListener("input", function () {

        const search = this.value.toLowerCase();

        const cards = document.querySelectorAll(".catalog-grid .card");

        cards.forEach(function(card){

            const text = card.innerText.toLowerCase();

            if(text.includes(search)){

                card.style.display = "";

            }
            else{

                card.style.display = "none";

            }

        });

    });

}

/*==========================================
    REGISTRATION VALIDATION
==========================================*/

const registerForm = document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", function (event) {

        event.preventDefault();
        const name =
            document.getElementById("name").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const password =
            document.getElementById("password").value;

        if (
            name === "" ||
            email === "" ||
            password === ""
        ) {

            alert("Please fill in all fields.");
            // event.preventDefault();

            return;

        }

        if (password.length < 6) {

            alert("Password must contain at least 6 characters.");

            event.preventDefault();

            return;

        }

        alert("Registration Successful!");

        setTimeout(function () {

            window.location.href = "catalog.html";

        }, 1000);

            });

}

/*==========================================
        LOGIN VALIDATION
==========================================*/

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const email =
            document.getElementById("loginEmail").value.trim();

        const password =
            document.getElementById("loginPassword").value;

        if (
            email === "" ||
            password === ""
        ) {

            alert("Please enter your email and password.");

            // event.preventDefault();

            return;

        }

        alert("Login Successful!");

        setTimeout(function () {

            window.location.href = "catalog.html";

        }, 1000);

    });

}