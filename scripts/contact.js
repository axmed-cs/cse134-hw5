const email = document.querySelector('user_email');
const fname = document.querySelector('fname');
const errorMsg = document.querySelector('errorMsg');
const form = document.querySelector('form');

email.addEventListener("input", (event) => {
    if (email.validity.typeMismatch) {
        email.setCustomValidity("I am expecting an email address.");
    }
    else {
        email.setCustomValidity("");
    }
});


fname.addEventListener("input", (event) => {
    if (fname.validity.patternMismatch) {
        errorMsg.textContent = "Please enter valid characters for your first name.";
        errorMsg.classList.remove('hidden');
    }
    else {
        errorMsg.textContent = "";
    }
});

form.addEventListener("submit", (event) => {
    if (fname.validity.patternMismatch){
        event.preventDefault();
        errorMsg.textContent = "Please enter valid characters for your first name.";
        errorMsg.classList.remove('hidden');
    }
});