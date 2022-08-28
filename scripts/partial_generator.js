/* partial_generator.js */

// Standard Navbar Generator
let standardNavbar = document.getElementById("standard_navbar");
if (standardNavbar !== null) {
    standardNavbar.innerHTML = `
        <h1 id="nav_label">Palmarino DiMarco</h1>
        <ul id="nav_links">
            <li><a href="index.html">About Me</a></li>
            <li><a href="projects.html">Projects</a></li>
        </ul>`;
}

// Standard Footer Generator
let standardFooter = document.getElementById("standard_footer");
if (standardFooter !== null) {
    standardFooter.innerHTML = `
        <h3 id="footer_label">Contact Me</h3>
        <ul id="contact_links">
            <li><a href="https://github.com/Picard4" target="_blank">GitHub</a></li>
            <li><a href="mailto:palmardimarco@gmail.com">Email</a></li>
            <li><a href="https://www.linkedin.com/in/palmarino-dimarco-132865217/" target="_blank">LinkedIn</a></li>
        </ul>`;
}