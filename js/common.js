import { TeamMember } from "./data.js";

AOS.init();

// on load show loader animation 
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    preloader.style.display = 'none';
});


// Show and hide search input
const searchIcon = document.querySelector('.bx-search');
searchIcon.addEventListener('click', () => {
    const searchInput = document.querySelector('.searchinput');
    searchInput.classList.toggle('search');
});

// ****** path checking ******

const path = window.location.pathname;

if (path.includes('index.html')) {
    document.querySelector('.nav_links li a[href="index.html"]').classList.add('font');
} else if (path.includes('about.html')) {
    document.querySelector('.nav_links li a[href="about.html"]').classList.add('font');
}

// ***** on click scroll to top ****** 
const scrollTop = document.querySelector('.scrollTop');
const navBar = document.querySelector('nav');

window.addEventListener('scroll', () => {
    window.scrollY > 300 ? (scrollTop.classList.add('showScroll'), navBar.classList.add('navfixed')) : (scrollTop.classList.remove('showScroll'), navBar.classList.remove('navfixed'));
})
scrollTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
})

// show and hide menu bar 
const menuBar = document.querySelector('.menu_icon');
const navContainer = document.querySelector('.nav_container');

menuBar.addEventListener('click', () => {
    navContainer.classList.toggle('show');
    console.log('Shown');

})


const counters = document.querySelectorAll('.value');
const speed = 500; // Adjust how quickly the counter reaches its value.
const delay = 100; // Delay in milliseconds between increments.

counters.forEach(counter => {
    const animate = () => {
        const value = +counter.getAttribute('akhi'); // Target value.
        const data = +counter.innerText.replace('+', ''); // Remove "+" for calculation if already appended.

        const increment = value / speed; // Incremental step value.

        if (data < value) {
            counter.innerHTML = Math.ceil(data + increment);
            setTimeout(animate, delay); // Add delay for smooth animation.
        } else {
            counter.innerHTML = `${value}<span class="plus">+</span>`; // Ensure the final value includes "+" styled.
        }
    };

    animate();
});

// *** Swiper Js **** 

new Swiper(".mySwiperTeam", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});

const TeamWrapper = document.querySelector('.team_wrapper');
if (TeamWrapper) {
    TeamMember.forEach((team) => {
        TeamWrapper.innerHTML += `
            <div class="swiper-slide team_details">
                            <img src="${team.Timage}" alt="">
                            <p><strong>${team.Tname}</strong></p>
                            <small>${team.Twork}</small>
                            <div class="social_media_icons">
                                <i class='bx bxl-facebook-circle social_icon'></i>
                                <i class='bx bxl-instagram-alt social_icon'></i>
                                <i class='bx bxl-linkedin social_icon'></i>
                            </div>
            </div>
        `;
    })
}