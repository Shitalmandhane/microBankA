const companyName = document.querySelector<HTMLInputElement>("#cnameField");
const errorcname = document.querySelector<HTMLInputElement>(".invalid-cname");
const email = document.querySelector<HTMLInputElement>("#emailField");
const oldPassword = document.querySelector<HTMLInputElement>("#opswField");
const newPassword = document.querySelector<HTMLInputElement>('#npswField');
const confirmPassword = document.querySelector<HTMLInputElement>('#cpswField');
const errorMail = document.querySelector<HTMLInputElement>('.invalid-email');
const togglePasswordfield = document.querySelector('#togglePassword');
const togglenewPasswordfield = document.querySelector('#togglePassword1');
const togglecnfPasswordfield = document.querySelector('#togglePassword2');
const wrongpassword = document.querySelector<HTMLInputElement>('.incorrect-Password');
const newpasserror = document.querySelector<HTMLInputElement>('.new-password-error')
const confpasserror = document.querySelector<HTMLInputElement>('.c-password-error');
const updateBtn = document.getElementById('updateButton')
var nameInitial = document.querySelector<HTMLInputElement>("#pt");
companyName?.addEventListener('click', () =>
{
    errorcname!.textContent = "";
});
email?.addEventListener('click', () =>
{
    errorMail!.textContent = "";
});
wrongpassword?.addEventListener('click', () =>
{
    confpasserror!.textContent = "";
});
oldPassword?.addEventListener('click', () =>
{
    wrongpassword!.textContent = "";
});
newPassword?.addEventListener('click', () =>
{
    newpasserror!.textContent = "";
});
confirmPassword?.addEventListener('click', () =>
{
    confpasserror!.textContent = "";
});
// current user data from local
var CurrentUser = localStorage.getItem("currentUser")
var userSummary: any = JSON.parse(CurrentUser!);
console.log(userSummary.emailId);
var fullName = userSummary.fullName.split(' ');
console.log(fullName);
var initials = fullName.shift().charAt(0) + fullName.shift().charAt(0);
console.log(initials);
nameInitial!.innerHTML = initials;
//
updateBtn?.addEventListener('click', function onClick ()
{

    var validate: boolean = true
    // if companyName
    if (companyName?.value.length == 0)
    {
        errorcname!.textContent = 'Enter company name';
        validate = false;
    }
    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email!.value)))
    {
        errorMail!.textContent = 'email is invalid';
        validate = false;
    }
    wrongpassword!.textContent = "";
    if (oldPassword?.value.trim() == "" || oldPassword?.value == null || oldPassword?.value.length < 4)
    {
        wrongpassword!.textContent = 'invalid Password';
        validate = false;
    }
    // wrongpassword!.textContent = "";
    if (newPassword?.value.trim() == "" || newPassword?.value == null || newPassword?.value.length < 4)
    {
        newpasserror!.textContent = 'invalid Password';
        validate = false;
    }
    // wrongpassword!.textContent = "";
    if (confirmPassword?.value.trim() == "" || confirmPassword?.value == null || confirmPassword?.value.length < 4)
    {
        confpasserror!.textContent = 'invalid Password';
        validate = false;
    }

    if (confirmPassword?.value != newPassword?.value)  
    {
        confpasserror!.textContent = "Password Mismatch";
        validate = false;

    }

    console.log('Email is valid');
    // Email and Password are validated, now check if Email is present in users data in local and if yes then compare password
    var users: any = [];
    const newSummary = localStorage.getItem("users");

    users = JSON.parse(newSummary!);
    //
    var objIndex: number = users.findIndex(((obj: any) => obj.emailId == userSummary.emailId));
    if (users[objIndex].password != oldPassword?.value)
    {
        wrongpassword!.textContent = 'old Password not correct';
        validate = false;
    }
    if (validate === false)
        return;

    users[objIndex].companyName = companyName?.value;
    users[objIndex].emailId = email?.value;
    users[objIndex].password = confirmPassword?.value;
    // update users
    localStorage.setItem('users', JSON.stringify(users));

    // update current user

    localStorage.setItem("currentUser", JSON.stringify(users[objIndex]));


    // return window.location.href = 'dashBoard.html', true;

});
togglePasswordfield?.addEventListener('click', function (e)
{
    // toggle the type attribute
    const type = oldPassword?.getAttribute('type') === 'password' ? 'text' : 'password';

    oldPassword?.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa fa-eye');

});
togglenewPasswordfield?.addEventListener('click', function (e)
{
    // toggle the type attribute
    const type = newPassword?.getAttribute('type') === 'password' ? 'text' : 'password';

    newPassword?.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa fa-eye');

});
togglecnfPasswordfield?.addEventListener('click', function (e)
{
    // toggle the type attribute
    const type = confirmPassword?.getAttribute('type') === 'password' ? 'text' : 'password';

    confirmPassword?.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa fa-eye');

});