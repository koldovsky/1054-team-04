const galleryItemsObject = document.querySelector('.gallery-section-items');

const items = [
    {
        img: 'beef',
        alt: 'Beef'
    },
    {
        img: 'cooking-process',
        alt: 'cooking process'
    },
    {
        img: 'dessert',
        alt: 'dessert'
    },
    {
        img: 'cooking-time',
        alt: 'cooking time'
    },
    {
        img: 'friendly-lunch',
        alt: 'friendly lunch'
    },
    {
        img: 'fruit-salad',
        alt: 'fruit salad'
    },
    {
        img: 'serving',
        alt: 'serving' 
    },
    {
        img: 'soup',
        alt: 'soup'  
    },
]

let currentItem = 0;


function renderGallery() {
    galleryItemsObject.innerHTML += 
    `<img src="img/gallery/${items[currentItem].img}.jpg" alt="${items[currentItem].alt}">`;
}

function nextItem() {
    currentItem = currentItem >= items.length ? 0 : currentItem + 1;
}

function prevItem() {
    currentItem = currentItem < 0 ? items.length - 1 : currentItem - 1;
}

renderGallery();
const galleryButtonPrev = document.querySelector('.gallery-button-prev');
const galleryButtonNext = document.querySelector('.gallery-button-next');
galleryButtonNext.addEventListener('click', nextItem);
galleryButtonPrev.addEventListener('click', prevItem);