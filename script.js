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


    
    
function cursorEffect() {
    const overlay = document.querySelector("#overlay");
    const cursor = document.querySelector("#cursor");
    let scrollPos = {x: 0, y: 0}
    let moveLast = {pageX: 0, pageY: 0};
    
    function moveCursor(event) {
        gsap.to(cursor, {
            x: event.pageX + scrollPos.x,
            y: event.pageY + scrollPos.y
        });
        moveLast = event
    }

    locoScroll.on('scroll', function(event) {
        scrollPos = {
            x: event.scroll.x,
            y: event.scroll.y
        }
        moveCursor(moveLast)
        if (moveLast.pageY + event.scroll.y > window.innerHeight ) {
            hideCursor()
        } else {
            showCursor() 
        }
    });

    overlay.addEventListener('mousemove', moveCursor);

    function showCursor() {
        gsap.to(cursor, {
            scale: 1,
            opacity: 1
        });
    }

    function hideCursor() {
        gsap.to(cursor, {
            scale: 0,
            opacity: 0
        });
    }

    overlay.addEventListener("mouseenter", showCursor);
    overlay.addEventListener("mouseleave", hideCursor);
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
    page1Animation();

   


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


var swiper_phone = new Swiper('#swiper-container-phone', {
    slidesPerView: 3,
    grabCursor: true,
    loop: true,

    navigation: {
        nextEl: '#swiper-button-next-phone',
        prevEl: '#swiper-button-prev-phone',
    },
     breakpoints: {
        // если ширина экрана больше или равна 1024px
        1200: {
            slidesPerView: 3, // показывать 3 слайда
            spaceBetween: 30 // большее расстояние между слайдами
        },
        // если ширина экрана больше или равна 768px, но меньше 1024px
        800: {
            slidesPerView: 2, // показывать 2 слайда
            spaceBetween: 20 // среднее расстояние между слайдами
        },
        // если ширина экрана меньше 768px
        0: {
            slidesPerView: 1, // показывать 1 слайд
            spaceBetween: 10 // минимальное расстояние между слайдами
        }
    }

});


var  swiper_laptop = new Swiper('#swiper-container-laptop', {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 100,

    navigation: {
        nextEl: '#swiper-button-next-laptop',
        prevEl: '#swiper-button-prev-laptop',
    },
});