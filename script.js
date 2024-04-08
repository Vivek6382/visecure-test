//Nav_Bar
document.addEventListener('DOMContentLoaded', function() {
    let navLinks = document.querySelectorAll('nav div a');

    // Add click event listener to navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Remove 'active' class from all navigation links
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            // Add 'active' class to the clicked navigation link
            this.classList.add('active');
        });
    });
});


AOS.init({
    offset:1
});