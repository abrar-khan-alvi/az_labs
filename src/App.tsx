/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import TechStack from "./components/TechStack";
import HowItWorks from "./components/HowItWorks";
import UseCases from "./components/UseCases";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";

export default function App() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-accent-cyan/30 overflow-x-hidden">
      <CustomCursor />
      <Navbar />
      <Hero />
      <TechStack />
      <Services />
      <HowItWorks />
      <UseCases />
      <Contact />
      <Footer />
    </main>
  );
}
