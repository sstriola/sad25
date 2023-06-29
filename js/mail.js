
// sidebar toggle

const sidebarToggle = document.querySelector('.sidebar-toggle');
const sidebar = document.querySelector('.sidebar');
const fixedSidebarToggle = document.querySelector('.fixed-sidebar-toggle');
const sidebarHeight = sidebar.offsetHeight;

sidebarToggle.addEventListener('click', () => {
  sidebar.classList.toggle('open');
});





// Функция для проверки валидности email
function isValidEmail(email) {
  // Простая регулярная проверка email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}



// Функция для валидации формы
function validateForm(event) {
  event.preventDefault(); // Отменяем отправку формы по умолчанию

  const form = document.getElementById('form'); // Получаем форму по id
  const nameInput = document.getElementById('formName');
  const emailInput = document.getElementById('formEmail');
  const telInput = document.getElementById('formTel');
  const agreementCheckbox = document.getElementById('formAgreement');

  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const telError = document.getElementById('telError');
  const agreementError = document.getElementById('agreementError');

  let isValid = true; // Флаг для проверки валидности формы

  // Проверяем поле с именем
  if (nameInput.value.trim() === '') {
    isValid = false;
    nameInput.classList.add('_error');
    nameError.textContent = 'Пожалуйста, введите ваше имя.';
  } else {
    nameInput.classList.remove('_error');
    nameError.textContent = '';
  }

  // Проверяем поле с email
  if (emailInput.value.trim() === '' || !isValidEmail(emailInput.value.trim())) {
    isValid = false;
    emailInput.classList.add('_error');
    emailError.textContent = 'Пожалуйста, введите корректный email.';
  } else {
    emailInput.classList.remove('_error');
    emailError.textContent = '';
  }

  // Проверяем поле с номером телефона
  if (telInput.value.trim() === '') {
    isValid = false;
    telInput.classList.add('_error');
    telError.textContent = 'Пожалуйста, введите ваш номер телефона.';
  } else {
    telInput.classList.remove('_error');
    telError.textContent = '';
  }

  // Проверяем чекбокс с согласием
  if (!agreementCheckbox.checked) {
    isValid = false;
    agreementCheckbox.parentNode.classList.add('_error');
    agreementError.textContent = 'Пожалуйста, согласитесь с условиями.';
  } else {
    agreementCheckbox.parentNode.classList.remove('_error');
    agreementError.textContent = '';
  }

  // Если форма валидна, можно отправить данные
  if (isValid) {
    form.submit();
  }
}

// Добавляем обработчик события submit для формы
const form = document.getElementById('form');
form.addEventListener('submit', validateForm);

