document.addEventListener("DOMContentLoaded", function() {
    const commentForm = document.getElementById("commentForm");
    const commentContainer = document.querySelector(".comment1-container");

    commentForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const commentInput = document.getElementById("commentInput");
        const commentText = commentInput.value.trim(); // Trim leading/trailing spaces

        if (commentText !== "") {
            const commentDiv = document.createElement("div");
            commentDiv.classList.add("comment1-box");

            const profileImage = document.createElement("img");
            profileImage.classList.add("profile-image");
            profileImage.src = "images/1.수박게임.png";
            profileImage.alt = "프로필 이미지";

            const commentContent = document.createElement("div");
            commentContent.classList.add("comment-content");
            commentContent.textContent = commentText;

            commentDiv.appendChild(profileImage);
            commentDiv.appendChild(commentContent);
            commentContainer.appendChild(commentDiv);

            commentInput.value = "";
        }
    });
});
