const form = document.querySelector('.needs-validation');
const email = document.querySelector('input[type=email]');
const password = document.querySelector('input[type=password]');
const inputs = document.querySelectorAll('input');

email.addEventListener('input', () => {
    const validatedEmail = validateEmail(email.value);
    const messageField = document.querySelector('#emailFeedback');

    if (!validatedEmail.isValid) {
        email.classList.remove('is-valid');
        email.classList.add('is-invalid');
        messageField.innerHTML = validatedEmail.message[0];
    } else {
        email.classList.remove('is-invalid');
        email.classList.add('is-valid');
    }
});

password.addEventListener('input', () => {
    const validatedPassword = validatePassword(password.value);
    const messageField = document.querySelector('#passwordFeedback');

    if (!validatedPassword.isValid) {
        password.classList.remove('is-valid');
        password.classList.add('is-invalid');
        messageField.innerHTML = validatedPassword.message[0];
    } else {
        password.classList.remove('is-invalid');
        password.classList.add('is-valid');
    }
});

form.addEventListener('submit', (event) => {
    inputs.forEach((input) => {
        if (!input.value) {
            event.preventDefault();
            event.stopPropagation();
            input.classList.add('is-invalid');
        }
    });
});
