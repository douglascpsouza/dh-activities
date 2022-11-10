const form = document.querySelector('form.form-auth');
const submitButton = document.querySelector('button[type="submit"]');

const dateInput = document.createElement('input');
dateInput.setAttribute('type', 'date');
dateInput.setAttribute('name', 'date');
form.insertBefore(dateInput, submitButton);
