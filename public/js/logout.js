const blogLogout = async() => {
    const response = await fetch(`/api/users/logout`, {
        method:'POST',
        headers: {'Content-Type': 'application/json'},
    });

    if(response.ok) {
        document.location.replace('/');
    } else {
        alert('Fail to logout');
    }
};

// Added event listener to the logout button
const blogLogoutButton = document.querySelector('#blog-logout');
if (blogLogoutButton) {
    blogLogoutButton.addEventListener('click', blogLogout);
}