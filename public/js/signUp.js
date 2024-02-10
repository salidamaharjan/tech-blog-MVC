const signUpFormHAndler = async (event) => {
    event.preventDefault();

const username = document.querySelector('#username-signUp').value.trim();
const password = document.querySelector('#password-signUp').value.trim();

if(username && password) {
    const response = await fetch('api/users', {
        method: 'POST',
        body: JSON.stringify({username, password}),
        header: {'Content-Type': 'application/json'},
    });
    if (response.ok) {
        document,location.replace('/');
    }
} else {
    alert('Failed to sign up.');
}
};

document.querySelector('.signUp-form').addEventListener('submit', signUpFormHAndler);