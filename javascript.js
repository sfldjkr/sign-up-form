let confirmationBox = document.querySelector('#passwordConformation');

let checkValidation = () => {
    let password = document.querySelector('.password');
    let passwordContent = password.value;
    let confirmationContent = confirmationBox.value;

    if (passwordContent === confirmationContent) {
        confirmationBox.classList.remove('passwordInvalid');
        confirmationBox.classList.add('passwordValid');
        confirmationBox.setCustomValidity("");
    }
    else {
        confirmationBox.classList.remove('passwordValid');
        confirmationBox.setCustomValidity("not valid");
        confirmationBox.classList.add('passwordInvalid');
    };
};

confirmationBox.addEventListener('keyup', checkValidation);