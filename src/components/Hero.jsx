import './Hero.css';

/**
 * Hero — the "Rub the lamp. Make a wish." headline block, straight from
 * the chosen theme mockup. Copy lives here as plain JSX text (not props or
 * config) on purpose: it's marketing copy someone edits by hand occasionally,
 * not data that changes at runtime.
 */
export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__eyebrow">No signup · runs in your browser</div>

      <div className="hero__headline-wrap">
        <h1 className="hero__headline">
          Rub the lamp.
          <br />
          Make a wish.
        </h1>
        <span className="hero__urdu-accent" lang="ur">
          چراغ
        </span>
      </div>

      <p className="hero__subhead">
        Describe what you want in Roman Urdu — typed or spoken — and get back a clean,
        structured AI prompt. No account. Nothing leaves your browser unless you say so.
      </p>

      <div className="hero__cta-row">
        <a className="hero__cta-primary" href="#builder">
          Make a wish →
        </a>
        <a className="hero__cta-secondary" href="#how-it-works">
          See how it works
        </a>
      </div>
    </section>
  );
}
