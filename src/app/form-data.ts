export const FORM_LABELS = {
  name: 'Логін',
  password: 'Пароль',
  email: 'Email',
  age: 'Вік',
  site: 'Сайт',
  role: 'Роль'
}

export const FORM_PLACEHOLDER = {
  name: 'Введіть логін...',
  password: 'Введіть пароль...',
  email: 'Вкажіть адрес електронної пошти...',
  age: 'Вкажіть вік...',
  site: 'Введіть адрес сайта...',
  role: 'Вибиріть роль з списку...'
}

export const FORM_SUCCESS = {
  name: 'Принято!',
  password: 'Принято!',
  email: 'Принято!',
  age: 'Принято!',
  site: 'Принято!',
  role: 'Принято!'
}

export const FORM_ERRORS = {
  name: '',
  password: '',
  email: '',
  age: '',
  site: '',
  role: ''
}

export const FORM_VALIDATION_MESSAGES = {
  name: {
    required: 'Імя обовязково.',
    minlength: 'Імя повино мати мінімум 4 символи.',
    maxlength: 'Імя повино мати небільше 20 символи.'
  },
  password: {
    required: 'Пароль обовязково.',
    minlength: 'Пароль повинен мати мінімум 7 символів.',
    maxlength: 'Пароль повинен мати більше 25 символів.'
  },
  email: {
    required: 'Email обовязково.',
    emailValidator: 'Неправильний формат email адреса.',
  },
  age: {
    required: 'Вік обовязково.',
    rangeValidator: 'Значення повино бути числом в діапазоні 18...65.',
    minRange: 'Значення повино бути більше 18',
    maxRange: 'Значення повино бути менше 65'
  },
  site: {
    required: 'Сайт обовязково.',
    urlNotAllowed: 'Не правильний формат сайту.',
    pending: 'Виконується провірка',
  },
  role: {
    required: 'Обовязкове поле.',
  }
}


export const FORM_ROLES = ['Гість', 'Модератор', 'Адміністратор']
