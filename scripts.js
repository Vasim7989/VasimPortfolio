document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you for your message! I'll get back to you soon.");
    // Here you can add AJAX code to send form data to your email or server.
});
