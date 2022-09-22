import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('div.gallery');
galleryContainer.insertAdjacentHTML("beforeend", createGalleryCard(galleryItems));

function createGalleryCard(obj = {}) {
    let galleryCards = '';
    obj.forEach(({preview, original, description}) => 
    {
    const galleryCard= `
<div class="gallery__item">
<a class="gallery__link" href="${original}">
<img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" />
</a>
</div>`;
galleryCards += galleryCard;
});
return galleryCards;
}

galleryContainer.addEventListener('click', showImage);


function showImage (event) {
    event.preventDefault();
    const selectedImage = event.target.dataset.source;
    const instance = basicLightbox.create(
        `<img class="gallery__image" src="${selectedImage}" />`, {closable: true}
        );
    instance.show();

    document.addEventListener('keydown', closeOnEscape);
    function closeOnEscape (event) {
        if (event.key === "Escape") {    
        instance.close();
        document.removeEventListener('keydown', closeOnEscape);
        }
    }
}
