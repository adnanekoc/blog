// Basic JavaScript for form submissions and interactivity

document.getElementById('subscribeForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thanks for subscribing!');
});

document.getElementById('commentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let commentText = document.getElementById('commentText').value;
    let commentList = document.getElementById('comment-list');
    let newComment = document.createElement('li');
    newComment.innerHTML = `You: ${commentText}`;
    commentList.appendChild(newComment);
    document.getElementById('commentText').value = '';
});
