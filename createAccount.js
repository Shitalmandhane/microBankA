var togglePassword1 = document.querySelector('#togglePassword');
var cnfPassword = document.querySelector('#pswField');
var togglePassword2 = document.querySelector('#togglePassword1');
var Password = document.querySelector('#confirmPsw');
togglePassword1 === null || togglePassword1 === void 0 ? void 0 : togglePassword1.addEventListener('click', function (e) {
    // toggle the type attribute
    var type = (cnfPassword === null || cnfPassword === void 0 ? void 0 : cnfPassword.getAttribute('type')) === 'password' ? 'text' : 'password';
    cnfPassword === null || cnfPassword === void 0 ? void 0 : cnfPassword.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa fa-eye');
});
togglePassword2 === null || togglePassword2 === void 0 ? void 0 : togglePassword2.addEventListener('click', function (e) {
    // toggle the type attribute
    var type = (Password === null || Password === void 0 ? void 0 : Password.getAttribute('type')) === 'password' ? 'text' : 'password';
    Password === null || Password === void 0 ? void 0 : Password.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa fa-eye');
});
