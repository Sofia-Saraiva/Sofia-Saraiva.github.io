
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            // Remove 'active' class from all navigation links
            navLinks.forEach(link => {
                link.classList.remove('active');
            });

            // Add 'active' class to the corresponding navigation link
            document.querySelector('nav a[href*=' + id + ']').classList.add('active');
        }
    });
};