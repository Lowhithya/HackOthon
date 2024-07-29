document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;

    // Retrieve user data from local storage
    const user = JSON.parse(localStorage.getItem(phone));

    if (user && user.password === password) {
        // Store session information
        sessionStorage.setItem('isLoggedIn', 'true');
        sessionStorage.setItem('user', JSON.stringify(user));

        // Redirect to Dashboard page
        window.location.href = './DashBoard.html';
    } else {
        alert('Invalid credentials');
    }
});
