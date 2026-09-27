import './FeatureStrip.css';

const FEATURES = [
  { title: 'No signup, ever' },
  { title: 'Roman Urdu native' },
  { title: 'Runs in your browser' },
];

/**
 * FeatureStrip — the three-pill trust strip under the wish card. Kept as a
 * small data array + map so adding a fourth feature later is a one-line
 * change, not a copy-pasted block.
 */
export default function FeatureStrip() {
  return (
    <section className="feature-strip">
      {FEATURES.map((feature) => (
        <div key={feature.title} className="feature-strip__item">
          {feature.title}
        </div>
      ))}
    </section>
  );
}
