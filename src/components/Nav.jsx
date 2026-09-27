import LampMark from './LampMark.jsx';
import './Nav.css';

/**
 * Nav — top bar: logo mark + wordmark on the left, a few nav labels on the
 * right. The links are plain <a href="#"> placeholders for now; they'll
 * point at real routes once those pages exist (Phase 1+ of the roadmap).
 */
export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav__brand">
        <LampMark size={22} />
        <span className="nav__wordmark">PromptJinn</span>
      </div>
      <div className="nav__links">
        <a href="#prompts">Prompts</a>
        <a href="#cards">Cards</a>
        <a href="#personas">Personas</a>
        <a href="#about">About</a>
      </div>
    </nav>
  );
}
