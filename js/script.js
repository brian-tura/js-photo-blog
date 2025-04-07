axios.get("https://lanciweb.github.io/demo/api/pictures/")
.then(resp => {
    const photos = resp.data;
    console.log(photos);
    for(let i=0; i<photos.length; i++){
        let singlePhoto = 
    }
})