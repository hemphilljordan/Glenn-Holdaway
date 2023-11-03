const slider = document.querySelector('.slider-container'),
slides = Array.from(document.querySelectorAll('.slide'))

let isDragging = false,
  startPos = 0,
  currentTranslate = 0,
  prevTranslate = 0,
  animationID = 0,
  currentIndex = 0

  slides.forEach((slide, index) => {
    const slideImage = slide.querySelector('img')
    slideImage.addEventListener('dragstart', (e) => e.preventDefault())

    // Touch events
    slide.addEventListener('touchstart', touchStart(index))
    slide.addEventListener('touchend', touchEnd)
    slide.addEventListener('touchmove', touchMove)

    //Mouse events
    slide.addEventListener('mousedown', touchStart(index))
    slide.addEventListener('mouseup', touchEnd)
    slide.addEventListener('mouseleave', touchEnd)
    slide.addEventListener('mousemove', touchMove)
  })

  function touchStart(index) {
    return function(event) {
      currentIndex = index
      startPos = getPositionX(event)
      isDragging = true

      animationID = requestAnimationFrame(animation)
      slider.classList.add('grabbing')
    }
  }

  function touchEnd() {
    isDragging = false
    cancelAnimationFrame(animationID)

    const movedBy = currentTranslate - prevTranslate

    if(movedBy < -100 && currentIndex < slides.length - 1){ 
      currentIndex += 1;
      console.log(currentIndex)
      document.getElementById(`dot${currentIndex}`).style.backgroundColor = '#B3B3B3';
      document.getElementById(`dot${currentIndex + 1}`).style.backgroundColor = '#fff';
    } 

    if(movedBy < -100 && currentIndex === 3){
      document.getElementById(`dot${currentIndex - 2}`).style.width = '10px'
      document.getElementById(`dot${currentIndex - 2}`).style.height = '10px'
      document.getElementById(`dot${currentIndex + 1}`).style.width = '15px'
      document.getElementById(`dot${currentIndex + 1}`).style.height = '15px'
      document.getElementById(`dot${currentIndex + 2}`).style.backgroundColor = '#B3B3B3';
      document.getElementById(`dot${currentIndex + 3}`).style.backgroundColor = '#333333'
    }

    if(movedBy < -100 && currentIndex === 4){
      document.querySelector('.nav__dots').style.transform = 'translateX(-40px)'
      moveTheDots()
      document.getElementById(`dot${currentIndex - 4}`).style.backgroundColor = 'black'
    }

    if(movedBy < -100 && currentIndex >= 5 && currentIndex < 10){
      const dotMove = ((currentIndex - 4) * 40) + 20
      console.log(dotMove)
      document.querySelector('.nav__dots').style.transform = `translateX(-${dotMove}px)`
      moveTheDots()
      document.getElementById(`dot${currentIndex - 4}`).style.backgroundColor = 'black'
    } else if(movedBy < -100 && currentIndex === 10){
      document.querySelector('.dot-container').style.width = '240px'
      document.querySelector('.nav__dots').style.transform = 'translateX(-250px)'
      moveTheDots()
    } else if(movedBy < -100 && currentIndex === 11){
      document.getElementById(`dot${currentIndex - 2}`).style.width = '10px'
      document.getElementById(`dot${currentIndex - 2}`).style.height = '10px'
      document.getElementById(`dot${currentIndex + 1}`).style.width = '15px'
      document.getElementById(`dot${currentIndex + 1}`).style.height = '15px'
      document.getElementById(`dot${currentIndex - 3}`).style.backgroundColor = '#333333'
      document.getElementById(`dot${currentIndex - 4}`).style.backgroundColor = 'black'
    }


   

  

    if(movedBy > 100 && currentIndex > 0){
      currentIndex -= 1;
      console.log(currentIndex);
      document.getElementById(`dot${currentIndex + 1}`).style.backgroundColor = '#fff';
      document.getElementById(`dot${currentIndex + 2}`).style.backgroundColor = '#B3B3B3';
    } else if (movedBy > 100 && currentIndex === 0){
      document.getElementById(`dot${currentIndex}`).style.backgroundColor = '#fff';
      document.getElementById(`dot${currentIndex + 1}`).style.backgroundColor = '#B3B3B3';
    } 



   
    setPositionByIndex()

    slider.classList.remove('grabbing')
  }

  function touchMove(event) {
    if (isDragging){
      const currentPosition = getPositionX(event)
      currentTranslate = prevTranslate + currentPosition - startPos
    }
}

function getPositionX(event) {
  return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX
  console.log(startPos)
}

function animation() {
  setSliderPosition()
  if(isDragging) requestAnimationFrame(animation)
}

function setSliderPosition(){
  slider.style.transform = `translateX(${currentTranslate}px)`
}

function setPositionByIndex() {
  currentTranslate = currentIndex * -window.innerWidth
  prevTranslate = currentTranslate
  setSliderPosition()
}




function moveTheDots(){
  document.getElementById(`dot${currentIndex + 1}`).style.width = '15px'
  document.getElementById(`dot${currentIndex + 1}`).style.height = '15px'
  document.getElementById(`dot${currentIndex - 3}`).style.backgroundColor = '#333333'
  document.getElementById(`dot${currentIndex - 2}`).style.width = '10px'
  document.getElementById(`dot${currentIndex - 2}`).style.height = '10px'
  document.getElementById(`dot${currentIndex + 2}`).style.backgroundColor = '#B3B3B3'
  document.getElementById(`dot${currentIndex + 3}`).style.backgroundColor = '#333333'
}

function showVideo(){
  document.querySelector('.image-container').style.display = 'none'
  document.querySelector('.video').style.display = 'block'
  console.log('play test')
}

function closeVideo(){
  document.querySelector('.image-container').style.display = 'block'
  document.querySelector('.video').style.display = 'none'
}