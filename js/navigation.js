const hamburger = document.querySelector(".hamburger")
const navlist = document.querySelector(".navlist")

hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle("active")
    navlist.classList.toggle("active")
})
navlist.addEventListener('click',()=>{
    hamburger.classList.remove("active")
})
