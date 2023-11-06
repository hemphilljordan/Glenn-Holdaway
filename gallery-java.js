


const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})



function fullCarousel(){
  console.log('hey buddy')
  const carousel = document.querySelector('.video-carousel')

  carousel.style.position = 'fixed'
  // carousel.style.top = '0'
  // carousel.style.left = '0'
  carousel.style.width = '100%'
  carousel.style.height = '100%'
  carousel.style.backgroundColor = 'black'
  carousel.style.margin = '0'

  const mainPage = document.querySelector('.main-front-page')
  mainPage.style.position = 'fixed'

  const header = document.querySelector('header')
  header.style.display = 'none'

  const playButton = document.querySelectorAll('.overlay')
  playButton.forEach((x) => {
    x.style.opacity = '0'
  })
 

  const theImages = document.querySelectorAll('.theImages')
  const theVideos = document.querySelectorAll('.theVideos')

  theImages.forEach(image => {
    image.style.display = 'none'
  })

  theVideos.forEach(video => {
    video.style.display = 'block'
  })

  const closeButton = document.querySelector('.close-button')
  closeButton.style.display = "block"
}

function regularCarousel(){
  const carousel = document.querySelector('.video-carousel')

  carousel.style.position = 'relative'
  // carousel.style.top = ''
  // carousel.style.left = ''
  carousel.style.width = '70vw'
  carousel.style.height = '70vh'
  carousel.style.backgroundColor = ''
  carousel.style.marginTop = '20px'
  carousel.style.marginBottom = ''

  const mainPage = document.querySelector('.main-front-page')
  mainPage.style.position = 'relative'

  const header = document.querySelector('header')
  header.style.display = 'flex'

  const playButton = document.querySelectorAll('.overlay')
  playButton.forEach((x) => {
    x.style.opacity = '1'
  })
 

  const theImages = document.querySelectorAll('.theImages')
  const theVideos = document.querySelectorAll('.theVideos')

  theImages.forEach(image => {
    image.style.display = 'block'
  })

  theVideos.forEach(video => {
    video.style.display = 'none'
  })

  const closeButton = document.querySelector('.close-button')
  closeButton.style.display = "none"
}











function sendEmail() {
      Email.send({
        Host : "smtp.elasticemail.com",
        Username : "username",
        Password : "password",
        To : 'them@website.com',
        From : "you@isp.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}




//FOR MOBILE MENU //

function stopScroll(page) {
  const frontPage =   document.querySelector(`.${page}`)

  if (frontPage.style.position !== 'fixed'){
    frontPage.style.position = 'fixed'
  } else if (frontPage.style.position === 'fixed' ){
  frontPage.style.position = 'static'
  }

  const menuPage = document.querySelector('.menu')

  if (menuPage.style.display !== 'flex'){
    menuPage.style.display = 'flex'
  } else if (menuPage.style.display === 'flex' ){
  menuPage.style.display = 'none'
  }
}



