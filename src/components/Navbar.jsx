
import { useState } from "react";

function Navbar({ darkMode, setDarkMode }) {
    const [menuOpen, setMenuOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Services", href: "#services" },
        { name: "Features", href: "#features" },
        { name: "Team", href: "#team" },
        { name: "Contact", href: "#contact" }
    ];

    return (
        <nav className="navbar">
            <a href="#home" className="logo">
                Digital<span>World.</span>
            </a>

            <button
                className="menu-toggle"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                {menuOpen ? "✕" : "☰"}
            </button>

            <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
                {navLinks.map((link) => (
                    <li key={link.name}>
                        <a
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                        >
                            {link.name}
                        </a>
                    </li>
                ))}
            </ul>

            <button
                className="theme-toggle"
                onClick={() => setDarkMode(!darkMode)}
            >
                {darkMode ? "☀️" : "🌙"}
            </button>
        </nav>
    );
}

export default Navbar;
