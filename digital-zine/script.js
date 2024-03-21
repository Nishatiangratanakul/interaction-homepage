// Define an array of image paths
const imagePaths = [
    'assets/photos/food-1.jpeg',
    'assets/photos/food-2.jpg',
    'assets/photos/food-3.jpg',
    'assets/photos/food-4.jpg',
    'assets/photos/food-5.jpg',
    'assets/photos/food-6.jpeg',
    'assets/photos/food-7.jpg',
    'assets/photos/food-8.jpeg',
    'assets/photos/food-9.jpg',
    'assets/photos/food-10.jpg',
];

let intervalId; // Variable to store the interval ID

// Function to create and append an image to the overlay
function createOverlayImage(imageSrc) {
    const img = document.createElement('img');
    img.src = imageSrc;
    img.classList.add('overlay-image');
    // Set a fixed position for the overlay images
    img.style.position = 'fixed';
    // Adjust the range of random positions
    img.style.top = Math.random() * (window.innerHeight - 100) + 'px'; 
    img.style.left = Math.random() * (window.innerWidth - 100) + 'px'; 
    document.getElementById('overlay').appendChild(img); // Append images directly to the overlay
}

// Function to display images continuously in sequence
function displayImagesContinuously(images) {
    intervalId = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * images.length); // Randomly select an image
        createOverlayImage(images[randomIndex]); // Create and append the selected image
    }, 1000); // Adjust the interval as needed
}

// Call the function to display images continuously
displayImagesContinuously(imagePaths);

// Function to clear popups when the button is clicked
function clearPopups() {
    clearInterval(intervalId); // Clear the interval
    const overlay = document.getElementById('overlay');
    while (overlay.firstChild) {
        overlay.removeChild(overlay.firstChild); // Remove all overlay images
    }
}

// Add event listener to the clear button after the DOM has loaded
document.addEventListener('DOMContentLoaded', function () {
    const clearButton = document.getElementById('clearButton');
    clearButton.addEventListener('click', clearPopups);
});
