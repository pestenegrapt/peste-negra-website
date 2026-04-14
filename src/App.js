import "@/App.css";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Music from "@/components/Music";
import Lyrics from "@/components/Lyrics";
import Videos from "@/components/Videos";
import PreSave from "@/components/PreSave";
import Merch from "@/components/Merch";
import TourDates from "@/components/TourDates";
import Guestbook from "@/components/Guestbook";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

function App() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navigation />
      <Hero />
      <ScrollReveal>
        <About />
      </ScrollReveal>
      <ScrollReveal>
        <Music />
      </ScrollReveal>
      <ScrollReveal>
        <Lyrics />
      </ScrollReveal>
      <ScrollReveal>
        <Videos />
      </ScrollReveal>
      <ScrollReveal>
        <PreSave />
      </ScrollReveal>
      <ScrollReveal>
        <Merch />
      </ScrollReveal>
      <ScrollReveal>
        <TourDates />
      </ScrollReveal>
      <ScrollReveal>
        <Guestbook />
      </ScrollReveal>
      <ScrollReveal>
        <Contact />
      </ScrollReveal>
      <Footer />
    </div>
  );
}

export default App;
