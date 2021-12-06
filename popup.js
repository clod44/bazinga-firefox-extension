




const downloadBtn = document.getElementById("downloadBtn");
const countRange = document.getElementById("downloadRange");
countRange.defaultValue = 50;

const count = document.getElementById("downloadCount");
count.defaultValue = 50;
    

downloadBtn.addEventListener("click", () =>{
    browser.tabs.query({
        currentWindow: true
    }).then((tabs)=>{
        for(let tab of tabs){
            browser.tabs.sendMessage(tab.id,{
                command: "downloadImages",
                imageCount: count.value
            }).catch((err) => {
                alert(err);
                return;
            });
        }
    });
    //document.body.style.background = `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;
});


countRange.addEventListener("change",()=>{
    count.value = countRange.value;
});










