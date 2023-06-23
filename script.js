// UNsolash Api
const count = 10;
const apiKey = "zpi9qDqZqS-KJiL2jRKPFLJqa_vs1_Wp5hE3TO2eCSY";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Get photo from api
async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
    }
    catch (error){
        console.log(error);
    }
}

// On Load
getPhotos();