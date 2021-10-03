const form = document.getElementById('form');

const first = document.getElementById('firstname');
const last = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');

const error_firstName_required = document.getElementById('error-firstname')
const error_lastName_required = document.getElementById('error-lastname')
const error_email_invalid = document.getElementById('error-email')
const error_password_required = document.getElementById('error-password')

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (first.value === "" || first.value === null) {
        addError(error_firstName_required, "First Name cannot be empty")
    } else {
        removeErrorFrom(error_firstName_required)
    }

    if (last.value === "" || last.value === null) {
        addError(error_lastName_required, "Last Name cannot be empty")
    } else {
        removeErrorFrom(error_lastName_required)
    }

    if (email.value === "" || email.value === null) {
        addError(error_email_invalid,"Email cannot be empty")
    } else if (!isValid(email.value)) {
        addError(error_email_invalid, "Looks like this is not an email")
    } else {
        removeErrorFrom(error_email_invalid);
    };

    if (password.value === "" || password.value === null) {
        addError(error_password_required, "Password cannot be empty")
    } else {
        removeErrorFrom(error_password_required)
    }
});

function addError(field, message) {
    field.innerText = message;

    const formControl = field.parentNode;
	formControl.classList.add('throwError');
}

function removeErrorFrom(field) {
	field.innerText = ""

    const formControl = field.parentNode;
	formControl.classList.remove('throwError');
}

function isValid(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}



