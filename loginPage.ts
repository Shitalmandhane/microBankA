storeData();
const emailId = document.querySelector<HTMLInputElement>("#emailField");
const errorEmail = document.querySelector<HTMLInputElement>('.invalid-email-message');
const password = document.querySelector<HTMLInputElement>("#pswField");
const weakPassword = document.querySelector<HTMLInputElement>('.weakPassword');
const togglePassword = document.querySelector('#togglePassword');
emailId?.addEventListener('click', () =>
{
    errorEmail!.textContent = "";
});
password?.addEventListener('click', () =>
{
    weakPassword!.textContent = "";
});
const submitBtn = document.getElementById('loginButton')
submitBtn?.addEventListener('click', function onClick ()
{
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailId!.value))
    {
        weakPassword!.textContent = "";
        if (password?.value.trim() == "" || password?.value == null || password?.value.length < 4)
        {
            weakPassword!.textContent = 'invalid Password';
            return;
        }
        console.log('Email is valid');
        // Email and Password are validated, now check if Email is present in users data in local and if yes then compare password
        var users: any = [];
        const newSummary = localStorage.getItem("users");

        users = JSON.parse(newSummary!);

        const userMatch: Summary = users.find((obj: any) =>
        {
            return obj.emailId === emailId!.value;
        });
        console.log(userMatch.password!);
        if (userMatch.password != password?.value)
        {
            weakPassword!.textContent = 'wrong Password';
            return;
        }

        localStorage.setItem("currentUser", JSON.stringify(userMatch));
        // localStorage.setItem(emailid, JSON.stringify(newSummary))

        return window.location.href = 'dashBoard.html', true;
    }
    else
    {
        if (password?.value.trim() == "" || password?.value == null || password?.value.length < 4)
        {
            weakPassword!.textContent = 'invalid Password';
        }
        errorEmail!.textContent = 'email is invalid';
        return;
    }

});
// const password = document.querySelector('#id_password');

togglePassword?.addEventListener('click', function (e)
{
    // toggle the type attribute
    const type = password?.getAttribute('type') === 'password' ? 'text' : 'password';

    password?.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa fa-eye');

});
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
function storeData ()
{
    var array = [];
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

}