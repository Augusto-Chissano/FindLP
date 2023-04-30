const btnConfirm = document.querySelector("#ok");
const btnCriarConta = document.querySelector("#btn-login");


class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
}


btnConfirm.addEventListener("click", () => {
    const confirm = document.querySelector(".confirm");
    confirm.classList.toggle("hide");
});


btnCriarConta.addEventListener("click", () => {
    event.preventDefault();
});

async function getUsers() {

    const response = await fetch("http://localhost:3333/user");
    const users = await response.json();

    users.map((user) => {
        console.log(user);
    });
};

//POPUP
function ok() {
    const confirm = document.querySelector(".confirm");
    confirm.classList.toggle("hide");
}

async function addUser(username, password) {

    var user = new User(username, password);
    const response = await fetch("http://localhost:3333/user", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username: user.username,
            password: user.password
        })
    })
    const data = await response.json();

    if(data.username == user.username){
        ok();
    }
    
}

///Criando uma conta
btnCriarConta.addEventListener("click", () => {
    let username = document.querySelector("#in-email").value;
    let password = document.querySelector("#in-senha").value;

    addUser(username, password);
    //console.log(username + " " + password)

})

