document.addEventListener("DOMContentLoaded", function() {
    const commentForm = document.getElementById('commentForm');
    const commentInput = document.getElementById('commentInput');

    commentForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevents the default form submission

        const comment = commentInput.value; // Get the comment text

        // Here you can save the 'comment' to comment.js or perform any other desired action
        // For example, if using Local Storage:
        localStorage.setItem('userComment', comment);

        // Clear the form after submission (Optional)
        commentInput.value = '';

        // Alert the user or perform any other actions upon successful submission
        alert('Comment submitted successfully!');
    });
});
