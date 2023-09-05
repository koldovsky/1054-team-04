const features = [
    {
        id: 1,
        name: 'Exceptional Quality of Food',
        about: 'Shrimps with lemon',
        description: 'We take pride in offering our guests the highest quality of ingredients sourced from local farms and markets.',
        image: 'img/features/quality-of-food.png',
    },
    {
        id: 2,
        name: 'Varied Menu Selection',
        about: 'Restaurant menu',
        description: 'Our menu features a wide selection of dishes to suit every taste and preference. We have something for everyone.',
        image: 'img/features/varied-menu-selection.png',
    },
    {
        id: 3,
        name: 'Impeccable Service',
        about: 'Cocktail with ice, mint and strawberries',
        description: 'Our staff is trained to provide attentive and personalized service to each and every guest, ensuring a memorable dining experience.',
        image: 'img/features/impeccable-service.png',
    },
];

renderFeatures(features);

function renderFeatures(features) {
    const featuresContainer = document.querySelector('.flex-container');
    featuresContainer.innerHTML = '';
    for (const feature of features) {
        featuresContainer.innerHTML += 
            `<div class="features-section__benefits-block"> 
                <div class="features-section__image"> 
                    <img src="${feature.image}" alt="${feature.about}" class="features-section__image-inner"> 
                </div>
                 <h4 class="features-section__subtitle-block">${feature.name}</h4> 
                <div class="features-section__description"> 
                    <span class="features-section__image-line" aria-hidden="true"> 
                    </span>
                </div>
                <p class="features-section__text">${feature.description}</p>
            </div>`;
    }
}