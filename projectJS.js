function generateMealPlan() {
  // Validate email address
  const email = document.getElementById('email').value;
  if (!validateEmail(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  // Get user inputs
  const name = document.getElementById('name').value;
  const goal = document.getElementById('goal').value;
  const breakfast = document.getElementById('breakfast').value;
  // Get values for other meal input fields

  // Generate new web page with meal plan
  const mealPlanOutput = `
    <html>
      <head>
        <title>Your Meal Plan</title>
        <style>
          /* Add your CSS styles for the generated page here */
        </style>
      </head>
      <body>
        <h1>${name}'s Meal Plan</h1>
        <p>Email: ${email}</p>
        <p>Goal for the Week: ${goal}</p>
        <h2>Meal Plan:</h2>
        <ul>
          <li><strong>Monday:</strong> ${breakfast}</li>
          <!-- Add list items for other days and meals -->
        </ul>
      </body>
    </html>
  `;

  const newWindow = window.open();
  newWindow.document.write(mealPlanOutput);
}

function clearPlanner() {
  // Clear all input fields in the form
  const form = document.getElementById('mealForm');
  form.reset();
}

function validateEmail(email) {
  // Simple email validation using a regular expression
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}