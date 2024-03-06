const form = document.querySelector('form');
const FirstName = document.getElementById("first");
const LastName = document.getElementById("last");
const Email = document.getElementById("email");
const Mobile = document.getElementById("mobile");
const Message = document.getElementById("msg");

function sendEmail() {
    const bodyMessage = `First Name: ${FirstName.value} <br>  Last Name: ${LastName.value} <br> Email: ${Email.value} <br> Mobile: ${Mobile.value} <br> Message: ${Message.value} <br>`;

    Email.send({
        Host : "smtp.google.com",
        Username : "innovatioki123@gmail.com",
        Password : "gdhdvfvpzawdgmim",
        To : 'visecurepvt@gmail.com',
        From : "visecurepvt@gmail.com",
        Subject : "This is the subject",
        Body : bodyMessage
    }).then(
        message => alert(message)
    );
}

form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    sendEmail(); // Call the sendEmail function to send the email
});

// Contact_Us_End



// function for tranform the side menu

function openMenu() {
    document.getElementById('mobile-menu').style.display = 'block';
}

function closeMenu() {
    document.getElementById('mobile-menu').style.display = 'none';
}
