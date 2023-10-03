const main = document.querySelector("body")
const myCousor = document.querySelector(".cursor")

main.addEventListener("mousemove", function(e){
    myCousor.style.left = e.x +"px" 
    myCousor.style.top = e.y +"px" 

})


