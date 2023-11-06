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
  const carousel = document.querySelector('.carousel')

  carousel.style.position = 'fixed'
  carousel.style.top = '0'
  carousel.style.left = '0'
  carousel.style.width = '80%'
  carousel.style.height = '80%'

  const theImages = document.querySelectorAll('.theImages')
  const theVideos = document.querySelectorAll('.theVideos')

  theImages.forEach(image => {
    image.style.display = 'none'
  })

  theVideos.forEach(video => {
    video.style.display = 'block'
  })
}



