

// function exitFullScreen() {
//   const fullScreen = document.querySelector('.full-screen-carousel-wrapper')
//   fullScreen.style.display = 'none'
// }






// document.querySelector('.video-carousel-wrapper').addEventListener('click', function(event) {
//   if (!event.target.classList.contains("arrow")) {
//     const fullScreen = document.querySelector('.full-screen-carousel-wrapper');
//     fullScreen.style.display = 'flex';
//   }
// });


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





// function openWebsiteInNewTab(url) {
//   window.open(url, '_blank');
// }




 // Array to store all the YouTube players
 var players = [];

 // Initialize the YouTube API and create the players
 function onYouTubeIframeAPIReady() {
   var videoIds = ['iYLbSmz6EZc', 'oG_IgYSbrfs', 'xhgHSELjjcA', 'YOaX-pEvZ88', 'ief7eig0Q6U', '4sihCZyBmMg', 'mbN-TApHCLI', 'c2O0ARxQYn0', '6ohsupKVYKc', 'ND0N5v4HaEA', 'fmQ2RYZy5LI', 'yyy7BbCQZi8', 'jVEslHNh9E0', 'yQqiEm5DQ3E', '8nZaKRBGlYo', '-MFTJG_CjI4', 'kai79Kp_fvk', '6VISv1hhxuI', 'OFjurgqLgHQ', 'sv5R1UGEqT8', '87gOUvkp0G4', 'tW7REYzY-bU', '1olDiHlL8SI'];

   for (var i = 0; i < videoIds.length; i++) {
     createPlayer('player' + (i + 1), videoIds[i]);
   }
 }

 // Function to create a YouTube player
 function createPlayer(containerId, videoId) {
   players.push(
     new YT.Player(containerId, {
       height: '472',
       width: '840',
       videoId: videoId,
       events: {
         'onStateChange': onPlayerStateChange,
       },
     })
   );
 }

 // Function to handle video state changes
 function onPlayerStateChange(event) {
   if (event.data === YT.PlayerState.PLAYING) {
     // Pause all other videos when one starts playing
     for (var i = 0; i < players.length; i++) {
       if (players[i].getPlayerState() === YT.PlayerState.PLAYING && players[i] !== event.target) {
         players[i].pauseVideo();
       }
     }
   }
 }


 //owl-carousel-container

 //   MUSIC OWL CAROUSEL

 function owlFullScreen(startPosition) {
  const owlContainer = document.querySelector('.owl-carousel-container')

  owlContainer.style.position = 'fixed'
  owlContainer.style.top = '0'
  owlContainer.style.left = '0'
  owlContainer.style.bottom = '0'
  owlContainer.style.right = '0'
  owlContainer.style.background = 'black'


  document.querySelector('.music-close-button').style.display = 'block'
  document.querySelector('.owl-carousel').style.marginTop = '80px'



 

  const theImages = document.querySelectorAll('.music-carousel-images')
  const theVideos = document.querySelectorAll('.theVideos')

  theImages.forEach(image => {
    image.style.display = 'none'
  })

  theVideos.forEach(video => {
    video.style.display = 'block'
  })

  const playButton = document.querySelectorAll('.play-button-music')
  playButton.forEach(button => {
    button.style.display = 'none'
  })


  $('.owl-carousel').trigger('destroy.owl.carousel'); // Destroy the current carousel instance
  $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      startPosition: startPosition,
      responsive: {
          0: {
              items: 1
          },
          600: {
              items: 3
          },
          1000: {
              items: 1 // Change to 1 item at 1000px and above
          }
      },
      navText: ["<img src='prev-button.png'>", "<img src='next-button.png'>"],
      touchDrag: true
  });
 
 }



 function regularMusicCarousel() {
  const owlContainer = document.querySelector('.owl-carousel-container')

  owlContainer.style.position = 'relative'
  owlContainer.style.top = ''
  owlContainer.style.left = ''
  owlContainer.style.bottom = ''
  owlContainer.style.right = ''
  owlContainer.style.background = 'none'


  document.querySelector('.music-close-button').style.display = 'none'
  document.querySelector('.owl-carousel').style.marginTop = ''



  const theImages = document.querySelectorAll('.music-carousel-images')
  const theVideos = document.querySelectorAll('.theVideos')

  theImages.forEach(image => {
    image.style.display = 'block'
  })

  theVideos.forEach(video => {
    video.style.display = 'none'
  })

  const playButton = document.querySelectorAll('.play-button-music')
  playButton.forEach(button => {
    button.style.display = 'block'
  })


  $('.owl-carousel').trigger('destroy.owl.carousel'); // Destroy the current carousel instance
  $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      responsive: {
          0: {
              items: 1
          },
          600: {
              items: 3
          },
          1000: {
              items: 3 
          }
      },
      navText: ["<img src='prev-button.png'>", "<img src='next-button.png'>"],
      touchDrag: true
  });
 
 }



 //  MAIN MOBILE VIDEO CAROUSEL

 const slider = document.querySelector('.slider-container'),
slides = Array.from(document.querySelectorAll('.mobile-slide'))

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
  document.querySelector('.mobile-image-container').style.display = 'none'
  document.querySelector('.video').style.display = 'block'
  console.log('play test')
}

function closeVideo(){
  document.querySelector('.mobile-image-container').style.display = 'block'
  document.querySelector('.video').style.display = 'none'
}