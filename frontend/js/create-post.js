const storedObj = localStorage.getItem('user')
const token = localStorage.getItem('token')
const user = JSON.parse(storedObj)

const profileName = document.getElementById('profile-name')
const postPreviewName = document.getElementById('post-preview-name')
profileName.textContent = `${user.firstName} ${user.lastName}`
postPreviewName.textContent = `${user.firstName} ${user.lastName}`

const inputFile = document.querySelector('.picture-input')
const picture = document.querySelector('.picture-image')
const formName = document.querySelector('#form-name')
const previewName = document.querySelector('#preview-name')
const previewPicture = document.querySelector('#preview-img')
const formDescription = document.querySelector('#form-description')
const previewDescription = document.querySelector('#preview-description')

//Preview Post
inputFile.addEventListener('change', function(e) {
    
    const inputTarget = e.target
    const file = inputTarget.files[0]
    const reader = new FileReader()
    reader.addEventListener("load", function(e) {
        const readerTarget = e.target
        const img = document.createElement('img')
        img.src = reader.result
        previewPicture.style.backgroundImage = `url(${reader.result})`
        img.classList = "picture-image"

        picture.innerHTML = ""
        picture.appendChild(img)
    });

    reader.readAsDataURL(file)

})

formName.addEventListener("keyup", () => {
    previewName.innerHTML = formName.value 
})

formDescription.addEventListener("keyup", () => {
    previewDescription.innerHTML = formDescription.value 
})

//Create Post
const requestURL = 'http://localhost:3333/posts'
const name = document.querySelector('#form-name')
const gender = document.querySelector('#genero')
const age = document.querySelector('#form-age')
const date = document.querySelector('#form-date')
const location = document.querySelector('#form-location')
const description = document.querySelector('#form-description')
const image = document.querySelector('#form-image')
const btnPost = document.querySelector('#btn-post')
const form = document.querySelector('form')
const btnOk = document.querySelector(".btn")
const card = document.querySelector(".card")



const addPost = async (post) => {

    const response = await fetch(requestURL, {
        method: 'POST',
        headers: {
            "x-acces-token": `${token}`
        },
        body: post
    })

    const data = await response.json()
    if(data) {
        card.classList.toggle("hide");
    }
    
}

btnPost.addEventListener('click', (event) => {

    event.preventDefault()
    //Criando uma instancia de FormData, para envio de arquivos para o servidor
    const post = new FormData();
    post.append('name' , name.value)
    post.append('age' , age.value)
    post.append('gender' , gender.value)
    post.append('date' , date.value)
    post.append('location' , location.value)
    post.append('description' , description.value)
    post.append('image' , image.files[0])

    addPost(post)

})

btnOk.addEventListener("click", () => {
    card.classList.toggle("hide");
    return window.location.href = "home.html";
});
