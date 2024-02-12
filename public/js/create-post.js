(() => {
  const createPostBtn = document.querySelector("#btn-create");
  const title = document.querySelector("#newTitle");
  const content = document.querySelector("#newContent");

  createPostBtn.addEventListener("click", async (event) => {
    event.preventDefault();
    event.stopPropagation();
    const data = { title: title.value, content: content.value };
    const response = await fetch("/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    console.log("New Post: ", result);
    window.location.replace("/dashboard");
  });
})();
