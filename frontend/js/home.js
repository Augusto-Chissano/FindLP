const storedObj = localStorage.getItem('user')
const token = localStorage.getItem('token')
const user = JSON.parse(storedObj)
const divPosts = document.querySelector('.posts')

const baseURL = 'http://localhost:3333/posts'

const profileName = document.getElementById('profile-name')
profileName.textContent = `${user.firstName} ${user.lastName}`

const publicar = document.querySelector(".publicar");

publicar.addEventListener("click", () => {
    window.location.href = "./post-type.html";
})

const getPosts = async () => {

    let response = await fetch(baseURL)
    let data = await response.json()
    renderPost(data) 
}

//Essa function recebe uma lista proveniente do servidor e exibe cada elemento na pagina
function renderPost(posts) {

    posts.forEach(element => {
        //main
        let post = document.createElement('div')
        let postHeader = document.createElement('div')
        let postHeaderAuthor = document.createElement('div')
        let profilePhotos = document.createElement('div')
        let postHeaderName = document.createElement('div')
        let name = document.createElement('span')
        let date = document.createElement('span')

        let postPhoto = document.createElement('div')
        let postDescription = document.createElement('div')

        postHeader.classList = 'post-header'
        postPhoto.classList = 'post-photo'
        postDescription.classList = 'post-description'
        post.classList = 'post'
        let image = `http://localhost:3333/uploads/${element.image}`
        postPhoto.style.backgroundImage = `url(${image})` 

        post.appendChild(postHeader)
        post.appendChild(postPhoto)
        post.appendChild(postDescription)  
        divPosts.appendChild(post)
    });
}

getPosts()

