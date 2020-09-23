// Form DOM elements
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const btn = document.getElementById('btn');

// Check email
function checkEmail() {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(email.value.trim())) {
      email.classList.add('success');
    } else {
        email.classList.add('error');
    };
};

// Check username
function checkUsername() {
    let u = username.value;

    if(u.length < 8) {
        alert('Username must contain 8 characters min!');
    };
};

// Check password
function checkPassword() {
    let p = password.value;

    if (p.match(/[a-z]/g) && p.match( 
        /[A-Z]/g) && p.match( 
        /[0-9]/g) && p.match( 
        /[^a-zA-Z\d]/g) && p.length >= 8) {
            alert('Password saved!');
    } else {
        alert('Password must contain minimum eight characters, at least one uppercase letter, one lowercase letter and one number');
    };
};

// Event Listener
form.addEventListener('submit', e => {
    e.preventDefault();

    checkEmail();
    checkUsername();
    checkPassword();
});