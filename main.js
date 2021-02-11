
document.querySelector(".login").addEventListener("click", ()=>{
    document.querySelector(".login-input").style.display="block";
    document.querySelector(".login").style.display="none";
})

document.querySelector(".close").addEventListener("click", ()=>{
    document.querySelector(".login-input").style.display="none";
    document.querySelector(".login").style.display="inline";
})