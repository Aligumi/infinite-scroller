const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");

let ready = false;
let  imagesLoaded = 0;
let totalImages = 0;
let photosArray = [];
// Check if all image were loaded

function imageLoaded() {
    imagesLoaded++;
    if (imagesLoaded === totalImages) {
        ready = true;   
        loader.hidden = true;   
    }
}
// function to set attributes on DOM elements
function setAttributes(element, attributes) {
        for (const key in attributes) {   
                element.setAttribute(key, attributes[key]);
            }
        }
function displayPhotos() {
    photosArray.forEach((photo) => {
        imagesLoaded = 0;
        totalImages = photosArray.length;
        // create <a> to link to api site     
        const item = document.createElement('a');
         setAttributes(item, {
         href: photo.links.html,
         target: '_blank'
      });
        // create <img> for photo
        const img = document.createElement('img');
        setAttributes(img, {
        src: photo.urls.regular,
        alt: photo.alt_description,
        title: photo.alt_description            
    });
    // Check when each is finished loading
    img.addEventListener("load", imageLoaded);
        item.appendChild(img);
        imageContainer.appendChild(item);
    });
}

// Unsplash Api
const count = 2;
const apiKey3 = "dlVT0GdSB_Fbd4RgtpqaV85zlnOtppRp8dj69mXctR0";
const apiKey2 = "gnvRUUS_xVW0PeMAkFfbhF3rML8DizQiHxQ0SJrwVsQ";
const apiKey = "zpi9qDqZqS-KJiL2jRKPFLJqa_vs1_Wp5hE3TO2eCSY";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey3}&count=${count}`;



// Get photo from api
async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        displayPhotos();
    }
    catch (error){
        alert(error);
    }
}

// 
window.addEventListener("scroll", () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && ready) {
        ready = false;
        getPhotos()      
    } 
});
getPhotos();
