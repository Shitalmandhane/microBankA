var accountNumber = document.querySelector("#account");
var income = document.querySelector("#income");
var spend = document.querySelector("#spend");
var nameInitial = document.querySelector("#pt");
// console.log(accountNumber, income, spend);
var CurrentUser = localStorage.getItem("currentUser");
if (CurrentUser == null) {
    console.log("email is not valid");
}
else
// console.log(JSON.parse(CurrentUser));
var userSummary = JSON.parse(CurrentUser);
// console.log(userSummary.accountNumber);
accountNumber.innerHTML = userSummary.accountNumber;
income.innerHTML = userSummary.income;
spend.innerHTML = userSummary.spend;
var fullName = userSummary.fullName.split(' ');
console.log(fullName);
var initials = fullName.shift().charAt(0) + fullName.shift().charAt(0);
// console.log(initials);
nameInitial.innerHTML = initials;
var popup = document.querySelector(".profileB");
popup === null || popup === void 0 ? void 0 : popup.addEventListener('click', function (e) {
    var profile = document.querySelector(".profile");
    var profileName = document.querySelector("#profileName");
    var mailID = document.querySelector("#mailId");
    var pt1 = document.querySelector("#pt1");
    console.log(fullName);
    // popup!.classList.toggle("show");
    if (profile.style.display == 'block')
        profile.style.display = 'none';
    else
    profile.style.display = 'block';
    profileName.innerHTML = userSummary.fullName;
    mailID.innerHTML = userSummary.emailId;
    pt1.innerHTML = initials;
});
// accountNumber!.textContent = temp!.AccountNumber;
// income?.textContent = Summary1!.Income;
// profileB
