/* partial_generator.js */

// Standard Navbar Generator
let standardNavbar = document.getElementById("standard_navbar");
if (standardNavbar !== null) {
    standardNavbar.innerHTML = `
            <section class="banner-section">
            <h1>Palmarino DiMarco</h1>
            </section>
            <ul id="nav_links">
                <li><a href="index.html">Home</a></li>
                <li><a href="https://github.com/Picard4" target="_blank">GitHub</a></li>
                <li><a href="inspirations.html">Inspirations</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>`;
}

// Standard Footer Generator
let standardFooter = document.getElementById("standard_footer");
if (standardFooter !== null) {
    standardFooter.innerHTML = `
        <h3>Sources</h3>
        <a href="http://www.johnabbott.qc.ca/john-abbott-set-to-reveal-hall-of-distinction/" target="_blank">John Abbott</a>
        <a href="https://noeticforce.com/best-game-engines" target="_blank">Game Engines</a>
        <a href="https://www.amazon.ca/Calculus-Early-Transcendentals-James-Stewart/dp/1285741552" target="_blank">Calculus</a>
        <a href="https://www.nintendo.co.uk/Wii-U/Wii-U-344102.html" target="_blank">Wii U</a>
        <a href="https://colorpalettes.net/color-palette-4134/" target="_blank">Color Palette</a>`;
}