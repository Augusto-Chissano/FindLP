const inputFile = document.querySelector('.picture-input');
const picture = document.querySelector('.picture-image');
const formName = document.querySelector('#form-name');
const previewName = document.querySelector('#preview-name');
const previewPicture = document.querySelector('#preview-img');
const formDescription = document.querySelector('#form-description');
const previewDescription = document.querySelector('#preview-description');

console.log(previewPicture);

inputFile.addEventListener('change', function(e) {
    
    const inputTarget = e.target;
    const file = inputTarget.files[0];
    const reader = new FileReader();
    reader.addEventListener("load", function(e) {
        const readerTarget = e.target;
        const img = document.createElement('img');
        img.src = reader.result;
        previewPicture.style.backgroundImage = `url(${reader.result})`;
        img.classList = "picture-image";

        picture.innerHTML = "";
        picture.appendChild(img);
    });

    reader.readAsDataURL(file);

});

formName.addEventListener("keyup", () => {
    previewName.innerHTML = formName.value; 
});

formDescription.addEventListener("keyup", () => {
    previewDescription.innerHTML = formDescription.value; 
});