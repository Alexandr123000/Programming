function showMessage(message) {
    message();
}
function notification() {
    console.log("This is a notification.");
}

showMessage(notification); //use Higher-Order Function
