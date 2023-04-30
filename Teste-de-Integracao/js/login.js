const URL = "http://localhost:3333/user";
const campo = document.querySelector("#in-email");

async function getUser(username) {

    const response = await fetch(`${URL}/${username}`);
    const user = await response.json();

    if (user != null) {
        if (username == user.username) {
            return window.location.replace("http://127.0.0.1:5500/home.html");
        }
    } else {
        console.log("hello");
        campo.style.borderColor = "red";
    }

}

const btnLogin = document.querySelector("#btn-login");
/*
btnLogin.addEventListener("click", () => {
    event.preventDefault();
    let username = document.querySelector("#in-email").value;

   // getUser(username);
})*/

fetch("http://localhost:3333/user/Gustavo").then((response) => response.json()).then((data) => console.log(data));





