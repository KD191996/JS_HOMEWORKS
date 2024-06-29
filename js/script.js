import Post from "./Post.js";
import ErrorHandler from "./ErrorHandler.js";

function displayError(message) {
  const errorElement = document.getElementById("error");
  errorElement.textContent = message;
}

function clearError() {
  const errorElement = document.getElementById("error");
  errorElement.textContent = "";
}

function handleSearch() {
  const postIdInput = document.getElementById("postId");
  const postId = postIdInput.value;
  const postElement = document.getElementById("post");
  const commentsElement = document.getElementById("comments");

  const errorHandler = new ErrorHandler(document.getElementById("error"));
  const post = new Post(postElement, commentsElement);

  clearError();
  postElement.innerHTML = "";
  commentsElement.innerHTML = "";

  if (postId < 1 || postId > 100) {
    errorHandler.displayError("Please enter a valid ID (1-100)");
    return;
  }

  post
    .fetchPost(postId)
    .then((postData) => post.displayPost(postData))
    .catch((error) => errorHandler.displayError(error.message));
}

document.addEventListener("DOMContentLoaded", () => {
  const searchButton = document.getElementById("searchButton");
  searchButton.addEventListener("click", handleSearch);
});
