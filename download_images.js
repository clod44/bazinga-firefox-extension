



//document.body.style.border = `10px solid rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;    


browser.runtime.onMessage.addListener((message) => {
    //document.body.style.border = `2px solid rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;

    if (message.command === "downloadImages") {
        downloadAllImages(message.imageCount);
    }
});


function downloadAllImages(maxImageCount) {
    const images = document.querySelectorAll("img");
    let success = 0;
    let failure = 0;
    for (let i = 0; i < Math.min(maxImageCount, images.length); i++) {
        const src = images[i].src;
        console.log(src, Math.random() * 999);
        if (src !== "") {
            downloadImage(images[i], src).then(() => { success++; }).catch((err) => {
                //alert(err);
                console.log(err);
                failure++;
            });
        } else {
            failure++;
        }
    };

    async function downloadImage(imageAlt, imageSrc) {
        const image = await fetch(imageSrc)
        const imageBlog = await image.blob()
        const imageURL = URL.createObjectURL(imageBlog)

        const link = document.createElement('a');
        link.href = imageURL;
        link.download = "bazinga_" + Date.now();
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        success++;
    }

    //alert(`download process completed; ${maxImageCount} Trys, ${success} Success, ${failure} Failures.`);
}









