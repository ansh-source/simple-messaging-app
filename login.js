document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const password = document.getElementById("password").value;
    
    if (password === "yourSecretPassword") {
        window.location.href = "chat.html"; // Redirect to chat page after login
    } else {
        alert("Invalid password.");
    }
});
