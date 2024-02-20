document.addEventListener("DOMContentLoaded", function() {
    var images = document.querySelectorAll(".image");
    var currentIndex = 0;

    function transitionImages() {
        var currentImage = images[currentIndex];
        var nextIndex = (currentIndex + 1) % images.length;
        var nextImage = images[nextIndex];

        currentImage.style.opacity = "0";
        nextImage.style.opacity = "1";
        nextImage.style.display = "block";

        currentIndex = nextIndex;

        setTimeout(transitionImages, 3000); // Change 3000 to the desired delay in milliseconds
    }

    setTimeout(transitionImages, 3000); // Initial delay
});