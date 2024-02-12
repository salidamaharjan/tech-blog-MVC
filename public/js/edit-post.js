(() => {
  const updateBtn = document.querySelector("#btn-update");
  const deleteBtn = document.querySelector("#btn-delete");
  const title = document.querySelector("#title");
  const content = document.querySelector("#content");

  updateBtn.addEventListener("click", async (event) => {
    const postId = document.querySelector("#post-id");
    event.preventDefault();
    event.stopPropagation();

    const data = { title: title.value, content: content.value };

    const response = await fetch(`/api/posts/${postId.value}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    console.log("Success:", result);
  });

  deleteBtn.addEventListener('click', async (event) => {
    const postId = document.querySelector("#post-id");
    event.stopPropagation();
    event.preventDefault();

    const response = await fetch(`/api/posts/${postId.value}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    window.location.replace('/dashboard');
  })
})();
