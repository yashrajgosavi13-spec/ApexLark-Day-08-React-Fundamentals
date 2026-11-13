
import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Features from "./components/Features";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FAQ from "./components/FAQ";
import ScrollToTop from "./components/ScrollToTop";

function App() {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <div className={darkMode ? "app dark-mode" : "app"}>
            <Navbar
                darkMode={darkMode}
                setDarkMode={setDarkMode}
            />

            <main>
                <Hero />
                <About />
                <Services />
                <Features />
                <Team />
                <FAQ />
                <Contact />
                </main>
                <Footer />
                <ScrollToTop />
        </div>
    );
}

export default App;
