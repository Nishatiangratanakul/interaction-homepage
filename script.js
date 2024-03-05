const nishaText = document.getElementById("nisha");
const fonts = ["Arial", "Times New Roman", "Courier New", "Verdana", "Georgia"];
let fontIndex = 0;
let intervalId;

nishaText.addEventListener("mouseenter", () => {
  intervalId = setInterval(() => {
    nishaText.style.fontFamily = fonts[fontIndex]; 
    fontIndex = (fontIndex + 1) % fonts.length;
  }, 200); 
});

nishaText.addEventListener("mouseleave", () => {
  clearInterval(intervalId);
  nishaText.style.fontFamily = "Space Grotesk, sans-serif";  
});
