
function toggleForm() {
    var signInForm = document.getElementById('signInForm');
    var signUpForm = document.getElementById('signUpForm');
    if (signInForm.style.display === 'none') {
        signInForm.style.display = 'block';
        signUpForm.style.display = 'none';
    } else {
        signInForm.style.display = 'none';
        signUpForm.style.display = 'block';
    }
}
