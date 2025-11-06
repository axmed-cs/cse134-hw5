const email = document.querySelector('user_email');
const fname = document.querySelector('fname');
const errorMsg = document.querySelector('errorMsg');

email.addEventListener("input", (event) => {
    if (email.validity.typeMismatch) {
        email.setCustomValidity("I am expecting an email address.");
    }
    else {
        email.setCustomValidity("");
    }
});


fname.addEventListener("input", (event) => {
    if (fname.validity.typeMismatch) {
        errorMsg.textContent = "Please enter valid characters for your first name.";
        errorMsg.classList = "hidden";
    }
    else {
        errorMsg.textContent = "";
    }
});