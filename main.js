

function exitFullScreen() {
  const fullScreen = document.querySelector('.full-screen-carousel-wrapper')
  fullScreen.style.display = 'none'
}





/*
document.querySelector('.carousel-wrapper').addEventListener('click', function(event) {
  if (!event.target.classList.contains("arrow")) {
    const fullScreen = document.querySelector('.full-screen-carousel-wrapper');
    fullScreen.style.display = 'flex';
  }
});
*/





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

// function stopScroll() {
//   const frontPage =   document.querySelector('.main-front-page')

//   if (frontPage.style.position !== 'fixed'){
//     frontPage.style.position = 'fixed'
//   } else if (frontPage.style.position === 'fixed' ){
//   frontPage.style.position = 'static'
//   }
// }

// function stopScrollShows() {
//   const frontPage =   document.querySelector('.shows-column')

//   if (frontPage.style.position !== 'fixed'){
//     frontPage.style.position = 'fixed'
//   } else if (frontPage.style.position === 'fixed' ){
//   frontPage.style.position = 'static'
//   }
// }


// function stopScrollProjects() {
//   const frontPage =   document.querySelector('.music-column')

//   if (frontPage.style.position !== 'fixed'){
//     frontPage.style.position = 'fixed'
//   } else if (frontPage.style.position === 'fixed' ){
//   frontPage.style.position = 'static'
//   }
// }


function stopScroll(page) {
  const frontPage =   document.querySelector(`.${page}`)

  if (frontPage.style.position !== 'fixed'){
    frontPage.style.position = 'fixed'
  } else if (frontPage.style.position === 'fixed' ){
  frontPage.style.position = 'static'
  }
}





