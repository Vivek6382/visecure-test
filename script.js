
//Nav_Bar
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('nav a');
let reserveBtn = document.querySelector('.R_btn');

// Function to scroll to a specific section
const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
        window.scrollTo({
            top: section.offsetTop,
            behavior: 'smooth'
        });
    }
};

// Add click event listener to the Reserve Now button
reserveBtn.addEventListener('click', () => {
    scrollToSection('contact_us');
});

// Highlight the active section in the navigation bar
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
};


// Function to toggle navigation bar background color based on scroll position
const toggleNavbarBackground = () => {
    const navbar = document.querySelector('nav');
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
};

// Add scroll event listener to toggle navigation bar background
window.addEventListener('scroll', toggleNavbarBackground);

//Nav_Bar_End


//Home_Page
AOS.init({
    offset:1
  });
//Home_Page_End

// About_Us

//Init
AOS.init();
// About_Us_End

//Our_Team

$('.O_team-members').slick({
    slidesToShow: 3,
    speed: 300,
    prevArrow:'#left-arrow',
    nextArrow:'#right-arrow',
    centerPadding: '60px',
    responsive: [
{
breakpoint: 1024,
settings: {
slidesToShow: 3,
slidesToScroll: 1,
infinite: true,
}
},
{
breakpoint: 900,
settings: {
slidesToShow: 2,
slidesToScroll: 1,
}
},
{
breakpoint: 760,
settings: {
slidesToShow: 1,
slidesToScroll: 1,
}
}]});

//Our_Team_End

//Contact_Us
// const form = document.querySelector('form');
// const FirstName = document.getElementById("first");
// const LastName = document.getElementById("last");
// const Email = document.getElementById("email");
// const Mobile = document.getElementById("mobile");
// const Message = document.getElementById("msg");

// function sendEmail() {
//     const bodyMessage = `First Name: ${FirstName.value} <br>  Last Name: ${LastName.value} <br> Email: ${Email.value} <br> Mobile: ${Mobile.value} <br> Message: ${Message.value} <br>`;

//     Email.send({
//         Host : "smtp.elasticemail.com",
//         Username : "visecurepvt@gmail.com",
//         Password : "0E92C97A51881A6AC283D319E1565B31B558",
//         To : 'visecurepvt@gmail.com',
//         From : "visecurepvt@gmail.com",
//         Subject : "This is the subject",
//         Body : bodyMessage
//     }).then(
//         message => alert(message)
//     );
// }

// form.addEventListener("submit", (e) => {
//     e.preventDefault(); // Prevent default form submission behavior

//     sendEmail(); // Call the sendEmail function to send the email
// });

//Contact_Us_End