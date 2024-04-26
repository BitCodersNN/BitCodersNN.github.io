document.addEventListener("DOMContentLoaded", function () {
    // Инициализация Locomotive Scroll
    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,
        tablet: { smooth: true },
        smartphone: { smooth: true }
    });

    // Обновление ScrollTrigger при скролле
    locoScroll.on("scroll", ScrollTrigger.update);

    // Инициализация ScrollerProxy для ScrollTrigger
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        }
    });

    // Обновление ScrollTrigger при изменении размеров
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // Инициализация эффекта курсора
    function cursorEffect() {
        const page1Content = document.querySelector("#page1-content");
        const cursor = document.querySelector("#cursor");

        page1Content.addEventListener('mousemove', function (event) {
            gsap.to(cursor, {
                x: event.clientX,
                y: event.clientY
            });
        });

        page1Content.addEventListener("mouseenter", function () {
            gsap.to(cursor, {
                scale: 1,
                opacity: 1
            });
        });

        page1Content.addEventListener("mouseleave", function () {
            gsap.to(cursor, {
                scale: 0,
                opacity: 0
            });
        });
    }

    cursorEffect();

    function page1Animation() {
        gsap.from("#page1-content h1", {
            y: 20,
            stagger: 0.9,
            duration: 1,
            scrollTrigger: {
                trigger: "#page1",
                scroller: "#main",
                start: "top 17%",
                end: "top 90%",
                // markers: true,
                scrub: 5
            }
        });
    }
    page1Animation()


    function page2Animation() {
        gsap.from("#page2-content .elem", {
            y: 120,
            stagger: 0.9,
            duration: 1,
            scrollTrigger: {
                trigger: "#page2",
                scroller: "#main",
                start: "top 27%",
                end: "top 50%",

                scrub: 5
            }
        });
        gsap.from("#page2-content .e1", {
            y: 120,
            stagger: 0.9,
            duration: 1,
            scrollTrigger: {
                trigger: "#page2",
                scroller: "#main",
                start: "top 27%",
                end: "top 50%",

                scrub: 5
            }
        }


        );
        gsap.from("#marqueeContainer", {
            y: 120,
            stagger: 0.9,
            duration: 1,
            scrollTrigger: {
                trigger: "#page2 .e1",
                scroller: "#main",
                start: "top 27%",
                end: "top 50%",

                scrub: 5
            }
        })
    }

    page2Animation();


    function page4Animation() {
        gsap.from("#aaa", {
            y: 120,
            stagger: 0.9,
            duration: 1,
            scrollTrigger: {
                trigger: "#page4",
                scroller: "#main",
                start: "top 27%",
                end: "top 50%",

                scrub: 5
            }
        });
        gsap.from("#page4 .n3", {
            y: 120,
            stagger: 0.9,
            duration: 1,
            scrollTrigger: {
                trigger: "#page4",
                scroller: "#main",
                start: "top 27%",
                end: "top 50%",

                scrub: 5
            }
        }


        );
    }

    page4Animation();

    function page6Animation() {
        gsap.from("#unn-team", {
            y: 120,
            stagger: 0.9,
            duration: 1,
            scrollTrigger: {
                trigger: "#page6",
                scroller: "#main",
                start: "top 27%",
                end: "top 50%",

                scrub: 5
            }
        });


    }

    page6Animation();

    function page7Animation() {
        gsap.from("#nntourist", {
            y: 120,
            stagger: 0.9,
            duration: 1,
            scrollTrigger: {
                trigger: "#page7",
                scroller: "#main",
                start: "top 27%",
                end: "top 50%",

                scrub: 5
            }
        });


    }

    page7Animation();

    function page9Animation() {
        gsap.from("#nntourist-team", {
            y: 120,
            stagger: 0.9,
            duration: 1,
            scrollTrigger: {
                trigger: "#page9",
                scroller: "#main",
                start: "top 27%",
                end: "top 50%",

                scrub: 5
            }
        });


    }

    page9Animation();


    function page10Animation() {
        gsap.from("#aaaa", {
            y: 120,
            stagger: 0.9,
            duration: 1,
            scrollTrigger: {
                trigger: "#page10",
                scroller: "#main",
                start: "top 27%",
                end: "top 50%",

                scrub: 5
            }
        });
        gsap.from(".n3", {
            y: 120,
            stagger: 0.9,
            duration: 1,
            scrollTrigger: {
                trigger: "#page10",
                scroller: "#main",
                start: "top 27%",
                end: "top 50%",

                scrub: 5
            }
        });


    }

    page10Animation();

    function page11Animation() {
        gsap.from(".name", {
            y: 120,
            stagger: 0.9,
            duration: 1,
            scrollTrigger: {
                trigger: "#page11",
                scroller: "#main",
                start: "top 27%",
                end: "top 50%",

                scrub: 5
            }
        });


    }

    page11Animation();

    function page12Animation() {
        gsap.from("#aaaaa", {
            y: 100,
            stagger: 0.9,
            duration: 1,
            scrollTrigger: {
                trigger: "#page12",
                scroller: "#main",
                start: "top 7%",
                end: "top 20%",

                scrub: 5
            }
        });
        gsap.from("#aaaaaa", {
            y: 100,
            stagger: 0.9,
            duration: 1,
            scrollTrigger: {
                trigger: "#page12",
                scroller: "#main",
                start: "top 7%",
                end: "top 20%",

                scrub: 5
            }
        });

    }

    page12Animation();

    const swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 35,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        }
    });

}
);

var copyText = "unnmobile@mail.ru";

var copyBtn = document.getElementById("copyBtn");
copyBtn.addEventListener("click", function () {
    copyBtn.textContent = "Почта скопирована";

    var tempInput = document.createElement("input");
    tempInput.value = copyText;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    setTimeout(function () {
        copyBtn.textContent = "unnmobile@mail.ru";
    }, 3000);
});
const wrapper = document.querySelector('.ball');
const layers = document.querySelectorAll('.skill');
const layerSpeed = 0.2;

const handleParallax = (evt) => {

    const parallaxLeftOffset = wrapper.getBoundingClientRect().left;
    const parallaxTopOffset = wrapper.getBoundingClientRect().top;

    const coordX = evt.clientX - parallaxLeftOffset - 0.5 * wrapper.offsetWidth;
    const coordY = evt.clientY - parallaxTopOffset - 0.5 * wrapper.offsetHeight;

    layers.forEach((layer) => {

        const x = - (coordX * layerSpeed).toFixed(2);
        const y = - (coordY * layerSpeed).toFixed(2);
        layer.setAttribute('style', `transform: translate(${x}px, ${y}px);`)
    });
};

const reset = () => {
    layers.forEach((layer) => {
        layer.removeAttribute('style');
    });
}

wrapper.addEventListener('mousemove', handleParallax);
wrapper.addEventListener('mouseout', reset);


var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    grabCursor: true,
    loop: true,
    spaceBetween: 30,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
