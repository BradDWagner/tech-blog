const loginFormHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#login-username').value.trim();
    const password = document.querySelector('#login-password').value.trim();

    if (name && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ name, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }
};

document
    .querySelector('.login-group')
    .addEventListener('submit', loginFormHandler)