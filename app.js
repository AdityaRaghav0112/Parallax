parallaxEl = document.querySelectorAll(".parallax");

let xvalue = 0;
let yvalue = 0;

window.addEventListener("mousemove" , (e)=>{
    xvalue = e.clientX - window.innerWidth/2;
    yvalue = e.clientY - window.innerHeight/2;
 
    
    parallaxEl.forEach(el => {
        let speedx = el.dataset.speedx; 
        let speedy = el.dataset.speedy;
        // let zvalue = parseFloat(getComputedStyle(el).left) *isInLeft;
        // let isInLeft = parseFloat(getComputedStyle(el).left) < window.innerWidth ? 1 : -1
        el.style.transform = `translateX(calc(-50% + ${-xvalue * speedx}px)) translateY(calc(-50% + ${yvalue * speedy}px)) perspective(2300px) translateZ(${0}px)`;
    });
})


// GSAP ANIMATION

let timeline = gsap.timeline();

parallaxEl.forEach( (el) => {
    timeline.from(
        el,{
            top: `${el.offset / 2 + el.dataset.distance}px`,
            duration: 1,
        },
        "1"
    );
})
