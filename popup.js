
document.getElementById("form").addEventListener("submit", () => {
    browser.tabs.query({
        currentWindow: true
    }).then((tabs) => {
        if (Number.isInteger(imageCount.value.length) || imageCount.value > 0) {
            for (let tab of tabs) {

                browser.tabs.sendMessage(tab.id, {
                    command: "downloadImages",
                    imageCount: imageCount.value
                }).catch((err) => {
                    alert(err);
                    return;
                });

            }
        } else {
            alert("Invalid Image Count");
        }
    });
    imageCount.style.background = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`;
});

const imageCount = document.getElementById("image-count");
const sldrImageCount = document.getElementById("sldr-image-count");

sldrImageCount.addEventListener("change", () => {
    imageCount.value = sldrImageCount.value;
});













