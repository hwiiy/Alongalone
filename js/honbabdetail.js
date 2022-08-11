const profileImg = document.querySelector(".detail_img")
const popup = document.getElementById("popup")
const body = document.querySelector("body")


function showProfile(){
    const popupValue = popup.classList;
    if(popupValue.contains("hidden")){
        popup.classList.remove("hidden");
    } else {
        popup.classList.add("hidden");
    }
    
}

profileImg.addEventListener("click",showProfile)