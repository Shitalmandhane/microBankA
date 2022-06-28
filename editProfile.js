var companyName = document.querySelector("#cnameField");
var errorcname = document.querySelector(".invalid-cname");
var email = document.querySelector("#emailField");
var oldPassword = document.querySelector("#opswField");
var newPassword = document.querySelector('#npswField');
var confirmPassword = document.querySelector('#cpswField');
var errorMail = document.querySelector('.invalid-email');
var togglePasswordfield = document.querySelector('#togglePassword');
var togglenewPasswordfield = document.querySelector('#togglePassword1');
var togglecnfPasswordfield = document.querySelector('#togglePassword2');
var wrongpassword = document.querySelector('.incorrect-Password');
var newpasserror = document.querySelector('.new-password-error');
var confpasserror = document.querySelector('.c-password-error');
var updateBtn = document.getElementById('updateButton');
var nameInitial = document.querySelector("#pt");
companyName === null || companyName === void 0 ? void 0 : companyName.addEventListener('click', function () {
    errorcname.textContent = "";
});
email === null || email === void 0 ? void 0 : email.addEventListener('click', function () {
    errorMail.textContent = "";
});
wrongpassword === null || wrongpassword === void 0 ? void 0 : wrongpassword.addEventListener('click', function () {
    confpasserror.textContent = "";
});
oldPassword === null || oldPassword === void 0 ? void 0 : oldPassword.addEventListener('click', function () {
    wrongpassword.textContent = "";
});
newPassword === null || newPassword === void 0 ? void 0 : newPassword.addEventListener('click', function () {
    newpasserror.textContent = "";
});
confirmPassword === null || confirmPassword === void 0 ? void 0 : confirmPassword.addEventListener('click', function () {
    confpasserror.textContent = "";
});
// current user data from local
var CurrentUser = localStorage.getItem("currentUser");
var userSummary = JSON.parse(CurrentUser);
console.log(userSummary.emailId);
var fullName = userSummary.fullName.split(' ');
console.log(fullName);
var initials = fullName.shift().charAt(0) + fullName.shift().charAt(0);
console.log(initials);
nameInitial.innerHTML = initials;
//
updateBtn === null || updateBtn === void 0 ? void 0 : updateBtn.addEventListener('click', function onClick() {
    var validate = true;
    // if companyName
    if ((companyName === null || companyName === void 0 ? void 0 : companyName.value.length) == 0) {
        errorcname.textContent = 'Enter company name';
        validate = false;
    }
    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))) {
        errorMail.textContent = 'email is invalid';
        validate = false;
    }
    wrongpassword.textContent = "";
    if ((oldPassword === null || oldPassword === void 0 ? void 0 : oldPassword.value.trim()) == "" || (oldPassword === null || oldPassword === void 0 ? void 0 : oldPassword.value) == null || (oldPassword === null || oldPassword === void 0 ? void 0 : oldPassword.value.length) < 4) {
        wrongpassword.textContent = 'invalid Password';
        validate = false;
    }
    // wrongpassword!.textContent = "";
    if ((newPassword === null || newPassword === void 0 ? void 0 : newPassword.value.trim()) == "" || (newPassword === null || newPassword === void 0 ? void 0 : newPassword.value) == null || (newPassword === null || newPassword === void 0 ? void 0 : newPassword.value.length) < 4) {
        newpasserror.textContent = 'invalid Password';
        validate = false;
    }
    // wrongpassword!.textContent = "";
    if ((confirmPassword === null || confirmPassword === void 0 ? void 0 : confirmPassword.value.trim()) == "" || (confirmPassword === null || confirmPassword === void 0 ? void 0 : confirmPassword.value) == null || (confirmPassword === null || confirmPassword === void 0 ? void 0 : confirmPassword.value.length) < 4) {
        confpasserror.textContent = 'invalid Password';
        validate = false;
    }
    if ((confirmPassword === null || confirmPassword === void 0 ? void 0 : confirmPassword.value) != (newPassword === null || newPassword === void 0 ? void 0 : newPassword.value)) {
        confpasserror.textContent = "Password Mismatch";
        validate = false;
    }
    console.log('Email is valid');
    // Email and Password are validated, now check if Email is present in users data in local and if yes then compare password
    var users = [];
    var newSummary = localStorage.getItem("users");
    users = JSON.parse(newSummary);
    //
    var objIndex = users.findIndex((function (obj) { return obj.emailId == userSummary.emailId; }));
    if (users[objIndex].password != (oldPassword === null || oldPassword === void 0 ? void 0 : oldPassword.value)) {
        wrongpassword.textContent = 'old Password not correct';
        validate = false;
    }
    if (validate === false)
        return;
    users[objIndex].companyName = companyName === null || companyName === void 0 ? void 0 : companyName.value;
    users[objIndex].emailId = email === null || email === void 0 ? void 0 : email.value;
    users[objIndex].password = confirmPassword === null || confirmPassword === void 0 ? void 0 : confirmPassword.value;
    // update users
    localStorage.setItem('users', JSON.stringify(users));
    // update current user
    localStorage.setItem("currentUser", JSON.stringify(users[objIndex]));
    // return window.location.href = 'dashBoard.html', true;
});
togglePasswordfield === null || togglePasswordfield === void 0 ? void 0 : togglePasswordfield.addEventListener('click', function (e) {
    // toggle the type attribute
    var type = (oldPassword === null || oldPassword === void 0 ? void 0 : oldPassword.getAttribute('type')) === 'password' ? 'text' : 'password';
    oldPassword === null || oldPassword === void 0 ? void 0 : oldPassword.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa fa-eye');
});
togglenewPasswordfield === null || togglenewPasswordfield === void 0 ? void 0 : togglenewPasswordfield.addEventListener('click', function (e) {
    // toggle the type attribute
    var type = (newPassword === null || newPassword === void 0 ? void 0 : newPassword.getAttribute('type')) === 'password' ? 'text' : 'password';
    newPassword === null || newPassword === void 0 ? void 0 : newPassword.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa fa-eye');
});
togglecnfPasswordfield === null || togglecnfPasswordfield === void 0 ? void 0 : togglecnfPasswordfield.addEventListener('click', function (e) {
    // toggle the type attribute
    var type = (confirmPassword === null || confirmPassword === void 0 ? void 0 : confirmPassword.getAttribute('type')) === 'password' ? 'text' : 'password';
    confirmPassword === null || confirmPassword === void 0 ? void 0 : confirmPassword.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa fa-eye');
});
