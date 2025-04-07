let photoContainer = document.getElementById('photo-container');

axios.get("https://lanciweb.github.io/demo/api/pictures/")
    .then(resp => {
        const photos = resp.data;
        console.log(photos);
        for (let i = 0; i < photos.length; i++) {
            let singlePhoto = `<div class="bg-white col-8 p-3 col-md-5 col-lg-3 my-3 mx-2 photo-holder d-flex flex-column align-items-center">
                                    <img class="img-fluid mb-2" src="${photos[i].url}" alt="">
                                    <img class="pin" src="./img/pin.svg" alt="">
                                    <p class="align-self-start">${photos[i].date}</p>
                                    <h5 class="align-self-start"> ${photos[i].title}</h5>    
                                </div>`
            photoContainer.innerHTML += singlePhoto;
        }
    })