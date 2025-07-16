window.showSuccess = function (message, duration = 3000) {
  Toastify({
    text: message,
    duration: duration,
    close: false,
    gravity: "bottom",
    position: "center",
    stopOnFocus: false,
    backgroundColor: "#4CAF50",
  }).showToast();
}

window.showError = function (message, duration = 3000) {
  Toastify({
    text: message,
    duration: duration,
    close: false,
    gravity: "bottom",
    position: "center",
    stopOnFocus: false,
    backgroundColor: "#E53935",
  }).showToast();
}