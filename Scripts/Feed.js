// Function to check wether user credentials are correct 
window.addEventListener('load', function() {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    const user = JSON.parse(sessionStorage.getItem('user'));

    if (!isLoggedIn || !user) {
        // Redirect to login page if not logged in
        window.location.href = 'login.html';
    } else {
        // Display welcome message with user name
        document.getElementById('welcomeMessage').innerText = `Welcome, ${user.name}!`;

        // Handle logout
        document.getElementById('logoutButton').addEventListener('click', function() {
            sessionStorage.clear();
        });
    }
});



document.addEventListener('DOMContentLoaded', function() {
    
// Function to toggle sideBar
        const sidebar = document.getElementById('sidebar');
        const mainContent = document.getElementById('main-content');
        const toggleSidebarButton = document.getElementById('toggleSidebar');
        const closebtn = document.getElementById('closebtn');
    
        toggleSidebarButton.addEventListener('click', function() {
            sidebar.classList.toggle('hidden');
            mainContent.classList.toggle('expanded');
        });
    
        closebtn.addEventListener('click', function() {
            sidebar.classList.add('hidden');
            mainContent.classList.add('expanded');
        });
    // Function to fetch news from API(Not working when deployed Since it is a free version!)
    async function fetchNews() {
        const url = 'https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=';//Removed API key for security reasons
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            displayNews(data.articles);
        } catch (error) {
            console.error('Error fetching news:', error);
        }
    }

    function displayNews(articles) {
        newsContent.innerHTML = '';
        articles.forEach(article => {
            const articleElement = document.createElement('div');
            articleElement.className = 'news-article';
            articleElement.innerHTML = `
                <h3>${article.title}</h3>
                <br>
                <a href="${article.url}" target="_blank" style="color:rgb(61, 98, 61)">Read more</a>
            `;
            newsContent.appendChild(articleElement);
        });
    }

    fetchNews(); // Fetch news on page load
});




