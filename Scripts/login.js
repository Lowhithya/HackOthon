document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;

    // Create AJAX request
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'login.php', true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    xhr.onload = function() {
        if (this.status === 200) {
            const response = JSON.parse(this.responseText);
            if (response.success) {
                // Store session information
                sessionStorage.setItem('isLoggedIn', 'true');
                // Redirect to Dashboard page
                window.location.href = 'DashBoard.html';
            } else {
                alert('Invalid credentials');
            }
        }
    };

    xhr.send(`phone=${phone}&password=${password}`);
});
