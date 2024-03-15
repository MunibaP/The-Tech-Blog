const blogLoginFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#username_blog_login').value.trim();
    const password = document.querySelector('#password_blog_login').value.trim();

    if(username && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: {'Content-Type': 'application/json'},
        });

        if(response.ok) {
            document.location.replace('/');
        } else {
            alert('Fail to login');
        }
    }
};

const blogLoginForm = document.querySelector('.blog-login-form');
if(blogLoginForm) {
    blogLoginForm.addEventListener('submit', blogLoginFormHandler );
}