let random = Math.ceil(Math.random() * 2)
let bg = document.getElementById('bg')
bg.style.backgroundImage = `url('assets/wallpaper-${random}.jpg')`
bg.style.opacity = 1
