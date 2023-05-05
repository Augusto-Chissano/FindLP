const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const URL = "http://localhost:3333/user";
const btnLogin = document.querySelector(".login-btn");

const logar = async (email, password) => {

    const response = await fetch(`${URL}/${email}`);
    const user = await response.json();

    if (user != null) {
        if ((user.email === email) && (user.password === password)) {
            return window.location.href = "index.html";
        } else {
            emailInput.style.borderColor = "red";
            passwordInput.style.borderColor = "red";
        }
    } else {
        emailInput.style.borderColor = "red";
        passwordInput.style.borderColor = "red";
    }
}

btnLogin.addEventListener("click", (event) => {

    event.preventDefault();
    logar(emailInput.value, passwordInput.value);
});

emailInput.addEventListener("click", () => {
    emailInput.style.borderColor = "#ccc";
});

passwordInput.addEventListener("click", () => {
    passwordInput.style.borderColor = "#ccc";
});


