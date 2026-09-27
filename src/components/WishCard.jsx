import WispMascot from './WispMascot.jsx';
import './WishCard.css';

/**
 * WishCard — shows what the (not-yet-built) prompt wizard will do: a
 * fixed, static example for now, with a "Wish granted!" moment at the end
 * that carries the mascot in its 'success' pose. This is a preview, not a
 * working feature — see the project outline's Phase 1 for the real wizard
 * that will replace the static example below.
 */
export default function WishCard() {
  return (
    <section className="wish-card">
      <div className="wish-card__label">Your wish, in Roman Urdu</div>
      <div className="wish-card__input">
        mujhe landlord ko email likhna hai, chhat leak ho rahi hai
      </div>

      <div className="wish-card__arrow" aria-hidden="true">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 4v14M6 13l6 6 6-6"
            stroke="var(--pj-gold)"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className="wish-card__label">PromptJinn's answer</div>
      <div className="wish-card__output">
        <div>Role — a polite tenant writing to their landlord</div>
        <div>Task — request an urgent repair for a roof leak</div>
        <div>Format — a short, formal email, three brief paragraphs</div>
        <button type="button" className="wish-card__copy" disabled>
          Copy prompt
        </button>
      </div>

      <div className="wish-card__success">
        <WispMascot pose="success" size={44} />
        <div>
          <div className="wish-card__success-title">Wish granted!</div>
          <div className="wish-card__success-body">
            This is a preview — the real builder lands in Phase 1.
          </div>
        </div>
      </div>
    </section>
  );
}
