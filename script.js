let sections = document.querySelectorAll("section")
let navLinks = document.querySelectorAll(".nav-contents a")

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY
        let offset = sec.offsetTop-150
        let height = sec.offsetHeight
        let id = sec.getAttribute('id');
        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active')
                document.querySelector('.nav-contents a[href*=' + id + ']').classList.add('active')
            })
        }
    })
}
const darkBtn = document.getElementById("dark");
const sun = document.querySelector('.fa-sun');
sun.addEventListener("click", () => {
    
    document.body.classList.toggle('dark-theme');
    if (document.body.classList.contains('dark-theme')) {
        darkBtn.style.visibility = "visible";
        sun.style.visibility = 'hidden';
    } else {
        darkBtn.style.visibility = "visible";
        sun.style.visibility = 'hidden';
    }
    
    darkBtn.onclick = () => {
        document.body.classList.remove('dark-theme');
        darkBtn.style.visibility = "hidden";
        sun.style.visibility = 'visible';
    }

    localStorage.setItem('theme', theme);
});

const savedTheme = localStorage.getItem('theme');

if (savedTheme && savedTheme === 'LIGHT') {
    document.body.classList.add('dark-theme');
}



const scrollToTop = document.getElementById("scroll")

scrollToTop.onclick = () =>{
    window.scrollTo(0,0)
}

const menuBtn = document.getElementById("menu-icon");
menuBtn.onclick = () => {
    const navBar = document.querySelector('.menu');
    navBar.classList.toggle('active-menu');

    if(navBar.classList.contains('active-menu'))
    {
       darkBtn.style.display = 'none'
       menuBtn.style.color = "#fff"
    }
    else
    {
        darkBtn.style.display = 'block'
        menuBtn.style.color = "#21A5EE"
    }
}

const menuLinks = document.querySelectorAll('.menu_link');
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        const navBar = document.querySelector('.menu');
        navBar.classList.remove('active-menu');
        darkBtn.style.display = 'block'
        menuBtn.style.color = "#21A5EE"
    });
});
