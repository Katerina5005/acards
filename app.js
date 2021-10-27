const slides = document.querySelectorAll('slide')

for (const slide of slides) {
    slide.addEventListener('click', () => {
        cleadrActiveClasses()
        
        slide.classList.add('active')
    })
}

function cleadrActiveClasses() {
    slides.forEach((slide) => {
        slide.classList.remove('active')
    })
}
