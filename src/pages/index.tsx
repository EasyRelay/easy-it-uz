import Hero from "../components/Hero";
import Portfolio from "../components/Portfolio";
import Services from "../components/Services";
import Contact from "../components/Contact";
import { useEffect } from "react";

function Index() {

  useEffect(() => {
    window.scrollTo(0,0);
  })

  return (
    <div className="min-h-screen">
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="portfolio">
          <Portfolio />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default Index;