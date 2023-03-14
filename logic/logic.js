let offset = window.pageYOffset;

window.addEventListener('scroll', () => {
    offset = window.pageYOffset;
});
const picture1 = document.getElementById('pic1');
const textContainer1 = document.getElementById('textcontainer1');
const textContainer2 = document.getElementById('textcontainer2');
const picture2 = document.getElementById('pic2');
const textContainer3 = document.getElementById('textcontainer3');
const rombus = document.getElementById('rombus')
const rombusTitle = document.getElementById('rombusTitle')
const section3SecondContainer = document.getElementById('two')

const card1 = document.getElementById('card1');
const card2 = document.getElementById('card2');
const card3 = document.getElementById('card3');
const card4 = document.getElementById('card4');

const card = document.querySelectorAll('.card');

const section5pic1 = document.getElementById('section5pic1');
const section5TextContainer = document.getElementById('section5text');
const section5Pic2 = document.getElementById("section5pic2");


function scrollAnimations() {

    const scrollInterval = setInterval(() => {
        if (offset >= 300) {
            picture1.classList.add("first-picanim");
            textContainer1.classList.add("textContainerAnimation");
            const timeout1 = setTimeout(() => {
                textContainer2.classList.add("textContainerAnimation");
            }, 400);
        }

        if (offset >= 800) {
            picture2.classList.add("first-picanim");
            textContainer3.classList.add("textContainerAnimation");
        }

        if (offset >= 1300) {
            rombus.classList.add("rombusAnimation");
            const timeout2 = setTimeout(() => {
                rombusTitle.style.opacity = 1;
            }, 500);
            section3SecondContainer.classList.add("section3PicAnim");
        }

        if (offset >= 1900) {
            const cardtimeout = setTimeout(() => {
                card1.classList.add("cardsAnimation");
            }, 10);
            const cardtimeout2 = setTimeout(() => {
                card2.classList.add("cardsAnimation");
            }, 400);
            const cardtimeout3 = setTimeout(() => {
                card3.classList.add("cardsAnimation");
            }, 800);
            const cardtimeout4 = setTimeout(() => {
                card4.classList.add("cardsAnimation");
            }, 1000);
        }

        if (offset >= 2600) {
            section5pic1.classList.add('section5pic1anim')
            section5Pic2.classList.add('section5pic1anim')
            section5TextContainer.classList.add('section5textanim')
        }
    }, 100);
};

scrollAnimations();

let flag = 1;
let burgerButton = document.getElementById('burg-btn');
let line1 = document.getElementById('line1');
let line2 = document.getElementById('line2');
let line3 = document.getElementById('line3');
const navLinks = document.querySelector('.navbar-links2');


burgerButton.addEventListener('click', function (burger) {
    if (flag === 1) {
        line1.style.transition = "1s";
        line3.style.transition = "1s";
        line2.style.opacity = 0;
        line1.style.transform = "rotateZ(50deg)";
        line1.style.top = "50%";
        line3.style.top = "50%";
        line2.style.transition = "1s";
        line3.style.transform = "rotateZ(-50deg)";
        flag = 0;
        navLinks.classList.remove('hide');
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflowY = "scroll";
        navLinks.classList.add('hide')
        line1.style.transition = "1s";
        line3.style.transition = "1s";
        line2.style.transition = "1s";
        line1.style.transform = "rotateZ(0deg)";
        line3.style.transform = "rotateZ(0deg)";
        line1.style.top = "20%";
        line3.style.top = "68%";
        line2.style.opacity = 1;
        flag = 1;
    }

});

window.addEventListener('resize', () => {
    if (window.innerWidth >= 573) {
        navLinks.classList.add('hide');
        line1.style.transition = "1s";
        line3.style.transition = "1s";
        line2.style.transition = "1s";
        line1.style.transform = "rotateZ(0deg)";
        line3.style.transform = "rotateZ(0deg)";
        line1.style.top = "20%";
        line3.style.top = "68%";
        line2.style.opacity = 1;
        flag = 1;
        document.body.style.overflowY = "scroll";
        document.body.style.overflowX = "hidden";

    }
});