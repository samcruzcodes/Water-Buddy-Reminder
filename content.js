// Function to save form input
function saveForm(event) {
  event.preventDefault(); // Prevent form submission
  var inputValue = document.getElementById("inputValue").value;

  var interval = parseInt(inputValue, 10);
  if (isNaN(interval) || interval < 1 || interval > 180) {
    console.log("Invalid interval. Please enter a number between 1 and 180.");
    return;
  }

  // Save the input value to a database or perform other actions
  console.log("Input value saved:", interval);

  // Display submission message
  var messageElement = document.getElementById("submissionMessage");
  messageElement.innerHTML = "Interval submitted! Interval time: " + interval;

  // Send a message to the background script to start the timer
  chrome.runtime.sendMessage({ type: "startTimer", duration: interval });

  // Reset the form
  var form = document.getElementById("myForm");
  form.reset();
}

// Attach event listener to the form submission
var form = document.getElementById("myForm");
form.addEventListener("submit", saveForm);
