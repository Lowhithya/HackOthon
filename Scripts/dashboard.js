window.addEventListener('load', function() {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    const user = JSON.parse(sessionStorage.getItem('user'));

    if (!isLoggedIn || !user) {
        // Redirect to login page if not logged in
        window.location.href = 'login.html';
    } else {
        // Display welcome message with user name
        document.getElementById('welcomeMessage').innerText = `Welcome ${user.name}!`;

        // Handle logout
        document.getElementById('logoutButton').addEventListener('click', function() {
            sessionStorage.clear();
        });
    }
});
