const togglePassword1 = document.querySelector('#togglePassword');
var cnfPassword = document.querySelector('#pswField');
const togglePassword2 = document.querySelector('#togglePassword1');
var Password = document.querySelector('#confirmPsw');

togglePassword1?.addEventListener('click', function (e)
{
    // toggle the type attribute
    const type = cnfPassword?.getAttribute('type') === 'password' ? 'text' : 'password';

    cnfPassword?.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa fa-eye');

});

togglePassword2?.addEventListener('click', function (e)
{
    // toggle the type attribute
    const type = Password?.getAttribute('type') === 'password' ? 'text' : 'password';

    Password?.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa fa-eye');

});