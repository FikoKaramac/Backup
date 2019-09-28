const dermatologBtn = document.querySelector(".dermatolog-btn");
const dermatologText = document.querySelector(".dermatolog");

// DERMATOLOG Func
dermatologBtn.addEventListener("click", function(){
    if(dermatologText.style.display === "block"){
        dermatologText.style.display = "none";
        this.textContent = "ПОВЕЌЕ";
    } else{
        dermatologText.style.display = "block"; 
        this.textContent = "ЗАТВОРИ";
    }
})



const estBtn = document.querySelector("#estetika-btn");
const headersLi = document.querySelectorAll(".headerLi");
const underLi = document.querySelectorAll(".underLiHead");
var textUnderLi = document.querySelector(".underLiHead").querySelector("p");
const underLiBody = document.querySelectorAll(".underLiBody");

estBtn.addEventListener("click", function(){
    for(var i = 0; i < headersLi.length ; i++){
        if (headersLi[i].style.display === "block") {
            headersLi[i].style.display = "none";
            removeElements();
            estBtn.textContent = "ПОВЕЌЕ"; 
        } else {
            headersLi[i].style.display = "block";
            estBtn.textContent = "ЗАТВОРИ";
        }
    }
})

headersLi[0].addEventListener("click", function(){
for(var i = 0; i < underLi.length; i++ )
    if(underLi[i].style.display === "block"){
        underLi[i].style.display = "none";
    } else {
        underLi[i].style.display = "block";
    }

})

headersLi[1].addEventListener("click", function(){
    for(var i = 0; i < underLiBody.length; i++ )
        if(underLiBody[i].style.display === "block"){
            underLiBody[i].style.display = "none";
        } else {
            underLiBody[i].style.display = "block";
        }
    
})
    

function removeElements(){
    for(var i = 0; i < underLi.length; i++){
        underLi[i].style.display = "none";
    }
    for(var i = 0; i < textUnderLi.length; i++){
        textUnderLi[i].style.display = "none";
    }
    for(var i = 0; i < underLiBody.length; i++){
        underLiBody[i].style.display = "none";
    }
}



const cosmeticBtn = document.querySelector(".cosmetic-btn");
const cosmeticText = document.querySelector(".cosmetic");

cosmeticBtn.addEventListener("click", function(){
    if(cosmeticText.style.display === "block"){
        cosmeticText.style.display = "none";
        this.textContent = "ПОВЕЌЕ";
    } else{
        cosmeticText.style.display = "block"; 
        this.textContent = "ЗАТВОРИ";
    }
})