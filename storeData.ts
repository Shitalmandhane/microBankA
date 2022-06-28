var array = [];
type Summary =
    {
        emailId: string
        password: string
        accountNumber: number
        income: string
        spend: string
        companyName: string
        fullName: string

    }
var key = 'users';
var newSummary: Summary =
{
    emailId: "s.mand@gmail.com",
    password: "abcd",
    accountNumber: 11112222,
    income: "$20,00,000",
    spend: "$10,00,000",
    companyName: "abc",
    fullName: "John Smith"
}
array.push(newSummary);
var newSummary: Summary =
{
    emailId: "p.h@gmail.com",
    password: "pqrs",
    accountNumber: 22223333,
    income: "$30,00,000",
    spend: "$20,00,000",
    companyName: "pqr",
    fullName: "Will Hmith"
}
array.push(newSummary);
var newSummary: Summary =
{
    emailId: "m.n@rediffmail.com",
    password: "qwer",
    accountNumber: 44447777,
    income: "$50,00,000",
    spend: "$20,00,000",
    companyName: "qwe",
    fullName: "Helle Peter"
}
array.push(newSummary);
var newSummary: Summary =
{
    emailId: "m.n@gmail.com",
    password: "lkmy",
    accountNumber: 12121212,
    income: "$20,00,000",
    spend: "$10,00,000",
    companyName: "pour",
    fullName: "Kelly Hmns"
}
array.push(newSummary);
localStorage.setItem(key, JSON.stringify(array))