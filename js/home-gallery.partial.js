const items = [
    '<div><img src="img/gallery/beef.jpg" alt="Beef"></div>',
    '<div><img src="img/gallery/cooking-process.jpg" alt="cooking process"></div>',
    '<div><img src="img/gallery/dessert.jpg" alt="dessert"></div>',
    '<div><img src="img/gallery/cooking-time.jpg" alt="cooking time"></div>',
    '<div><img src="img/gallery/friendly-lunch.jpg" alt="friendly lunch"></div>',
    '<div><img src="img/gallery/fruit-salad.jpg" alt="fruit salad"></div>',
    '<div><img src="img/gallery/serving.jpg" alt="serving"></div>',
    '<div><img src="img/gallery/soup.jpg" alt="soup"></div>',
]

let currentItem = 0;

const itemConteiner = document.querySelector('.gallery-section-items');

function renderItem () {
    itemConteiner.innerHTML = items[currentItem];
    if (window.matchMedia('(min-width: 268px)').matches){
        let secondItem = currentItem + 1 >= items.length ? 0 : currentItem + 1;
        itemConteiner.innerHTML += items[secondItem];
        if (window.matchMedia('(min-width: 768px)').matches) {
            let thirdItem = secondItem + 1 >= items.length ? 0 : secondItem + 1;
            itemConteiner.innerHTML += items[thirdItem];
            thirdItem = thirdItem + 1 >= items.length ? 0 : thirdItem + 1;
            itemConteiner.innerHTML += items[thirdItem];
            if (window.matchMedia('(min-width: 992px)').matches){
                let fourthItem = thirdItem + 1 >= items.length ? 0 : thirdItem + 1;
                itemConteiner.innerHTML += items[fourthItem];
                fourthItem = fourthItem + 1 >= items.length ? 0 : fourthItem + 1;
                itemConteiner.innerHTML += items[fourthItem];
                fourthItem = fourthItem + 1 >= items.length ? 0 : fourthItem + 1;
                itemConteiner.innerHTML += items[fourthItem]; 
            }
        }
    }
}

function nextItem() {
    currentItem = currentItem + 1 >= items.length ? 0 : currentItem + 1;
    renderItem();
}

renderItem();

const nextButton = document.querySelector('.gallery-button-next');
nextButton.addEventListener('click', nextItem);

function prevItem() {
    currentItem = currentItem - 1 < 0 ? items.length - 1 : currentItem - 1;
    renderItem();
}
const prevButton = document.querySelector('.gallery-button-prev');
prevButton.addEventListener('click', prevItem);

window.addEventListener('resize', renderItem);