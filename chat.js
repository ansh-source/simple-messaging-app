document.getElementById("messageForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const message = document.getElementById("message").value;
    
    if (message) {
        const messageDiv = document.createElement("div");
        messageDiv.textContent = message;
        document.getElementById("messages").appendChild(messageDiv);
        document.getElementById("message").value = ""; // Clear input field
    }
});
