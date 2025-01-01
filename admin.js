

// Get the administration login button and form elements  
const adminLoginButton = document.getElementById('admin-login-button');  
const adminLoginForm = document.getElementById('admin-login-form');  
const adminLoginSubmitButton = document.getElementById('admin-login-submit');  
const adminPortal = document.getElementById('admin-portal');  
  
// Add an event listener to the administration login button  
adminLoginButton.addEventListener('click', () => {  
   // Show the administration login form  
   adminLoginForm.style.display = 'block';  
});  
  
// Add an event listener to the administration login submit button  
adminLoginSubmitButton.addEventListener('click', (e) => {  
   e.preventDefault();  
  
   // Get the username and password values  
   const username = document.getElementById('username').value;  
   const password = document.getElementById('password').value;  
  
   // Check if the username and password are correct  
   if (username === 'admin' && password === 'password123') {  
      // Hide the administration login form  
      adminLoginForm.style.display = 'none';  
  
      // Show the administration portal  
      adminPortal.style.display = 'block';  
   } else {  
      // Display an error message  
      alert('Invalid username or password');  
   }  
});
