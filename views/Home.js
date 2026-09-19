// main.js
document.addEventListener('DOMContentLoaded', function() {
    // Find the login link element
    var loginLink = document.getElementById('loginLink');
    
    // Attach a click event listener to the login link
    loginLink.addEventListener('click', function(event) {
        // Prevent the default behavior of the link (page reload)
        event.preventDefault();
        
        // Navigate to the login/signup page
        window.location.href = 'login.html';
    });
});
document.getElementById("notificationToggle").addEventListener("click", function() {
  var dropdown = document.getElementById("notificationDropdown");
  if (dropdown.style.display === "none" || dropdown.style.display === "") {
    dropdown.style.display = "block";
  } else {
    dropdown.style.display = "none";
  }
});

// Close dropdown if user clicks outside
window.addEventListener("click", function(event) {
  if (!event.target.matches('.notification-button')) {
    var dropdown = document.getElementById("notificationDropdown");
    if (dropdown.style.display === "block") {
      dropdown.style.display = "none";
    }
  }
});
var ter = gsap.timeline();

ter.
  from(".leftsection", {
    x: -100,
    duration: "1.2",
    opacity : 0
  })
  .from(".rightsec", {
    x: 100,
    duration: "1.2",
    opacity : 0,
    delay : "-1"
  })
  .from(".middlesection", {
    scale: "0",
    opacity: 0,
    duration: 1.2,
    delay:"-1"
  })
  .from(".footer", {
  y: 10,
    duration: "1.2",
    opacity : 0,
    delay : "-1"
  })