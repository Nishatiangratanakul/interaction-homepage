
  // Check if audio state is stored in session storage
  var isAudioPlaying = sessionStorage.getItem('isAudioPlaying');

  // If audio state is not set or is set to 'true', play the audio
  if (isAudioPlaying === null || isAudioPlaying === 'true') {
    document.getElementById('backgroundAudio').play();
  }

  // Function to toggle audio playback
  function toggleAudio() {
    var audio = document.getElementById('backgroundAudio');
    if (audio.paused) {
      audio.play();
      sessionStorage.setItem('isAudioPlaying', 'true');
    } else {
      audio.pause();
      sessionStorage.setItem('isAudioPlaying', 'false');
    }
}

  window.onbeforeunload = function() {
    sessionStorage.setItem('isAudioPlaying', document.getElementById('backgroundAudio').paused ? 'false' : 'true');
  };

  document.addEventListener('DOMContentLoaded', function() {
    // Get the popup element
    var popup = document.getElementById('popup');
  
    // Get the buttons to enable/disable audio
    var enableAudioBtn = document.getElementById('enableAudioBtn');
    var disableAudioBtn = document.getElementById('disableAudioBtn');
  
    // Show the popup
    popup.style.display = 'block';
  
    // Add event listeners to the buttons
    enableAudioBtn.addEventListener('click', function() {
      // Code to enable autoplay audio
      // For example, play background audio
      document.getElementById('backgroundAudio').play();
      // Hide the popup
      popup.style.display = 'none';
    });
  
    disableAudioBtn.addEventListener('click', function() {
      // Hide the popup without playing audio
      popup.style.display = 'none';
    });
  });
  // Function to load page content via AJAX and apply background music state
function loadPage(page) {
    // Preload the content of the next page
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        // Apply the background music state
        applyBackgroundMusicState();
        // Load the new page content
        document.getElementById("content").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", page, true);
    xhttp.send();
  }
  
  // Function to apply background music state
  function applyBackgroundMusicState() {
    var audio = document.getElementById('backgroundAudio');
    var isAudioPlaying = localStorage.getItem('isAudioPlaying');
  
    if (isAudioPlaying === 'true') {
      audio.play();
    } else {
      audio.pause();
    }
  }
  
  // Keep playing audio when navigating pages
  window.addEventListener("load", function() {
    applyBackgroundMusicState(); // Apply background music state on initial load
  
    document.addEventListener("click", function(event) {
      if (event.target.tagName.toLowerCase() === "a") {
        localStorage.setItem('isAudioPlaying', 'true');
      }
    });
  });
  
  // Save audio state when the page is unloaded
  window.addEventListener("beforeunload", function() {
    var audio = document.getElementById('backgroundAudio');
    if (audio.paused) {
      localStorage.setItem('isAudioPlaying', 'false');
    } else {
      localStorage.setItem('isAudioPlaying', 'true');
    }
  });
  

  // Flashlight effect
document.addEventListener("DOMContentLoaded", function() {
  $('section').mousemove(function(e) {
      let x = e.pageX;
      let y = e.pageY;

      $('.overlay').css('display', 'none');
      $('.light').css('background','radial-gradient(circle at ' + x + 'px ' + y + 'px, transparent, #000 30%)');
  });
});

