

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
  carousel.style.top = '0'
  carousel.style.left = '0'
  carousel.style.width = '100%'
  carousel.style.height = '100%'
  carousel.style.backgroundColor = 'black'
  carousel.style.margin = '0'

  const mainPage = document.querySelector('.main-front-page')
  mainPage.style.position = 'fixed'

  const header = document.querySelector('header')
  header.style.display = 'none'

  const playButton = document.querySelectorAll('.play-button')
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
  carousel.style.top = ''
  carousel.style.left = ''
  carousel.style.width = '70vw'
  carousel.style.height = '70vh'
  carousel.style.backgroundColor = ''

  const mainPage = document.querySelector('.main-front-page')
  mainPage.style.position = 'relative'

  const header = document.querySelector('header')
  header.style.display = 'flex'

  const playButton = document.querySelectorAll('.play-button')
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
   var videoIds = ['iYLbSmz6EZc', 'oG_IgYSbrfs', 'xhgHSELjjcA'];

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




 //   MUSIC OWL CAROUSEL

 let carouselNum = 3

 $('.owl-carousel').owlCarousel({
      loop:true,
      margin:10,
      nav:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:3
          },
          1000:{
              items: carouselNum
          }
      },
      navText: ["<img src='prev-button.png'>", "<img src='next-button.png'>"]
  })



 function owlFullScreen() {
  const owlContainer = document.querySelector('.owl-carousel-container')

  owlContainer.style.position = 'fixed'
  owlContainer.style.top = '0'
  owlContainer.style.left = '0'
  owlContainer.style.background = 'black'

  carouselNum = 1

  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items: carouselNum
        }
    },
    navText: ["<img src='prev-button.png'>", "<img src='next-button.png'>"]
})
 
 }


//  function updateOwlCarouselResponsive(items) {
//   $('.owl-carousel').owlCarousel({
//       loop: true,
//       margin: 10,
//       nav: true,
//       responsive: {
//           0: {
//               items: 1
//           },
//           600: {
//               items: 3
//           },
//           1000: {
//               items: items // Set the 'items' parameter here
//           }
//       },
//       navText: ["<img src='prev-button.png'>", "<img src='next-button.png'>"]
//   });
// }

// updateOwlCarouselResponsive(3)