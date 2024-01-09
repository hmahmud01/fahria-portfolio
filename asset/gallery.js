document.addEventListener("DOMContentLoaded", function () {
    'use strict';

    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
        duration: 1.2
    })

    function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(ref);
    }

    requestAnimationFrame(raf);

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
        lenis.raf(time * 1000)
    });

    let workInfoItem = document.querySelectorAll('.work__photo-item');
    workInfoItem.forEach(function(item, index) {
        item.style.zIndex = workInfoItem.length - index;
    });

    gsap.set(".work__photo-item", {
        clipPath: function() {
            return "inset(0px 0px 0px 0px)"
        }
    })

    const animation = gsap.to('.work__photo-item:not(:last-child)', {
        clipPath: function() {
            return "inset(0px 0px 100% 0px)"
        },
        stagger: .5,
        ease: "none"
    });

    ScrollTrigger.create({
        trigger: '.work',
        start: 'top top',
        end: 'bottom bottm',
        animation: animation,
        scrub: 1
    })
})