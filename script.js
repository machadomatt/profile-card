const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]')
const image = document.querySelector('.image')
const hover = document.querySelector('.hover')
const modal = document.querySelector('.modal')
const closeModal = document.querySelector('.close')

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark')
    } else {
        document.documentElement.removeAttribute('data-theme')
    }
}

function show() {
    hover.classList.add('active')
    modal.classList.add('show')
}

function hide() {
    hover.classList.remove('active')
    modal.classList.remove('show')
}

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    toggleSwitch.checked = true
    document.documentElement.setAttribute('data-theme', 'dark')
}

image.addEventListener('click', show)
closeModal.addEventListener('click', hide)
toggleSwitch.addEventListener('change', switchTheme)
