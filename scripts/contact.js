const email = document.querySelector('user_email');
const message = document.querySelector('message');
const emailError = document.querySelector('user_email_error')


email.addEventListener("input", (event) => {
    if (!email.validity.typeMismatch) {
        email.setCustomValidity("I am expecting an email address.");
    }
    else {
        email.setCustomValidity("");
    }
});