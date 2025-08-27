import About from "./components/about";
import Hero from "./components/hero";
import FeaturedMovies from "./components/featured-movies";
import StudioSpotlight from "./components/studio-spotlight";
import Services from "./components/services";
import Directors from "./components/directors";
import Awards from "./components/awards";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div
      className="space-y-20"
    >
      <Hero />
      <About />
      <FeaturedMovies />
      <StudioSpotlight />
      <Services />
      <Directors />
      <Awards />
      <Footer />
    </div>
  );
}