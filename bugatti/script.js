
const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

const counters = document.querySelectorAll('.counter');
counters.forEach((counter) => { 
    counter.innerHTML=0;
    const updateCounter=()=>{
        const targetCount = +counter.getAttribute('data-target');

        const startingCount = +counter.innerHTML;
        const incr = targetCount/100;
        if (startingCount < targetCount) {
            counter.innerHTML = `${ Math.round(startingCount + incr)}`;
            setTimeout(updateCounter,10)
        }else{
            counter.innerHTML =  targetCount;
        }

    }

    updateCounter();
});

let tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.car',
        start: '53% center',
        end: 'bottom center',
        scrub: true,
        // markers: true
    }
})

tl.to('.car',{
    y:1800,
    scale:5,
    opacity:0
},'a')
tl.to('.car2',{
    x:-1250
},'b')
tl.to('.logo',{
    y:200
},'a')
tl.to('.title',{
    y:200
},'a')
tl.to('.info',{
    y:200
},'a')
tl.to('.text',{
    opacity:0
},'b')

tl.to('.title',{
    x:-300
},'b')
tl.to('.info',{
    x:300
},'b')
tl.to('.new',{
    y:350,
    opacity:1,
},'b')



