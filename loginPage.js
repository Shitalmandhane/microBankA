storeData();
var emailId = document.querySelector("#emailField");
var errorEmail = document.querySelector('.invalid-email-message');
var password = document.querySelector("#pswField");
var weakPassword = document.querySelector('.weakPassword');
var togglePassword = document.querySelector('#togglePassword');
emailId === null || emailId === void 0 ? void 0 : emailId.addEventListener('click', function () {
    errorEmail.textContent = "";
});
password === null || password === void 0 ? void 0 : password.addEventListener('click', function () {
    weakPassword.textContent = "";
});
var submitBtn = document.getElementById('loginButton');
submitBtn === null || submitBtn === void 0 ? void 0 : submitBtn.addEventListener('click', function onClick() {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailId.value)) {
        weakPassword.textContent = "";
        if ((password === null || password === void 0 ? void 0 : password.value.trim()) == "" || (password === null || password === void 0 ? void 0 : password.value) == null || (password === null || password === void 0 ? void 0 : password.value.length) < 4) {
            weakPassword.textContent = 'invalid Password';
            return;
        }
        console.log('Email is valid');
        // Email and Password are validated, now check if Email is present in users data in local and if yes then compare password
        var users = [];
        var newSummary = localStorage.getItem("users");
        users = JSON.parse(newSummary);
        var userMatch = users.find(function (obj) {
            return obj.emailId === emailId.value;
        });
        console.log(userMatch.password);
        if (userMatch.password != (password === null || password === void 0 ? void 0 : password.value)) {
            weakPassword.textContent = 'wrong Password';
            return;
        }
        localStorage.setItem("currentUser", JSON.stringify(userMatch));
        // localStorage.setItem(emailid, JSON.stringify(newSummary))
        return window.location.href = 'dashBoard.html', true;
    }
    else {
        if ((password === null || password === void 0 ? void 0 : password.value.trim()) == "" || (password === null || password === void 0 ? void 0 : password.value) == null || (password === null || password === void 0 ? void 0 : password.value.length) < 4) {
            weakPassword.textContent = 'invalid Password';
        }
        errorEmail.textContent = 'email is invalid';
        return;
    }
});
// const password = document.querySelector('#id_password');
togglePassword === null || togglePassword === void 0 ? void 0 : togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    var type = (password === null || password === void 0 ? void 0 : password.getAttribute('type')) === 'password' ? 'text' : 'password';
    password === null || password === void 0 ? void 0 : password.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa fa-eye');
});
function storeData() {
    var array = [];
    var key = 'users';
    var newSummary = {
        emailId: "s.mand@gmail.com",
        password: "abcd",
        accountNumber: 11112222,
        income: "$20,00,000",
        spend: "$10,00,000",
        companyName: "abc",
        fullName: "John Smith"
    };
    array.push(newSummary);
    var newSummary = {
        emailId: "p.h@gmail.com",
        password: "pqrs",
        accountNumber: 22223333,
        income: "$30,00,000",
        spend: "$20,00,000",
        companyName: "pqr",
        fullName: "Will Hmith"
    };
    array.push(newSummary);
    var newSummary = {
        emailId: "m.n@rediffmail.com",
        password: "qwer",
        accountNumber: 44447777,
        income: "$50,00,000",
        spend: "$20,00,000",
        companyName: "qwe",
        fullName: "Helle Peter"
    };
    array.push(newSummary);
    var newSummary = {
        emailId: "m.n@gmail.com",
        password: "lkmy",
        accountNumber: 12121212,
        income: "$20,00,000",
        spend: "$10,00,000",
        companyName: "pour",
        fullName: "Kelly Hmns"
    };
    array.push(newSummary);
    localStorage.setItem(key, JSON.stringify(array));
}
