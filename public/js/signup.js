(() => {
    const username = document.querySelector("#username-signup");
    const password = document.querySelector("#password-signup");
    const signupBtn = document.querySelector("#btn-signup");
  
    signupBtn.addEventListener("click", async (event) => {
      event.preventDefault();
      event.stopPropagation();
  
      if (!username.value || !password.value) {
        alert("Invalid username or password");
        return;
      }
  
      const data = { username: username.value, password: password.value };
  
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      const result = await response.json();
      console.log("Success:", result);
    });
  })();