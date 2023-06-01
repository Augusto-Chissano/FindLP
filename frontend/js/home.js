const baseURL = 'http://localhost:3333'
const token = localStorage.getItem('token')
const user = JSON.parse(localStorage.getItem('user'))
const profileName = document.getElementById('profile-name')
const publicar = document.querySelector(".publicar")

profileName.textContent = `${user.firstName} ${user.lastName}`

publicar.addEventListener("click", () => {
    window.location.href = "./post-type.html"
})

function fetchPosts() {
    fetch(`${baseURL}/posts`, {
        headers: {
            'authorization': token
        }
    })
        .then(response => response.json())
        .then(posts => {
            console.log(posts)
            //renderPosts(tasks)
        })
        .catch(error => {
            console.error('Erro ao buscar postagens:', error)
        })
}

fetchPosts()

function renderPosts(posts) {
    const container = document.querySelector('.post-container')

    container.innerHTML = ''

    for (const post of posts) {
        const card = document.createElement('div')
        card.classList.add('post-card')

        const author = `${post.owner.firstName} ${post.owner.lasttName}`
        card.innerHTML = `
        <div class="author">
          <img src="../img/model.jpeg" alt="Imagem do autor">
          <span class="author-name">${author}</span>
        </div>
        <div class="post-info">
          <span class="post-date">${post.date.slice(0,10)}</span>
          <p class="post-description">${post.description}</p>
          <img src= "${baseURL}/uploads/${post.image}" alt="Imagem da publicação">
          <div class="post-actions">
            <button title="like" class="like-button">
              <i class="fas fa-thumbs-up"></i>
            </button>
            <button title="comment" class="comment-button">
              <i class="fas fa-comment"></i>
            </button>
            <button title="share" class="share-button">
              <i class="fas fa-share"></i>
            </button>
          </div>
        </div>
      `
        container.appendChild(card)
    }
}

/*
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
    })
}
*/

