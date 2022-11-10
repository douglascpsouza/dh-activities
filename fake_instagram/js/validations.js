// =-=-=-=-=-= ATIVIDADE II =-=-=-=-=-= //

// 1. É necessário que cada campo possua uma regra específica:
// a. Primeiro nome:      i. max: 80 caracteres;   ii. min: 2 caracteres
// b. Último sobrenome:   i. max: 100 caracteres;  ii. min: 2 caracteres
// c. Data de nascimento: i. idade max: 120 anos;  ii. idade min: 16 anos
// d. E-mail:             i. max: 180 caracteres;  ii. min: 10 caracteres; iii. possuir: ponto final e @
// e. Senha:              i. max: 60 caracteres;   ii. min: 8 caracteres
// f. Username:           i. max: 15 caracteres;   ii. min: 6 caracteres

// function removeErrorMessage(input, className) {
//   if (input.nextElementSibling.classList.contains(className)) {
//     input.nextElementSibling.remove();
//   }
// }

function removeAllErrorMessages() {
  const errorMessages = document.querySelectorAll('form.form-auth .form-error');
  errorMessages.forEach(message => message.remove());
}

function createErrorMsg(input, message) {
  const element = document.createElement('p');
  element.classList.add('form-error');
  element.innerText = message;
  input.insertAdjacentElement('afterend', element);
}

function minMaxValidation(number, min, max) {
  return (number >= min && number <= max);
}

function validateInputLength(input, min, max) {
  if (!minMaxValidation(input.value.length, min, max)) {
    createErrorMsg(input, `O campo acima deve ter entre ${min} e ${max} caracteres.`);
    hasErrors = true;
  }
}

function validateEmail(input, min, max) {
  if (!minMaxValidation(input.value.length, min, max)) {
    createErrorMsg(input, `O campo acima deve ter entre ${min} e ${max} caracteres.`);
    hasErrors = true;
  } else if (!input.value.includes('@') || !input.value.includes('.')) {
    createErrorMsg(input, 'O campo "email" deve conter "." e "@".');
    hasErrors = true;
  }
}

function calculateAge(birthday) { // birthday is a date
  const ageDifMs = Date.now() - birthday.getTime();
  const ageDate = new Date(ageDifMs); // miliseconds from epoch
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

function validateAge(input, min, max) {
  if (input.type !== 'date' || input.value.length !== 10) {
    createErrorMsg(input, 'O campo "data" está preenchido incorretamente.');
    hasErrors = true;
  } else {
    const age = calculateAge(new Date(input.value));
    if (!minMaxValidation(age, 16, 120)) {
      createErrorMsg(input, `A idade deve estar entre ${min} e ${max} anos.`);
      hasErrors = true;
    }
  }
}

// UTILIZANDO: Event: 'submit'

const authForm = document.querySelector('form.form-auth');
let hasErrors = false;

authForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // Apagar mensagens anteriores (se houver) e "zerar" erros
  removeAllErrorMessages();
  hasErrors = false;

  // Identificar os campos de input
  const formAuthInputs = authForm.querySelectorAll('input');
  formAuthInputs.forEach(input => {
    // Input: Name
    if (input.name === 'name') {
      validateInputLength(input, 2, 80);
    }
    // Input: Sobrenome
    if (input.name === 'surname') {
      validateInputLength(input, 2, 100);
    }
    // Input: Nome de usuário
    if (input.name === 'username') {
      validateInputLength(input, 6, 15);
    }
    // Input: Senha
    if (input.name === 'password') {
      validateInputLength(input, 8, 60);
    }
    // Input: Email
    if (input.name === 'email') {
      validateEmail(input, 8, 180);
    }
    // Input: Date
    if (input.name === 'date') {
      validateAge(input, 16, 120);
    }
  });

  if (!hasErrors) {
    alert('SUCESSO!!!');
    authForm.submit();
  }
});

/* UTILIZANDO: Event: 'change' // OBS: Pendencias não resolvidas -> hasErrors

const formAuthInputs = document.querySelectorAll('form.form-auth input');
const formAuth = document.querySelector('form.form-auth');
let hasErrors = true;

formAuthInputs.forEach(input => {
  input.addEventListener('blur', () => {
    removeErrorMessage(input, 'form-error');
    hasErrors = false;

    // Input: Name
    if (input.name === 'name') {
      validateInputLength(input, 2, 80);
    }
    // Input: Sobrenome
    if (input.name === 'surname') {
      validateInputLength(input, 2, 100);
    }
    // Input: Nome de usuário
    if (input.name === 'username') {
      validateInputLength(input, 6, 15);
    }
    // Input: Senha
    if (input.name === 'password') {
      validateInputLength(input, 8, 60);
    }
    // Input: Email
    if (input.name === 'email') {
      validateEmail(input, 10, 180);
    }
    // Input: Date
    if (input.name === 'date') {
      validateAge(input, 16, 120);
    }
  });
});

formAuth.addEventListener('submit', (event) => {
  event.preventDefault();
  const numErrorMessages = formAuth.querySelectorAll('.form-error').length;
  if (!hasErrors && !numErrorMessages) {
    formAuth.submit();
  }
});
*/

// =-=-=-=-=-= ATIVIDADE I =-=-=-=-=-= //

// 1. Antes que o formulário de cadastro seja submetido, o front-end precisa validar os a obrigatoriedade dos seguintes campos:
//    a. nome
//    b. sobrenome
//    c. e-mail
//    d. senha
//    e. username

// 2. Surgiu a necessidade de um campo a mais no formulário de cadastro: data de nascimento.
//    Crie o campo através do JS e aplique a este a obrigatoriedade de preenchimento.

// 3. Caso seja identificada alguma inconsistência no preenchimento dos campos, deve ser apresentada
//    a mensagem de erro ao usuário logo abaixo os inputs.

/*
window.addEventListener('load', function () {
  const authForm = document.querySelector('form.form-auth');
  const submitButton = document.querySelector('button[type="submit"]');

  const dateInput = document.createElement('input');
  dateInput.setAttribute('type', 'date');
  dateInput.setAttribute('name', 'date');
  authForm.insertBefore(dateInput, submitButton);

  authForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // Apagar mensagens anteriores (se houver) e zerar erros
    removeAllErrorMessages();
    let hasErrors = false;

    // Identificar os campos (input) vazios
    const inputFields = authForm.querySelectorAll('input');
    for (const input of inputFields) {
      if (!input.value.length) {
        createErrorMsg(input, 'O campo acima deve ser preenchido');
        hasErrors = true;
      }
    }

    if (!hasErrors) {
      console.log('SUCESSO!!!');
      // authForm.submit();
    }
  });
});
*/
