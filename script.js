

// Add event listener to nav links  
document.querySelectorAll('nav a').forEach(link => {  
   link.addEventListener('click', event => {  
      event.preventDefault();  
      const sectionId = link.getAttribute('href');  
      const section = document.querySelector(sectionId);  
      section.scrollIntoView({ behavior: 'smooth' });  
   });  
});  



//Admin login info

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




// Add event listener to login buttons  
document.querySelectorAll('.login-button').forEach(button => {  
   button.addEventListener('click', event => {  
      event.preventDefault();  
      const loginPortal = document.querySelector('#login-portals');  
      loginPortal.scrollIntoView({ behavior: 'smooth' });  
      // Add login logic here  
      const loginForm = document.querySelector('#login-form');  
      loginForm.style.display = 'block';  
   });  
});  
  
// Add event listener to apply now button  
document.querySelector('.apply-now-button').addEventListener('click', event => {  
   event.preventDefault();  
   const applicationForm = document.querySelector('#application-form');  
   applicationForm.scrollIntoView({ behavior: 'smooth' });  
   // Add application logic here  
   const applicationFormContainer = document.querySelector('#application-form-container');  
   applicationFormContainer.style.display = 'block';  
});  
  
// Add event listener to schedule tour button  
document.querySelector('.schedule-tour-button').addEventListener('click', event => {  
   event.preventDefault();  
   const tourSchedule = document.querySelector('#tour-schedule');  
   tourSchedule.scrollIntoView({ behavior: 'smooth' });  
   // Add tour schedule logic here  
   const tourScheduleContainer = document.querySelector('#tour-schedule-container');  
   tourScheduleContainer.style.display = 'block';  
});  
  
// Add event listener to login form submit  
document.querySelector('#login-form').addEventListener('submit', event => {  
   event.preventDefault();  
   const username = document.querySelector('#username').value;  
   const password = document.querySelector('#password').value;  
   // Add login validation logic here  
   if (username === 'admin' && password === 'password') {  
      console.log('Login successful');  
      // Add login success logic here  
   } else {  
      console.log('Login failed');  
      // Add login failure logic here  
   }  
});  
  
// Add event listener to application form submit  
document.querySelector('#application-form').addEventListener('submit', event => {  
   event.preventDefault();  
   const applicantName = document.querySelector('#applicant-name').value;  
   const applicantEmail = document.querySelector('#applicant-email').value;  
   // Add application validation logic here  
   if (applicantName !== '' && applicantEmail !== '') {  
      console.log('Application submitted successfully');  
      // Add application success logic here  
   } else {  
      console.log('Application submission failed');  
      // Add application failure logic here  
   }  
});  
  
// Add event listener to tour schedule form submit  
document.querySelector('#tour-schedule-form').addEventListener('submit', event => {  
   event.preventDefault();  
   const tourDate = document.querySelector('#tour-date').value;  
   const tourTime = document.querySelector('#tour-time').value;  
   // Add tour schedule validation logic here  
   if (tourDate !== '' && tourTime !== '') {  
      console.log('Tour scheduled successfully');  
      // Add tour schedule success logic here  
   } else {  
      console.log('Tour scheduling failed');  
      // Add tour schedule failure logic here  
   }  
});
// Path: style.css
 
