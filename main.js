

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
  carousel.style.width = '80%'
  carousel.style.height = 'auto'
  carousel.style.backgroundColor = ''
  carousel.style.marginTop = '-260px'
  carousel.style.marginBottom = '90px'

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




 /* MAIN VIDEO CAROUSEL FOR MOBILE */

 let touchstartX = 0;
 let touchendX = 0;

 function checkDirection() {
  if (touchendX < touchstartX)
    document.getElementsByClassName("button-alert")[0].click();
  if (touchendX > touchstartX)
    document.getElementsByClassName("button-alert")[1].click();
 }

 var bb = document.getElementById("blue-bar");

 bb.addEventListener("touchstart", (e) => {
  touchstartX = e.changedTouches[0].screenX;
 });

 bb.addEventListener("touchend", (e) => {
  touchendX = e.changedTouches[0].screenX;
  checkDirection();
 });


 function mobileShowVideo(){
  alert('this a test')
 }