import About from "./components/about";
import Hero from "./components/hero";
import FeaturedMovies from "./components/featured-movies";
import StudioSpotlight from "./components/studio-spotlight";

export default function Home() {
  return (
    <div className="space-y-20">
      <Hero />
      <About />
      <FeaturedMovies />
      <StudioSpotlight />
      <div className="h-[100vh] w-full bg-black" />
    </div>
  );
}