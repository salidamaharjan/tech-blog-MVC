(() => {
  const loginUser = document.querySelector("#user-login");
  const loginPassword = document.querySelector("#password-login");
  const loginBtn = document.querySelector("#btn-login");

  loginBtn.addEventListener("click", async (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (!loginUser.value || !loginPassword.value) {
      alert("Invalid username or password");
      return;
    }

    const data = { username: loginUser.value, password: loginPassword.value };

    const response = await fetch("api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    console.log("Success:", result);
    window.location.replace('/');
  });
})();
