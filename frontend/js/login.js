const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const URL = "http://localhost:3333/login";
const btnLogin = document.querySelector(".login-btn");

const logar = async (email, password) => {

    const response = await fetch(URL, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email, password: password })
    });

    const { user, token } = await response.json();

    if (user) {
        localStorage.setItem('token', token)
        localStorage.setItem('user', JSON.stringify(user))
        
        return window.location.href = 'home.html'
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


