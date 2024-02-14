(() => {
  const submitBtn = document.querySelector("#btn-submit");
  const commentText = document.querySelector("#comment-text");

  submitBtn.addEventListener("click", async (event) => {
    const postId = document.querySelector('#post-id');
    event.preventDefault();
    event.stopPropagation();
    const data = { commentText: commentText.value };
    const response = await fetch(`/api/posts/${postId.value}/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    window.location.reload();
  });
})();
