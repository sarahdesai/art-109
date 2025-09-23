console.log("hello");

document.querySelector("#image-1").addEventListener("click", function(){
    document.querySelector("#image-1").style.visibility = "hidden";
    //document.querySelector("#image-1").style.display = "none";
})

document.querySelector("#image-2").addEventListener("click", function(){
    document.querySelector("#image-2").style.visibility = "hidden";
})

document.querySelector("#image-3").addEventListener("click", function(){
    document.querySelector("#image-3").style.visibility = "hidden";
})

document.querySelector("#image-4").addEventListener("click", function(){
    document.querySelector("#image-4").style.visibility = "hidden";
})

document.querySelector("#image-5").addEventListener("click", function(){
    document.querySelector("#image-5").style.visibility = "hidden";
})

document.querySelector("#image-6").addEventListener("click", function(){
    document.querySelector("#image-6").style.visibility = "hidden";
})

let pageTitle = document.querySelector("#page-title");

// Javascript Timeout changes h1 title after 3 sec
setTimeout(function(){
    pageTitle.style.color = "pink";
}, 3000);

// Click event on header changes background color
document.querySelector("header").onclick = function() {
    // console.log("clicked header");
    document.querySelector("body").style.backgroundColor = "black";
}