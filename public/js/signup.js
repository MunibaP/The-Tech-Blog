const blogSignupFormHandler = async(event) => {
    event.preventDefault();

    const username = document.querySelector('#username').value.trim();
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();

    if(username && email && password) {
        const response = await fetch('./api/users/signup', {
            method: 'POST',
            body: JSON.stringify({username, email, password}),
            headers: {'Content-Type': 'application/json'},
        });

        if(response.ok) {
            document.location.replace('/');
        } else {
            alert('Fail to signup');
        }
    }
};

const blogSignupForm = document.querySelector('#signup-form');
if (blogSignupForm) {
    blogSignupForm.addEventListener('submit', blogSignupFormHandler);
}
