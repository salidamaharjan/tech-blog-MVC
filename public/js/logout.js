const logout = document.querySelector("#logout");

logout.addEventListener('click', async (event) => {
    event.preventDefault();
    event.stopPropagation();

    await fetch('/api/logout', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
    })
    window.location.replace('/');
});

