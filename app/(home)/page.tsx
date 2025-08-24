import About from "./components/about";
import Hero from "./components/hero";
import FeaturedMovies from "./components/featured-movies";

export default function Home() {
  return (
    <div className="space-y-20">
      <Hero />
      <About />
      <FeaturedMovies />
    </div>
  );
}