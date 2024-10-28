
let animation_tr=document.querySelectorAll("tr");
let head_caption =document.querySelectorAll(".heading-caption");

head_caption.forEach(function(ele){
    ele.classList.add("zoom-in")
})

animation_tr.forEach(function(ele){
    ele.classList.add("staggered")
})



ScrollReveal().reveal('.staggered', {
    duration: 350,
    distance: '10px',
    origin: 'bottom',
    interval: 150,
     // Delay between each item revealing
    
});


ScrollReveal().reveal('.zoom-in', {
    duration: 1200,
    scale: 0.85, // Starts at 85% size and zooms in to full size
    easing: 'ease-in-out',
    reset:true,
});

