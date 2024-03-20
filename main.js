
let nagationBar = document.getElementById("navcolor");
let backgound = document.getElementById("background");
let fore = document.getElementById("foreground");
let textm = document.getElementById("home-main-text");
let links = document.querySelectorAll("link");

document.addEventListener("scroll", parallex);
function parallex() {
    var positionPg = window.pageYOffset;
    if (positionPg < 200) {
        nagationBar.style.backgroundColor="transparent";
    }else{
        nagationBar.style.backgroundColor="#002e74";
    }
    var value = window.scrollY;
    backgound.style.top = value * 0.05 + "px";
    textm.style.top = value * 0.3 + "px";
    fore.style.filter = "blur(" + value * 0.005 + "px)";
}
//flip the card one
let flipOne = document.getElementById("flipcard");
let flipOneInner =document.getElementById("flipcardinner");
let flipOnefront =document.getElementById("flipcardfront");

flipOne.addEventListener("click", flipfuction);
function flipfuction(){
    flipOneInner.classList.toggle("flipcontnt")
    flipOnefront.classList.toggle("flipcontnt")
}                    
//flip the card two
let flipTwo = document.getElementById("flipcardtwo");
let flipTwoInner =document.getElementById("flipcardtwoinner");
let flipTwofront =document.getElementById("flipcardtwofront");

flipTwo.addEventListener("click", fliptwofuction);
function fliptwofuction(){
    flipTwoInner.classList.toggle("flipcontnt")
    flipTwofront.classList.toggle("flipcontnt")
}
//flip the card Three
let flipThree = document.getElementById("flipcardthree");
let flipThreeInner =document.getElementById("flipcardthreeinner");
let flipThreefront =document.getElementById("flipcardthreefront");

flipThree.addEventListener("click", flipThreefuction);
function flipThreefuction(){
    flipThreeInner.classList.toggle("flipcontnt")
    flipThreefront.classList.toggle("flipcontnt")
}