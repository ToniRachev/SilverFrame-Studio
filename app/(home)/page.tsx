import About from "./components/about";
import Hero from "./components/hero";

export default function Home() {
  return (
    <div className="space-y-20">
      <Hero />
      <About />
    </div>
  );
}