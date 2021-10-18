// Toggle

const btnMobile = document.querySelector('#btn-mobile')
const nav = document.querySelector('#nav')

function toggleMenu(event) {
    nav.classList.toggle('active')
    if (nav.classList.contains('active')) {
        event.currentTarget.setAttribute('aria-expanded', 'true')
        event.currentTarget.setAttribute('aria-label', 'Close Menu')
        return
    }
    event.currentTarget.setAttribute('aria-expanded', 'false')
    event.currentTarget.setAttribute('aria-label', 'Open Menu')
}

btnMobile.addEventListener('click', toggleMenu)