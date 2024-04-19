

function animationBody () {
    const bodyEl = document.querySelector("body");

bodyEl.addEventListener("mousemove", (event) => {
    const xPos = event.offsetX;
    const yPos = event.offsetY;
    const spanEl = document.createElement("small");
    const sizes = Math.random()*100;
    spanEl.style.width = sizes + "px"
    spanEl.style.height = sizes + "px"
    spanEl.style.left = xPos + "px";
    spanEl.style.top = yPos + "px";
    bodyEl.appendChild(spanEl);
    setTimeout(()=>{
        spanEl.remove();
    }, 3000)
});
}
animationBody()

function locoMotiveJs() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });


    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();

};
locoMotiveJs()

function navAnimation() {
    let header = document.querySelector("header");


    header.addEventListener("mouseenter", () => {

        let ti = gsap.timeline()

        ti.to("#btm-navigation", {
            height: "28vh"
        })
        ti.to("#navigation ul li h5", {
            display: "block",
            duration: 0.2
        })
        ti.to("#navigation ul li h5 span", {
            y: 0,
            stagger: {
                amount: 0.4
            }
        })
    })

    header.addEventListener("mouseleave", () => {

        let ti = gsap.timeline()

        ti.to("#navigation ul li h5 span", {
            y: 25,
            stagger: {
                amount: 0.2
            }
        })
        ti.to("#navigation ul li h5", {
            display: "none",
            duration: 0.1
        })
        ti.to("#btm-navigation", {
            height: "0",
            duration: 0.2
        })
    })
};
navAnimation()

function pageAnimation() {
    let elem = document.querySelectorAll(".right-dynemic-box");

    elem.forEach(function (elem) {
        elem.addEventListener("mouseenter", () => {
            gsap.to(elem.childNodes[3], {
                opacity: 1,
                scale: 1
            });
        });
        elem.addEventListener("mouseleave", () => {
            gsap.to(elem.childNodes[3], {
                opacity: 0,
                scale: 0
            });
        });
        elem.addEventListener("mousemove", (dets) => {
            gsap.to(elem.childNodes[3], {
                x: dets.x - elem.getBoundingClientRect().x - 60,
                y: dets.y - elem.getBoundingClientRect().y - 130,
            })
        });
    });
};
pageAnimation()

function page3Animation() {
    let videoPly = document.getElementById("play");
    let video = document.querySelector("video");

    videoPly.addEventListener("click", () => {
        video.play()
        gsap.to(video, {
            transform: "scaleX(1) scaleY(1)",
            opacity: 1,
            borderRadius: 0,
            zIndex: 3,
        });
    });

    video.addEventListener("click", () => {
        video.pause()
        gsap.to(video, {
            transform: "scaleX(0.9) scaleY(0)",
            opacity: 0,
            borderRadius: "30px",
            zIndex: 2,
        });
    });

};
page3Animation()

function page7Animation() {
    let secVedios = document.querySelectorAll(".sec1-right");

    secVedios.forEach(function (elem) {
        elem.addEventListener("mouseenter", function () {
            elem.childNodes[3].style.opacity = 1
            gsap.to(elem.childNodes[5], {
                opacity: 1,
                scale: 1
            });
            elem.childNodes[3].play()
        });
        elem.addEventListener("mouseleave", function () {
            gsap.to(elem.childNodes[5], {
                opacity: 0,
                scale: 0
            })
            elem.childNodes[3].style.opacity = 0
            elem.childNodes[3].load()
        });

        elem.addEventListener("mousemove", (dets) => {
            gsap.to(elem.childNodes[5], {
                x: dets.x - elem.getBoundingClientRect().x - 80,
                y: dets.y - elem.getBoundingClientRect().y - 80,
            });
        });

    });
};
page7Animation()

function page8Animation() {

    let heig = document.querySelectorAll(".height");
    let imageHeiger = document.querySelectorAll(".imagewithvedio");

    heig.forEach((elem) => {

        elem.addEventListener("mouseenter", function () {
            // elem.childNodes[3].style.display = "none"
            elem.childNodes[3].style.opacity = 0
            elem.childNodes[5].style.height = "30vw"

        });

        elem.addEventListener("mouseleave", function () {
            // elem.childNodes[3].style.display = "block"
            elem.childNodes[3].style.opacity = 1
            elem.childNodes[5].style.height = "20vw"
        });
    });

    imageHeiger.forEach((elem) => {
        elem.addEventListener("mouseenter", () => {
            elem.childNodes[3].style.opacity = 1
            elem.childNodes[3].play()
        });

        elem.addEventListener("mouseleave", () => {
            elem.childNodes[3].style.opacity = 0
            elem.childNodes[3].load()
        });
    });

};
page8Animation()

function seiVeses() {
    let summary = document.getElementById("summary");
    let onOff = document.getElementById("open");
    let border = document.querySelector(".border")
    let openDiv = "true";

    summary.addEventListener("click", () => {
        if (openDiv === "true") {
            openDiv = "false";
            onOff.style.transform = "rotate(0deg)";
            border.style.borderTop = "1px solid #333"
        } else {
            openDiv = "true";
            onOff.style.transform = "rotate(180deg)";
            border.style.borderTop = "2px solid #fff"

        }
    })

    let summary2 = document.getElementById("summary2");
    let on = document.getElementById("open2");
    let border2 = document.querySelector(".border2")
    let op = "true";
    summary2.addEventListener("click", () => {
        if (op === "true") {
            op = "false";
            on.style.transform = "rotate(180deg)";
            border2.style.borderTop = "2px solid #fff"
        } else {
            op = "true";
            on.style.transform = "rotate(0deg)";
            border2.style.borderTop = "1px solid #333"

        }
    })
};
seiVeses()

function page11Animation() {
    gsap.from(".triger h3", {
        x: 0,
        duration: 1,
        scrollTrigger: {
            trigger: ".triger",
            scroller: "#main",
            // markers: true
            start: "top 80%",
            end: "top 10%",
            scrub: true
        }
    })
};
page11Animation()

function pageLoding() {
    let lodingTime = gsap.timeline()
    lodingTime.from("#page1", {
        opacity: 0,
        duration: 0.3,
        delay: 0.2,
        transform: "scaleX(0.7) scaleY(0.2)",
        borderRadius: "100px",
        duration: 2,
        ease: "expo.out"
    })

    lodingTime.from("header", {
        opacity: 0,
        delay: -0.2
    })

    lodingTime.from("#page1 h1, #page1 p, #page1 div", {
        opacity: 0,
        duration: 0.5,
        stagger: 0.2
    })
};
pageLoding()