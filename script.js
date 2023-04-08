const showMenu=(toggleId,navId) =>{
    const toggle=document.getElementById(toggleId)
    nav=document.getElementById(navId);
    if(toggle && nav)
    {
        toggle.addEventListener('click',()=>
        {
            nav.classList.toggle('show');
        })
    }
}
showMenu('nav-toggle','nav-menu');

const navLink=document.querySelectorAll('.nav__link')
function linkAction(){
    navLink.forEach(n=> n.classList.remove('active'))
    this.classList.add('active');

    const navMenu=document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}

navLink.forEach(n=>n.addEventListener('click',linkAction))
// scroll reveal
const sr=ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: false
})

// Scroll Home

sr.reveal('.home__title',{})
sr.reveal('.button',{delay: 200})
sr.reveal('.home__img',{delay: 400})
sr.reveal('.home__social-icon',{interval: 200})

//scroll about

sr.reveal('.about__img',{})
sr.reveal('.about__subtitle',{delay: 200})
sr.reveal('.about__text',{delay: 400})

//scroll edu
sr.reveal('.ed__title',{})
sr.reveal('.e-h',{delay:100})
sr.reveal('.e-c',{delay: 300})
sr.reveal('.e-g',{delay: 600})

// scroll find
sr.reveal('.p__title',{})
sr.reveal('.platforms',{delay:300})

//scroll skills
sr.reveal('.s__title',{})
sr.reveal('.skill',{delay:300})

//scroll project
sr.reveal('.pro__title',{})
sr.reveal('.project__box',{delay:300})

// scroll contact
sr.reveal('.contact__title',{})
sr.reveal('.contact',{delay:300})