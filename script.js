const button = document.querySelector('#button'); 
const email = document.querySelector('#emailAddress')

const social = document.querySelector('.social');
button.addEventListener('click', (e) => {
    e.preventDefault();
    let emailEmpty = document.querySelector('#emailEmpty');
    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(!email.value.match(validRegex)) {
        emailEmpty.classList.add('visible');
        email.classList.add('invalid');
        emailEmpty.setAttribute('aria-hidden', false);
        emailEmpty.setAttribute('aria-visible', true);
    } else if(email.value.match(validRegex)) {
        emailEmpty.classList.remove('visible');
        email.classList.remove('invalid');
        emailEmpty.setAttribute('aria-visible', true);
        emailEmpty.setAttribute('aria-visible', false);
    }
});
