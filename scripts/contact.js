const email = document.getElementById('user_email');
const fname = document.getElementById('fname');
const errorMsg = document.getElementById('errorMsg');
const form = document.getElementById('form');

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
        //errorMsg.classList.add('hidden');
    }
});

form.addEventListener("submit", (event) => {
    if (!form.checkValidity()) {
        
        event.preventDefault();

        if (fname.validity.patternMismatch){
            errorMsg.textContent = "Please enter valid characters for your first name.";
            errorMsg.classList.remove('hidden');
        }  
    }
});