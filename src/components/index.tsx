import Hero from "./Hero";
import Portfolio from "./Portfolio";
import Services from "./Services";
import Contact from "./Contact";

function Index() {
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