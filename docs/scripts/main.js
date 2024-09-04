let myImage = document.querySelector("img1");

myImage.onclick = function (){
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "../pictures/img1.jpg") {
        myImage.setAttribute("src", "../pictures/img2.jpg");
    } else {
        myImage.setAttribute("src", "../pictures/img1.jpg");
    }
}

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

if(localStorage.getItem("name") === null){
    setUserName();
}
else{
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "Welcome to the website, " + storedName;
}
function setUserName() {
    let myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name",myName);
        myHeading.textContent = "Welcome to the website, " + myName;
    }
}
myButton.onclick = function(){
    setUserName();
}