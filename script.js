let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('#.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
       
}
/*------------------scrll section----------------*/
let sections = document.querySelector('section');
let navlinks = document.querySelector('header nav a');

window.onscroll = ()=> {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >= offset && top < offset + height){
            navlinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        });
        };
    });

    /*--------------------sticky navbar-------------*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 100);

    /*---------------remove toggle icon navbar----------*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content,heading', { origin:'top' });
ScrollReveal().reveal('.about-img, .skill-container, .education-container, .contact form', { origin: 'button' });

/*------------------------------typed js---------------*/

var typed = new typed(".text",{
    Strings:['frontend developer','web developer'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
})
