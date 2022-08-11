const profileImg = document.querySelector(".detail_img")
const popup = document.getElementById("popup")
const popupBg = document.getElementsByTagName("main")

function showProfile(){

    popup.classList.remove("hidden");
  
}

profileImg.addEventListener("click",showProfile)