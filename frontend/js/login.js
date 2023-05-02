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

function onSignIn(googleUser) {
    // Obtenha as informações do usuário
    var profile = googleUser.getBasicProfile();
    console.log("ID: " + profile.getId()); // Não confie em IDs de usuário enviados para o seu backend!
    console.log("Nome: " + profile.getName());
    console.log("Imagem: " + profile.getImageUrl());
    console.log("Email: " + profile.getEmail()); // Este escopo requer a permissão 'email'
  }
  