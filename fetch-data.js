document.addEventListener('DOMContentLoaded', function() {
    // Asynchronous function to fetch and display user data
    async function fetchUserData() {
        const apiUrl = 'https://jsonplaceholder.typicode.com/users'; // Define the API URL
        const dataContainer = document.getElementById('api-data'); // Select the data container element

        try {
            // Fetch data from API
            const response = await fetch(apiUrl);
            // Convert response to JSON
            const users = await response.json();

            // Clear the existing loading message
            dataContainer.innerHTML = '';

            // Create a <ul> element to hold the list of users
            const userList = document.createElement('ul');

            // Loop through the users array and create <li> elements for each user
            users.forEach(user => {
                const listItem = document.createElement('li');
                listItem.textContent = user.name; // Set the text content of <li> to the user's name
                userList.appendChild(listItem); // Append the <li> to the <ul>
            });

            // Append the <ul> to the data container
            dataContainer.appendChild(userList);

        } catch (error) {
            // Clear the existing content and display an error message
            dataContainer.innerHTML = 'Failed to load user data.';
            console.error('Error fetching user data:', error); // Log the error to the console for debugging
        }
    }

    // Invoke the fetchUserData function once the DOM content is loaded
    fetchUserData();
});
