const open = document.querySelector(".detail_img")
const popup = document.getElementById("popup")
const body = document.querySelector("body")
const close = document.querySelector(".profile_img")
const blur = document.querySelector(".blur")
const header = document.querySelector("header")

function init(){
    open.addEventListener("click", function(){
        popup.classList.remove("hidden")
        blur.classList.remove("hidden")
        header.classList.add("hidden")
    })
    close.addEventListener("click",function(){
        popup.classList.add("hidden")
        blur.classList.add("hidden")
        header.classList.remove("hidden")
    })
}

init();
// heart btn 

const countHeart = document.querySelector("#heartBtn")


let count = 0;
let result = countHeart.innerText;
function counter() {
    if(count %2 == 0) {
        countHeart.classList.add("btn_clicked");
        result = parseInt(result)+1;
        console.log(result)
    } else {
        countHeart.classList.remove("btn_clicked");
        result = parseInt(result)-1;
    }
    count+=1;
   
}

