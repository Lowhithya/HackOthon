document.addEventListener('DOMContentLoaded', function() {
        // Function to close and elapse the sideBar
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

        // Function to write and display messages in Page
        const messagesContainer = document.getElementById('messagesContainer');
        const postForm = document.getElementById('postForm');
        const messageInput = document.getElementById('messageInput');
        const imageInput = document.getElementById('imageInput');
        const imageIcon = document.getElementById('imageIcon');
    
        function displayMessages() {
            const messages = JSON.parse(localStorage.getItem('messages')) || [];
            messagesContainer.innerHTML = ''; // Clear the container
    
            messages.forEach((message, index) => {
                const messageElement = document.createElement('div');
                messageElement.className = 'message';
                messageElement.innerHTML = `
                    <p>${message.text}</p>
                    ${message.image ? `<img src="${message.image}" alt="Image" class="post-image" onclick="toggleImageSize(this)">` : ''}
                    <button onclick="deleteMessage(${index})">Delete</button>
                `;
                messagesContainer.appendChild(messageElement);
            });
    
            // Scroll to the bottom of the container
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }
    // Store messages in Local Storage
        function saveMessage(message) {
            const messages = JSON.parse(localStorage.getItem('messages')) || [];
            messages.push(message);
            localStorage.setItem('messages', JSON.stringify(messages));
            displayMessages();
        }
    //Function to delete the message 
        function deleteMessage(index) {
            let messages = JSON.parse(localStorage.getItem('messages')) || [];
            messages.splice(index, 1);
            localStorage.setItem('messages', JSON.stringify(messages));
            displayMessages();
        }
    // Function to increase or decrease the image size
        function toggleImageSize(img) {
            if (img.classList.contains('thumbnail')) {
                img.classList.remove('thumbnail');
            } else {
                img.classList.add('thumbnail');
            }
        }
    
        window.deleteMessage = deleteMessage; // Make deleteMessage globally accessible
        window.toggleImageSize = toggleImageSize; // Make toggleImageSize globally accessible
    
        imageIcon.addEventListener('click', function() {
            imageInput.click(); // Trigger the file input click
        });
    
        postForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const messageText = messageInput.value.trim();
            const messageImage = imageInput.files[0];
    
            if (messageText || messageImage) {
                const reader = new FileReader();
                reader.onload = function(event) {
                    const message = {
                        text: messageText,
                        image: event.target.result
                    };
                    saveMessage(message);
                    messageInput.value = ''; // Clear the input
                    imageInput.value = ''; // Clear the image input
                };
    
                if (messageImage) {
                    reader.readAsDataURL(messageImage);
                } else {
                    const message = {
                        text: messageText,
                        image: null
                    };
                    saveMessage(message);
                    messageInput.value = ''; // Clear the input
                }
            }
        });
    
        // Initial display of messages
        displayMessages();
    });
    





