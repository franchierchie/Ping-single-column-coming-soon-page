const form = document.querySelector('form');
const input = document.querySelector('#email');
const submit = document.querySelector('.submit-btn');
const error = document.querySelector('.error-message');

// Please provide a valid email address

form.addEventListener('submit', (e) => {
    let messages = [];

    if (input.value === '') {
        messages.push('This field can\'t be blank');
    } else if ((input.value.indexOf('@') < 0) || (input.value.indexOf('.com') < 0)) {
        messages.push('Please provide a valid email address');
    }

    if (messages.length > 0) {
        e.preventDefault();
        input.classList.add('error');
        error.innerHTML = messages;
    }
});