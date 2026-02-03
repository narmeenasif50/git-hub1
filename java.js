document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("loginForm");
    const modal = document.getElementById("modal");
    const modalMessage = document.getElementById("modalMessage");
    const closeBtn = document.querySelector(".close");

    form.addEventListener("submit", function(e) {
        e.preventDefault();

        // Set modal message
        modalMessage.innerText = " Login Successful!  Welcome to your dashboard.";

        // Show modal
        modal.style.display = "block";

        // Clear form
        form.reset();
    });

    // Close modal when X is clicked
    closeBtn.addEventListener("click", function() {
        modal.style.display = "none";
    });

    // Close modal when clicking outside the modal content
    window.addEventListener("click", function(e) {
        if(e.target === modal) {
            modal.style.display = "none";
        }
    });
});

