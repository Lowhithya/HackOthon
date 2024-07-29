document.addEventListener('DOMContentLoaded', function() {
    const messagesContainer = document.getElementById('messagesContainer');
    const postForm = document.getElementById('postForm');
    const messageInput = document.getElementById('messageInput');

    function displayMessages() {
        messagesContainer.innerHTML = ''; // Clear the container
        const messages = JSON.parse(localStorage.getItem('messages')) || [];
        messages.forEach((message, index) => {
            const messageElement = document.createElement('div');
            messageElement.className = 'message';
            messageElement.innerHTML = `
                <p>${message}</p>
                <button onclick="deleteMessage(${index})">Delete</button>
            `;
            messagesContainer.insertBefore(messageElement, messagesContainer.firstChild);
        });
    }

    function saveMessage(message) {
        const messages = JSON.parse(localStorage.getItem('messages')) || [];
        messages.push(message);
        localStorage.setItem('messages', JSON.stringify(messages));
        displayMessages();
    }

    function deleteMessage(index) {
        let messages = JSON.parse(localStorage.getItem('messages')) || [];
        messages.splice(index, 1);
        localStorage.setItem('messages', JSON.stringify(messages));
        displayMessages();
    }

    window.deleteMessage = deleteMessage; // Make deleteMessage globally accessible

    postForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const message = messageInput.value.trim();
        if (message) {
            saveMessage(message);
            messageInput.value = ''; // Clear the input
        }
    });

    // Initial display of messages
    displayMessages();
});
