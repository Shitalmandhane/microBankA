const accountNumber = document.querySelector<HTMLInputElement>("#account");
const income = document.querySelector<HTMLInputElement>("#income");
const spend = document.querySelector<HTMLInputElement>("#spend");
var nameInitial = document.querySelector<HTMLInputElement>("#pt");
// console.log(accountNumber, income, spend);
var CurrentUser = localStorage.getItem("currentUser")

if (CurrentUser == null)
{
    console.log("email is not valid");
}
else
    console.log(JSON.parse(CurrentUser));
var userSummary: any = JSON.parse(CurrentUser!);
console.log(userSummary.accountNumber);
accountNumber!.innerHTML = userSummary.accountNumber;
income!.innerHTML = userSummary.income;
spend!.innerHTML = userSummary.spend;
var fullName = userSummary.fullName.split(' ');
console.log(fullName);
var initials = fullName.shift().charAt(0) + fullName.shift().charAt(0);
console.log(initials);
nameInitial!.innerHTML = initials;
var popup = document.querySelector<HTMLInputElement>(".profileB");
popup?.addEventListener('click', function (e)
{
    const profile = document.querySelector<HTMLInputElement>(".profile");
    const profileName = document.querySelector<HTMLInputElement>("#profileName");
    const mailID = document.querySelector<HTMLInputElement>("#mailId");
    const pt1 = document.querySelector<HTMLInputElement>("#pt1");
    console.log(fullName);
    // popup!.classList.toggle("show");
    if (profile!.style.display == 'block')
        profile!.style.display = 'none';
    else profile!.style.display = 'block';
    profileName!.innerHTML = userSummary.fullName;
    mailID!.innerHTML = userSummary.emailId;
    pt1!.innerHTML = initials;

});

// accountNumber!.textContent = temp!.AccountNumber;
// income?.textContent = Summary1!.Income;

// profileB


