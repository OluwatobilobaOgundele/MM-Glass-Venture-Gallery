let myImages = [
    "images/Screenshot_20240223_190355_Instagram.jpg",
    "images/Screenshot_20240223_190400_Instagram.jpg",
    "images/Screenshot_20240223_190412_Instagram.jpg",
    "images/Screenshot_20240223_190403_Instagram.jpg",
    "images/Screenshot_20240223_190435_Instagram.jpg",
    "images/Screenshot_20240223_190444_Instagram.jpg",
    "images/Screenshot_20240223_190449_Instagram.jpg"
]

 let img = document.getElementById("image");


 let imageIndex = 0

//&& means and
function nextButton(){
     if (imageIndex >= 0 && imageIndex < myImages.length - 1 ){
       imageIndex ++ 
     }
     else {
      myImages.length - 1
     }      

     img.src = myImages[imageIndex]
}


function prevButton() {
    if (imageIndex > 0 && imageIndex < myImages.length ){
      imageIndex --

    } else {
      myImages.length - 1
    }
    img.src = myImages[imageIndex]

}
