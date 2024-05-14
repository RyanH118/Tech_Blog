document.addEventListener("DOMContentLoaded", () => {
  // Get the logout button element
  const logoutButton = document.querySelector("#logout");

  // Check if the logout button exists
  if (logoutButton) {
    // Add an event listener to the logout button to handle click events
    logoutButton.addEventListener("click", async () => {
      try {
        // Send a POST request to the /api/users/logout endpoint
        const response = await fetch("/api/users/logout", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
        });

        // If the response is successful, redirect to the homepage
        if (response.ok) {
          document.location.replace("/");
        } else {
          // If the response is not successful, throw an error
          throw new Error(response.statusText);
        }
      } catch (error) {
        // Log the error to the console
        console.error("Logout failed:", error);
        // Show an alert message to the user
        alert("Logout failed. Please try again.");
      }
    });
  }
});