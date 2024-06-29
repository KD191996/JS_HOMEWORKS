class Post {
  postElement = null;
  commentsElement = null;
  constructor(postElement, commentsElement) {
    this.postElement = postElement;
    this.commentsElement = commentsElement;
  }

  fetchPost(postId) {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`).then(
      (response) => {
        if (!response.ok) {
          throw new Error("Post not found");
        }
        return response.json();
      },
    );
  }

  displayPost(post) {
    this.postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.body}</p>
            <button id="loadComments">Load Comments</button>
        `;

    document.getElementById("loadComments").addEventListener("click", () => {
      this.fetchComments(post.id);
    });
  }

  fetchComments(postId) {
    return fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}/comments`,
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Comments not found");
        }
        return response.json();
      })
      .then((comments) => this.displayComments(comments));
  }

  displayComments(comments) {
    this.commentsElement.innerHTML = "";
    comments.forEach((comment) => {
      const commentElement = document.createElement("div");
      commentElement.innerHTML = `
                <h3>${comment.name}</h3>
                <p>${comment.body}</p>
                <p><strong>${comment.email}</strong></p>
            `;
      this.commentsElement.appendChild(commentElement);
    });
  }
}

export default Post;
