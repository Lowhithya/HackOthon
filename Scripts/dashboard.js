window.addEventListener('load', function() {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    const user = JSON.parse(sessionStorage.getItem('user'));

    if (!isLoggedIn || !user) {
        // Redirect to login page if not logged in
        window.location.href = 'login.html';
    } else {
        // Display welcome message with user name
         window.location.href = 'DashBoard.html';

        // Handle logout
        document.getElementById('logoutButton').addEventListener('click', function() {
            sessionStorage.clear();
        });
    }
});
document.addEventListener('DOMContentLoaded', function() {
    // Example of initializing data
    const posts = [
        { id: 1, points: 10, likes: 5, followers: 3 },
        // Add more posts as needed
    ];

    // Function to update the UI with the data
    function updatePostUI(post) {
        document.getElementById(`points${post.id}`).innerText = post.points;
        document.getElementById(`likes${post.id}`).innerText = post.likes;
        document.getElementById(`followers${post.id}`).innerText = post.followers;
    }

    // Initialize the posts
    posts.forEach(post => {
        updatePostUI(post);
    });

    // Example functions to increment values
    function addPoint(postId) {
        const post = posts.find(p => p.id === postId);
        if (post) {
            post.points++;
            updatePostUI(post);
        }
    }

    function addLike(postId) {
        const post = posts.find(p => p.id === postId);
        if (post) {
            post.likes++;
            updatePostUI(post);
        }
    }

    function addFollower(postId) {
        const post = posts.find(p => p.id === postId);
        if (post) {
            post.followers++;
            updatePostUI(post);
        }
    }

    // Example event listeners (you'll need to add buttons or other triggers for these)
    document.getElementById('post1').addEventListener('click', function() {
        addPoint(1);
        addLike(1);
        addFollower(1);
    });

    // Repeat event listeners setup for other posts if needed
});
