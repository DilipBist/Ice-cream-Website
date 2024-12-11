import { clientReview, followImages, iceCream, IcecremCategories } from "./data.js";

// slider content showing dynamically
const swiperWrapper = document.querySelector('.swiper-wrapper');
const swiperWrapper1 = document.querySelector('.swiper-wrapper1');

const favorites = iceCream.filter(item => item.id <= 7);
const bestSeller = iceCream.filter(item => item.id > 7);

// Select popup elements
const popupOverlay = document.getElementById('popup-overlay');
const popup = document.getElementById('popup');

// Function to add cards and attach popup event
function addCardsToSlider(items, wrapper) {
    items.forEach((item) => {
        const slide = document.createElement('div');
        slide.classList.add('swiper-slide');

        slide.innerHTML = `
            <div class="ice_card ${item.id > 7 ? 'ice_cardBg2' : ''}">
                <img src="${item.image}" alt="${item.name}">
                <p class="name">${item.name}</p>
                <p class="description">${item.description}</p>
            </div>
        `;

        wrapper.appendChild(slide);

        // Attach click event to show popup
        slide.querySelector('.ice_card').addEventListener('click', () => {
            showPopup(item);
        });
    });
}

// Add favorite items
addCardsToSlider(favorites, swiperWrapper);

// Add bestseller items
addCardsToSlider(bestSeller, swiperWrapper1);

// Close popup when clicking on overlay
popupOverlay.addEventListener('click', (e) => {
    if (e.target === popupOverlay) {
        popupOverlay.style.display = 'none';
    }
});


function showPopup(item) {

    let stars = '';
    for (let i = 0; i < item.rating; i++) {
        stars += `<i class='bx bxs-star' ></i>`;
    }
    popup.innerHTML = `
            <span id="popup-close" class="popup-close">
             <i    class='bx bx-window-close'></i>
            </span>
            <h2 id="popup-title">${item.name}</h2>
            <img id="popup-image" src="${item.image}" alt="" />
            <div class="price_cart">
            <p class="price pink">₹ ${item.price}</p>
            <button class="cart_btn">
             Add to Cart
             <i class='bx bx-cart-add'></i>
            </button>
            </div>
            <div class="flex1">
              <p class="stars"><span class="pink"> Rating: </span> ${stars}</p>
             <div class="product_inc_dec">
                <button class="inc_btn">+</button>
                <p class="product_quantity">1</p>
                <button class="dec_btn">-</button>
             </div>
            </div>
            <p id="popup-description">${item.description} ${item.detail}</p>
        `;

    // Show popup
    popupOverlay.style.display = 'flex';

    // Close popup logic
    const popupClose = document.getElementById('popup-close');
    popupClose.addEventListener('click', () => {
        popupOverlay.style.display = 'none';
    });
}

popupOverlay.addEventListener('click', (e) => {
    if (e.target === popupOverlay) {
        popupOverlay.style.display = 'none';
    }

});




// Initialize Swiper
new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 40,
    // freeMode: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 30,

        },
        450: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1080: {
            slidesPerView: 4,
            spaceBetween: 40,
        }
    }
});
// Initialize Swiper
new Swiper(".mySwiper1", {
    slidesPerView: 1,
    spaceBetween: 40,
    // freeMode: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    }
});


// ******* categories mapping dynamically **** 
const categoryContainer = document.querySelector('.categories');

IcecremCategories.forEach((cat) => {
    const div = document.createElement('div');
    div.classList.add('cat_card');

    div.innerHTML =
        `
                <img src=${cat.image} alt=${cat.name}>
                <div class="cat_name">
                    <p>${cat.name}</p>
                    <p><i class='bx bx-right-arrow-alt'></i></p>
                </div>
    `;

    categoryContainer.appendChild(div)

})

const clientData = document.querySelector('.review .swiper .swiper-wrapper2');

clientReview.forEach(client => {
    const div = document.createElement('div');
    div.classList.add('swiper-slide');

    let stars = '';
    for (let i = 0; i < client.Cstar; i++) {
        stars += `<i class='bx bxs-star'></i>`;
    }

    div.innerHTML = `
         <p class="Cdescription">${client.Cdescription}</p>
         <p class="Cname">${client.Cname}</p>
         <p class="happyC">Happy Client</p>
         <p class="Cstar">${stars}</p>
         <img src="${client.Cimage}" alt="${client.Cname}">
    `;

    clientData.appendChild(div);
});

// ****** follow image dynamic append ******** 

const followImage = document.querySelector('.follow_images');

followImages.map((img) => {
    const div = document.createElement('div');
    div.classList.add('img');
    div.innerHTML = `
        <img src="${img.fimage}" alt="${img.fname}">
    `;
    followImage.appendChild(div);
})
