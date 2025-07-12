document.addEventListener('DOMContentLoaded', () => {
    // Get the form element
    const loginForm = document.getElementById('loginForm');

    // Add an event listener for form submission
    loginForm.addEventListener('submit', function(event) {
        // Prevent the default form submission (which would refresh the page)
        event.preventDefault();

        // Get the input values
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        // Basic validation logic
        let isValid = true;
        let errorMessage = '';

        // 1. Validate Email
        if (email === '') {
            isValid = false;
            errorMessage = 'Please enter your email or phone number.';
        } else if (!isValidEmail(email)) {
            isValid = false;
            errorMessage = 'Please enter a valid email address.';
        }

        // 2. Validate Password
        if (isValid && password === '') {
            isValid = false;
            errorMessage = 'Please enter your password.';
        } else if (isValid && password.length < 4) {
            // Netflix passwords are generally 4-60 characters
            isValid = false;
            errorMessage = 'Your password must contain at least 4 characters.';
        }

        // Handle the validation result
        if (isValid) {
            // In a real application, you would send the data to a server here (e.g., using fetch or AJAX)
            // Since we don't have a backend, we'll simulate a successful login
            alert('Login successful! Welcome to Netflix.');
            
            // You could redirect the user to the homepage:
            // window.location.href = 'index.html'; 

        } else {
            // Display the error message (we'll use an alert for simplicity, 
            // but in a real app, you would display a message below the input field)
            alert('Login failed: ' + errorMessage);
        }
    });

    // Helper function for email validation (simple regex check)
    function isValidEmail(email) {
        // This regex is a basic check for email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});