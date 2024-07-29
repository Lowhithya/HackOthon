window.onload = function() {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');

    if (!isLoggedIn) {
        // Redirect to login page if not logged in
        window.location.href = 'login.html';
    }
};
