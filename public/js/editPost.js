const post_id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
];

// Function to update post
const updateBlogPostFormHandler = async(event) => {
    event.preventDefault();

    const title = document.querySelector('#title-update-blog-post').value.trim();
    const content = document.querySelector('#content-update-blog-post').value.trim();

    if(title && content) {
        const response = await fetch(`/api/posts/${post_id}`, {
            method: 'PUT',
            body: JSON.stringify({title, content}),
            headers: {'Content-Type': 'application/json'},
        });

        if(response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Fail to update post');
        }
    }
};

// Function to delete post
const deleteBlogPostFormHandler = async(event) => {
    event.preventDefault();

    const response = await fetch(`/api/posts/${post_id}`, {
        method: 'DELETE',
    });

    if(response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert('Fail to delete post');
    }
};

// Added update Event listeners
const updateBlogPostButton = document.querySelector('#update-blog-post');

if(updateBlogPostButton) {
    updateBlogPostButton.addEventListener('click', updateBlogPostFormHandler );
}

// Added delete Event listeners
const deleteBlogPostButton = document.querySelector('#delete-blog-post');

if(deleteBlogPostButton) {
    deleteBlogPostButton.addEventListener('click', deleteBlogPostFormHandler );
}

