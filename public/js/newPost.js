const blogNewPostFormHandler = async(event) => {
    event.preventDefault();

    const title = document.querySelector('#title-new-blog-post').value.trim();
    const content = document.querySelector('#content-new-blog-post').value.trim();

    if(title && content) {
        const response = await fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify({title, content}),
            headers: {'Content-Type': 'application/json'},
        });

        if(response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Fail to create new post');
        }
    }
};

const blogNewPostForm = document.querySelector('.new-blog-post-form');
if(blogNewPostForm) {
    blogNewPostForm.addEventListener('submit', blogNewPostFormHandler);
}