/* partial_generator.js */

// Standard Navbar Generator
let standardNavbar = document.getElementById("standard_navbar");
if (standardNavbar !== null) {
    standardNavbar.innerHTML = `
            <section class="banner-section">
            <h1>Palmarino DiMarco</h1>
            </section>
            <ul id="nav_links">
                <li><a href="index.html">About Me</a></li>
                <li><a href="projects.html">Projects</a></li>
            </ul>`;
}

// Standard Footer Generator
let standardFooter = document.getElementById("standard_footer");
if (standardFooter !== null) {
    standardFooter.innerHTML = `
        <h3>Contact Me</h3>
        <a href="https://github.com/Picard4" target="_blank">GitHub</a>
        <a href="mailto:palmardimarco@gmail.com">Email</a>
        <a href="https://www.linkedin.com/in/palmarino-dimarco-132865217/" target="_blank">LinkedIn</a>`;
}