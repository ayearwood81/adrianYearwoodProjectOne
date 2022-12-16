// change the picture in the "ecosystem" section of the home page when the chevron gets clicked on

// add an eventlistener to the buttons that listens for a click

// change the photo to a new picture.

//target chevron buttons
const galleryButtonLeft = document.querySelector(`.left`);
const galleryButtonRight = document.querySelector(`.right`);

// set variable for gallery image number
let galleryNumber = 3

// make event listener for the left facing chevron
galleryButtonLeft.addEventListener("click", function(){
    // reset to the top of the gallery when getting to the beginning
    if (galleryNumber == 1) {
        galleryNumber = 10;
        document.querySelector(`#ecosystemImage`).src = `./assets/home-${galleryNumber}.jpeg`;
    // otherwise cycle to next image
    } else {
        galleryNumber--;
        document.querySelector(`#ecosystemImage`).src = `./assets/home-${galleryNumber}.jpeg`;
    }
});

// make event listener for the right facing chevron
galleryButtonRight.addEventListener("click", function(){
    console.log("right");
    // reset to the bottom of the gallery when getting to the end
    if (galleryNumber == 10) {
        galleryNumber = 1;
        document.querySelector(`#ecosystemImage`).src = `./assets/home-${galleryNumber}.jpeg`;
        document.querySelector(`#ecosystemImage`).alt = `gallery item #${galleryNumber}`;
    // otherwise cycle to next image
    } else {
        galleryNumber++;
        document.querySelector(`#ecosystemImage`).src = `./assets/home-${galleryNumber}.jpeg`;
        document.querySelector(`#ecosystemImage`).alt = `gallery item #${galleryNumber}`;
    }
});