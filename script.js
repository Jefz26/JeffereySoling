const images = document.querySelectorAll('.img-track');
let imgSrc;

images.forEach((img) => {
    img.addEventListener('click', (e) => {
        imgSrc = e.target.src;
    });
});

let imgModal = (src) => {
    const modal = document.createElement('div');
    modal.setAttribute('class', 'modal');

    document.querySelector('.main').append(modal);
    const newImage = document.createElement("img");
    newImage.setAttribute('src', src);
    modal.append(newImage)
}
const closeBtn = document.createElement('i');
closeBtn.setAttribute('class', 'fas fa-times closeBtn');

closeBtn.onclick = () => {
    modal.remove();
};
modal.append(newImage, closeBtn);
