const login_button = document.querySelector('.login-button');

login_button.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = 'Dashboard/home.html';
});