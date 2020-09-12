let mainView = document.querySelector('main');
let urlInput = document.querySelector('#urlInput');
let inputButton = document.querySelector('#getInput');
let fetchImage = document.querySelector('.image-holder');
let imagee = document.querySelector('#img');
let downloadImage = document.querySelector('#vid');
let errorView = document.querySelector('.error');
let errorText = document.querySelector('#errorText');


let createView = (videoID) => {
    let imageUrl = `https://img.youtube.com/vi/${videoID}/maxresdefault.jpg`;
    // let viewHolder = document.createElement('div');
    // viewHolder.className = 'image-holder';
    // let imageView = document.createElement('img');
    // imageView.setAttribute('alt', 'Thumbnail by ThumbnailFetcher');
    // imageView.src = imageUrl;
    // let downloadLink = document.createElement('a');
    // downloadLink.innerText = 'Download Image'
    // downloadLink.href = imageUrl;
    // downloadLink.setAttribute('target', '_blank');
    // viewHolder.innerHTML = imageView.outerHTML + downloadLink.outerHTML;
    // mainView.appendChild(viewHolder);
    // urlInput.value = "";

    imagee.src = imageUrl;
    downloadImage.setAttribute('href', imageUrl);
    fetchImage.style.display = 'block';
    urlInput.value = "";

}

inputButton.addEventListener('click', () => {
    let url = urlInput.value;

    if (url == "") {
        errorText.innerHTML = `The URL cannot be blank`;
        errorView.style.display = 'block';
        // navigator.vibrate(200);
        setTimeout(() => {
            errorView.style.display = 'none';
        }, 2345);

    } else {
        let videoID = url.split('/');
        let host = videoID[2];
        videoID = videoID[3];
        if (host == 'youtube.com' || host == 'youtu.be' || host == 'www.youtube.com') {
            console.log(`Successfully Fetched ${videoID}`);
            createView(videoID);
        } else {
            urlInput.value = "";
            errorText.innerHTML = `The requested URL is invalid`;
            errorView.style.display = 'block';
            // navigator.vibrate(200);
            setTimeout(() => {
                errorView.style.display = 'none';
            }, 2345);
        }

    }

});

urlInput.addEventListener('focus', () => {
    if (fetchImage.style.display == 'block') {
        fetchImage.style.display = 'none';
    }
});