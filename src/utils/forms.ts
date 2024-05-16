import { FieldErrors } from 'react-hook-form';

export const clearInputs = () => {
  [...document.querySelectorAll(`form input`)].forEach((element) => {
    element.classList.remove('border-red');
    if (element.nextElementSibling) element.nextElementSibling.innerHTML = '';
  });
};

export const handleErrors = (errors: FieldErrors<IUserBasicInputcSchema>) => {
  clearInputs();

  for (const key in errors) {
    const element = errors[key].ref as Element;
    console.log(elem)
    element.classList.remove('border-transparent');
    element.classList.add('border-red');
    const brotherElement = document.querySelector(
      `form span[name=${key}]`,
    ) as Element;
    brotherElement.innerHTML = errors[key].message;
  }
};
