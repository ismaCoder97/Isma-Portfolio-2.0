const hamburgerButton= document.getElementById("hamburger");
const navList= document.getElementById("navList");

function toggleButton(){
    navList.classList.toggle("show");
    console.log("Click");
}

hamburgerButton.addEventListener("click",toggleButton);