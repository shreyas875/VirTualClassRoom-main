const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});
function validateInput(input) {
  input.value = input.value.replace(/[^\d.-]/g, ''); // Allow only digits, minus, and decimal point
}
document.addEventListener("DOMContentLoaded", function () {
    const showPopupBtn = document.getElementById("showPopupBtn");
    const closePopupBtn = document.getElementById("closePopupBtn");
    const popup = document.getElementById("popup");

    showPopupBtn.addEventListener("click", function () {
        popup.style.display = "block"; // Show the pop-up when the button is clicked
    });

    closePopupBtn.addEventListener("click", function () {
        popup.style.display = "none"; // Hide the pop-up when the close button is clicked
    });
});
