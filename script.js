var typed = new Typed(".input",{
    strings:["Rafael","Dev", "Adm"],
    typeSpeed: 110,
    backSpeed: 110,
    loop: true,
    
})

const sr = ScrollReveal ({     
    distance: '60px',
    duration: 2500,
    reset: true
})


sr.reveal('#navbar',{delay:200, origin:'left'})
sr.reveal('#projeto',{delay:200, origin:'right'})