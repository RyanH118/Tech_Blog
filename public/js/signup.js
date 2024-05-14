const loginFormHandler = async (event) => {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the email and password values from the login form
  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  // Check if both email and password have values
  if (email && password) {
    // Send a POST request to the /api/user endpoint with the email and password as JSON data
    const response = await fetch("/api/user", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    // If the response is successful, redirect to the homepage and log "login successful"
    if (response.ok) {
      document.location.replace("/");
      console.log("login successful");
    } else {
      // If the response is not successful, show an alert message "Failed to log in."
      alert("Failed to log in.");
    }
  }
};

const signupFormHandler = async (event) => {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the name, email, and password values from the signup form
  const name = document.querySelector("#name-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  // Check if all three fields have values
  if (name && email && password) {
    // Send a POST request to the /api/users/ endpoint with the name, email, and password as JSON data
    const response = await fetch("/api/users/", {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
      headers: { "Content-Type": "application/json" },
    });

    // If the response is successful, redirect to the homepage and log "signup successful"
    if (response.ok) {
      document.location.replace("/");
      console.log("signup successful");
    } else {
      // If the response is not successful, show an alert message "Failed to sign up."
      alert("Failed to sign up.");
    }
  }
};

// Add an event listener to the login form to handle form submission
document.querySelector(".login-form").addEventListener("submit", loginFormHandler);

// Add an event listener to the signup form to handle form submission
document.querySelector(".signup-form").addEventListener("submit", signupFormHandler);