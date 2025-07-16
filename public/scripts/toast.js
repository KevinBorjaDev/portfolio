export function showSuccess(message, duration = 3000) {
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

export function showError(message, duration = 3000) {
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