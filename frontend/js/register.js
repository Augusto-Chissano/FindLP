const firstName = document.getElementById("firstname");
const lasttName = document.getElementById("lasttname");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("number");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confpassword");
const form = document.querySelector("#form");
const btnCriarConta = document.querySelector("#criar-conta");
const btnOk = document.querySelector(".btn");
const card = document.querySelector(".card");
const URL = "http://localhost:3333/user";

class User {
    constructor(firstName, lastName, email, phoneNumber, password, gender) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.password = password;
        this.gender = gender;
    }
}

const addUser = async (user) => {

    const response = await fetch(URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user)
    })
    const data = await response.json();

    if (data.email === user.email) {
        form.reset();
        card.classList.toggle("hide");
    }
}

btnCriarConta.addEventListener("click", (event) => {

    event.preventDefault();
    const user = new User(firstName.value, lasttName.value, email.value, phoneNumber.value, password.value, form.gender.value);

    addUser(user);

});

btnOk.addEventListener("click", () => {
    card.classList.toggle("hide");
    return window.location.href = "login.html";
});
