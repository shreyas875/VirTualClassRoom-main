const chatMessages = document.getElementById('chat-messages');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');

sendButton.addEventListener('click', () => {
    sendMessage();
});

messageInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const messageText = messageInput.value.trim();
    if (messageText !== '') {
        displayMessage(messageText);
        messageInput.value = '';
    }
}

function displayMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}
const videoElement = document.getElementById("video");
        let isDragging = false;
        let offsetX, offsetY;

        // Get access to the user's webcam
        navigator.mediaDevices
          .getUserMedia({ video: true })
          .then(function (stream) {
            // Set the stream as the video element's source
            videoElement.srcObject = stream;
          })
          .catch(function (error) {
            console.error("Error accessing the webcam:", error);
          });

        // Handle mouse events for dragging
        videoElement.addEventListener("mousedown", (e) => {
          isDragging = true;
          offsetX = e.clientX - videoElement.getBoundingClientRect().left;
          offsetY = e.clientY - videoElement.getBoundingClientRect().top;
          videoElement.style.cursor = "grabbing"; // Change cursor while dragging
        });

        document.addEventListener("mousemove", (e) => {
          if (isDragging) {
            const newX = e.clientX - offsetX;
            const newY = e.clientY - offsetY;
            videoElement.style.left = newX + "px";
            videoElement.style.top = newY + "px";
          }
        });

        document.addEventListener("mouseup", () => {
          isDragging = false;
          videoElement.style.cursor = "grab"; // Change cursor back to grabbing
        });
        function displayText() {
              // Get the input text from the input element
              const inputElement = document.getElementById("textInput");
              const inputText = inputElement.value;

              // Get the display area element
              const displayArea = document.getElementById("displayArea");

              // Create a new paragraph element for the input text
              const paragraph = document.createElement("p");
              paragraph.textContent = inputText;
              paragraph.classList.add("displayed-text");

              // Prepend the paragraph to the display area
              displayArea.insertBefore(paragraph, displayArea.firstChild);

              // Clear the input field
              inputElement.value = "";
            }
