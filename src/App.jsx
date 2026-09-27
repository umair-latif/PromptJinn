import './App.css';
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import WishCard from './components/WishCard.jsx';
import FeatureStrip from './components/FeatureStrip.jsx';
import Footer from './components/Footer.jsx';

/**
 * App — the current landing page.
 *
 * This is v0.1: brand identity + static copy only, no working prompt logic
 * yet. It exists so the "Mystical Lamp & Ink" theme lives in real code
 * instead of only in a design mockup. The actual Roman Urdu → prompt wizard
 * (Phase 1 of the project outline) replaces the WishCard's static example
 * with a real input/output flow.
 */
export default function App() {
  return (
    <div className="page">
      <Nav />
      <main>
        <Hero />
        <WishCard />
        <FeatureStrip />
      </main>
      <Footer />
    </div>
  );
}
