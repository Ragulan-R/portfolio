const menuBtn = document.getElementById('hamburger')
const navList = document.getElementById('navList')

function toggleButton() {
  navList.classList.toggle('show')
}

menuBtn.addEventListener('click', toggleButton)
