const newBlogCommentFormHandler = async (event) => {
    event.preventDefault();

    const post_id = parseInt(window.location.pathname.split('/').pop());

    const content = document.querySelector('#content-new-blog-comment').value.trim();

    if(content) {
        const response = await fetch(`/api/comment`, {
            method: 'POST',
            body: JSON.stringify({comment_description: content, post_id}),
            headers: {'Content-Type': 'application/json'},
        });

        if(response.ok) {
            document.location.reload();
        } else {
            console.log('Response status:', response.status);
            console.log('Response description:', await response.description());
            alert('Cannot create your comment');

        }
    }
};

const newBlogCommentForm = document.querySelector('.new-blog-comment-form');
if(newBlogCommentForm) {
    newBlogCommentForm.addEventListener('submit', newBlogCommentFormHandler);
}