// Function to get details from user and store them in local storage!
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const house = document.getElementById('house').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;

    const user = {
        name: name,
        house: house,
        phone: phone,
        password: password
    };

    // Save user data to local storage
    localStorage.setItem(phone, JSON.stringify(user));

    alert('Signup successful! You can now login.');

    // Redirect to login page
    window.location.href = 'login.html';
});
