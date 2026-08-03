/* ===========================================
   EcoEnergy - script.js
   =========================================== */

// ======================
// REGISTER
// ======================

const registerForm = document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = document.getElementById("fullName").value.trim();
        const email = document.getElementById("email").value.trim();
        const mobile = document.getElementById("mobile").value.trim();
        const city = document.getElementById("city").value.trim();

        const password = document.getElementById("password").value;
        const confirm = document.getElementById("confirmPassword").value;

        if (password !== confirm) {

            alert("Passwords do not match.");

            return;
        }

        const user = {

            name,
            email,
            mobile,
            city,
            password

        };

        localStorage.setItem("ecoUser", JSON.stringify(user));

        alert("Registration Successful!");

        window.location.href = "login.html";

    });

}

// ======================
// LOGIN
// ======================

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const email = document.getElementById("loginEmail").value.trim();
        const password = document.getElementById("loginPassword").value;

        const storedUser = JSON.parse(localStorage.getItem("ecoUser"));

        if (!storedUser) {

            alert("Please register first.");

            window.location.href = "register.html";

            return;

        }

        if (

            email === storedUser.email &&
            password === storedUser.password

        ) {

            alert("Login Successful!");

            window.location.href = "catalog.html";

        }

        else {

            alert("Invalid Email or Password.");

        }

    });

}

// ======================
// CATALOG SEARCH
// ======================

const searchBox = document.getElementById("searchBox");

if (searchBox) {

    searchBox.addEventListener("keyup", function () {

        const value = this.value.toLowerCase();

        const cards = document.querySelectorAll(".card");

        cards.forEach(card => {

            const text = card.innerText.toLowerCase();

            if (text.includes(value)) {

                card.parentElement.style.display = "";

            }

            else {

                card.parentElement.style.display = "none";

            }

        });

    });

}

// ======================
// USAGE FORM
// ======================

const usageForm = document.getElementById("usageForm");

if (usageForm) {

    const usageTable = document.getElementById("usageTable");

    let usageData = JSON.parse(localStorage.getItem("usageData")) || [];

    function loadUsage() {

        usageTable.innerHTML = "";

        usageData.forEach(item => {

            usageTable.innerHTML += `

                <tr>

                    <td>${item.date}</td>

                    <td>${item.source}</td>

                    <td>${item.units} kWh</td>

                    <td>

                        <span class="badge bg-success">

                            Saved

                        </span>

                    </td>

                </tr>

            `;

        });

    }

    loadUsage();

    usageForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const source = document.getElementById("energySource").value;

        const units = document.getElementById("units").value;

        const date = document.getElementById("usageDate").value;

        const usage = {

            source,
            units,
            date

        };

        usageData.push(usage);

        localStorage.setItem(

            "usageData",

            JSON.stringify(usageData)

        );

        loadUsage();

        usageForm.reset();

        alert("Usage Added Successfully!");

    });

}

// ======================
// LOGOUT (Optional)
// ======================

function logout() {

    alert("Logged Out Successfully.");

    window.location.href = "login.html";

}