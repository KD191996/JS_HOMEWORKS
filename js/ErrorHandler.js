class ErrorHandler {
  errorElement = null;
  textContent = null;
  constructor(errorElement) {
    this.errorElement = errorElement;
  }

  displayError(message) {
    this.errorElement.textContent = message;
  }

  clearError() {
    this.errorElement.textContent = "";
  }
}

export default ErrorHandler;
