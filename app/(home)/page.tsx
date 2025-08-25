import About from "./components/about";
import Hero from "./components/hero";
import FeaturedMovies from "./components/featured-movies";
import StudioSpotlight from "./components/studio-spotlight";
import Services from "./components/services";

export default function Home() {
  return (
    <div className="space-y-20">
      <Hero />
      <About />
      <FeaturedMovies />
      <StudioSpotlight />
      <Services />
      <div className="h-[300vh]"/>
    </div>
  );
}