$(document).ready(function () {
    // Define an array of image URLs
    const images = [
      "image/main_img.png",
      "image/juse.jpg",
      "image/pizza.jpg",
    ];
  
    // Initialize the current image index
    let currentImage = 0;
  
    // Function to apply CSS to all images
    function applyCSSToImages() {
      $(".main_image img").css({
        width: "700px",
        height: "500px", 
        position: "relative",
        left: "70px",
      });
    }
  
    // Initial CSS application
    applyCSSToImages();
  
    // Function to change the image
    function changeImage() {
      // Set the src attribute of the image to the next image in the array
      $(".main_image img").attr("src", images[currentImage]);
      
      // Update currentImage to the next index, looping back to 0 if it reaches the end of the array
      currentImage = (currentImage + 1) % images.length;
  
      // Apply CSS to the new image
      applyCSSToImages();
    }
  
    // Change the image every 5 seconds
    setInterval(changeImage, 5000);
  });
  