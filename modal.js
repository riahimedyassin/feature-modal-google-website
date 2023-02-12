//MODAL SCRIPT
let loginButton=document.querySelector(".login")
loginButton.addEventListener("click", ()=> {
    window.scrollTo(0,0)
    document.querySelector(".modal-custom").classList.toggle("showModal");
    document.querySelector("body").classList.toggle('body-scroll');
   
})
let myModal=document.querySelector(".modal-custom"); 
document.addEventListener("click",e=> {
if (!myModal.contains(e.target) && !loginButton.contains(e.target)) {
    myModal.classList.remove("showModal");
    document.querySelector("body").classList.remove('body-scroll');
}
})
//END OF MODAL SCRIPT