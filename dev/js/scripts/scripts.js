const swiper = new Swiper(".mySwiper", {
    centeredSlides: false,
    // slidesPerView: 5,

    breakpoints: {
        320: {
            slidesPerView: 1
        },
        785: {
            slidesPerView: 2
        },
        1166: {
            slidesPerView: 4
        }, 1298: {
            slidesPerView: 3
        },
        1621: {
            slidesPerView: 5
        }
    },
    spaceBetween: 24,
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


//////////////img///////////

const previewImage = document.querySelector('.preview-image');
const faceCertificateImages = document.querySelector('.images-fake');
const d = document.querySelector(".images-fake")
const getStyle = function (el, prop) {
    return window.getComputedStyle ? getComputedStyle(el)[prop] : el.currentStyle [prop]
}
faceCertificateImages.addEventListener('click', (e) => {
    if (e.target.closest('.img-fake')) {
        const back = getStyle(e.target, "backgroundImage").split(',')[1]
        previewImage.style.backgroundImage = back;
    }
})
/////////////// RADIO////////


let radioBtns = document.querySelectorAll("input[name='radio']");
let result = document.getElementById("result");

let findSelected = () => {
    let selected = document.querySelector("input[name='radio']:checked").value;
    let res = result.innerText = `${selected} BYN`;
    console.log(res)
}
radioBtns.forEach(radioBtn => {
    radioBtn.addEventListener("change", findSelected);
})

findSelected();
