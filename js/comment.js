// 모든 comment-box 요소 선택
const commentBoxes = document.querySelectorAll('.comment-box');

commentBoxes.forEach(commentBox => {
    // 현재 comment-box 내의 요소 선택
    const commentContent = commentBox.querySelector('.comment-content');
    const textContent = commentContent.textContent.length;

    const profileImage = commentBox.querySelector('.profile-image');
    const imageWidth = profileImage.getBoundingClientRect().width;

    // comment-box의 최소 너비
    const minCommentBoxWidth = 50; // 최소 너비를 조정해보세요

    // comment-box의 너비를 textContent의 길이와 이미지의 너비를 고려하여 설정
    const newCommentBoxWidth = Math.max(minCommentBoxWidth + (textContent * 8) + imageWidth);

    // comment-box에 너비 설정
    commentBox.style.width = newCommentBoxWidth + 'px';
});
