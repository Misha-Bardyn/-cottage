/////Customers (Slider)/////////////////////////////////////////////////

let btn_prev = document.querySelector('.btn-prev');
let btn_next = document.querySelector('.btn-next');
let slides = document.querySelectorAll('.slide');
let dots = document.querySelectorAll('.dot');

let index = 0;

const activeDot = (i) => {
    for (let dot of dots) {
        dot.classList.remove('active');
    }
    dots[i].classList.add('active');
};

const activeSlide = (n) => {
    for (const slide of slides) {
        slide.classList.remove('active');
    }
    slides[n].classList.add('active');
};

const prevSlide = () => {
    (index === 0) ? index = slides.length - 1 : index--;
    activeSlide(index);
    activeDot(index);
};

const nextSlide = () => {
    (index === slides.length - 1) ? index = 0 : index++;
    activeSlide(index);
    activeDot(index);
};

btn_prev.addEventListener('click', prevSlide);
btn_next.addEventListener('click', nextSlide);

/////MODAL/////////////////////////////////////////////////

let links = document.querySelectorAll('.link');
let buttons_close_modal = document.querySelectorAll('.close-modal');

for (const link of links) {
    link.addEventListener('click', (event) => {
        event.target.nextElementSibling.style.display = "block";
    })
};

for (const btn_close_modal of buttons_close_modal) {
    btn_close_modal.addEventListener('click', (event) => {
        event.target.parentNode.parentNode.style.display = 'none';
    })
};

window.addEventListener('click', (event) => {
    if (event.target.style.display === 'block')
        event.target.style.display = 'none'
});

//////navigationMenu///////////////////////////////////////////////

let menu_links = document.querySelectorAll('.menu__link')

for (const iterator of menu_links) {
    iterator.addEventListener("click", () => {
        navigationMenu()
        iterator.classList.add('menu__link_active')
    })
}

function navigationMenu() {
    menu_links.forEach(elem => elem.classList.remove('menu__link_active')
    )
}

function downOne() {
    window.scroll({
        top: 3050,
        behavior: 'smooth',
    })
}
function downTwo() {
    window.scroll({
        top: 3750,
        behavior: 'smooth',
    })
}
function downThre() {
    window.scroll({
        top: 4750,
        behavior: 'smooth',
    })
}
