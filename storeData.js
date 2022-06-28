var usersArray = [];
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
usersArray.push(newSummary);
var newSummary = {
    emailId: "p.h@gmail.com",
    password: "pqrs",
    accountNumber: 22223333,
    income: "$30,00,000",
    spend: "$20,00,000",
    companyName: "pqr",
    fullName: "Will Hmith"
};
usersArray.push(newSummary);
var newSummary = {
    emailId: "m.n@rediffmail.com",
    password: "qwer",
    accountNumber: 44447777,
    income: "$50,00,000",
    spend: "$20,00,000",
    companyName: "qwe",
    fullName: "Helle Peter"
};
usersArray.push(newSummary);
var newSummary = {
    emailId: "m.n@gmail.com",
    password: "lkmy",
    accountNumber: 12121212,
    income: "$20,00,000",
    spend: "$10,00,000",
    companyName: "pour",
    fullName: "Kelly Hmns"
};
usersArray.push(newSummary);
localStorage.setItem(key, JSON.stringify(usersArray));
