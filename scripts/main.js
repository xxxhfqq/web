let myImage = document.querySelector("img");

myImage.onclick = function (){
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "../pictures/img1.jpg") {
        myImage.setAttribute("src", "../pictures/img2.jpg");
    } else {
        myImage.setAttribute("src", "../pictures/img1.jpg");
    }
}