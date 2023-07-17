// Example background script

// Function to show the notification
function showNotification() {
  chrome.notifications.create({
    type: "basic",
    iconUrl: "icon.png", // Replace with your icon file path
    title: "Reminder",
    message: "It's time to stand up and take a sip of water!",
  });
}

// Event listener for receiving messages from the content script
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.type === "startTimer") {
    const timerDuration = parseInt(message.duration, 10);
    if (isNaN(timerDuration)) {
      console.log("Invalid timer duration. Please enter a number.");
      return;
    }

    chrome.alarms.create("reminder", { delayInMinutes: timerDuration });
  }
});

// Event listener for the alarm trigger
chrome.alarms.onAlarm.addListener(function (alarm) {
  if (alarm.name === "reminder") {
    showNotification();
  }
});

// Additional background script code can go here
