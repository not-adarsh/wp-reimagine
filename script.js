// locomotive.js code 
const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    lerp:0.3,
});

var crsr = document.querySelector("#cursor")
var crsrb = document.querySelector("#cursor-blur")

document.addEventListener("mousemove" , function(dets){
crsr.style.left = dets.x+30+"px",
crsr.style.top = dets.y+"px"

// for the blur parts 
crsrb.style.left = dets.x - 250 +"px",
crsrb.style.top = dets.y - 250 +"px"
   
})



document.addEventListener("mousemove" , function(dets){

   
})


// on hover image will  be shown on  the page 

document.querySelectorAll(".elem").forEach(function (elem) {
    var rotate = 0;
    var diffrot = 0;
  
    elem.addEventListener("mouseleave", function (dets) {
      gsap.to(elem.querySelector("img"), {
        opacity: 0,
        ease: Power3,
        duration: 0.5,
      });
    });
  
    elem.addEventListener("mousemove", function (dets) {
      var diff = dets.clientY - elem.getBoundingClientRect().top;
      diffrot = dets.clientX - rotate;
      rotate = dets.clientX;
      gsap.to(elem.querySelector("img"), {
        opacity: 1,
        ease: Power3,
        top: diff,
        left: dets.clientX,
        rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
      });
    });
  });

// logo animation 

function breakTheText() {
    var h2 = document.querySelector("#h11")
var h2Text  = h2.textContent

var splitedtext = h2Text.split("")

var clutter =""

splitedtext.forEach(function(elem){
clutter += `<span>${elem}</span>`
})
h2.innerHTML = clutter

  }

  // we call the breakTheText()
  breakTheText()

   gsap.from("#h11 span", { 
    y: 50, // End position along the x-axis
    opacity:0,
    duration:0.7,
    delay:0.5,
    stagger:0.15,

   
  });