/**
 * LampMark — the small lamp-outline icon used as the logo mark, next to the
 * mascot in WishCard's success state, and anywhere else a tiny brand mark
 * is needed. Kept as one shared component so the icon never drifts between
 * places it's used.
 */
export default function LampMark({ size = 22, color = 'var(--pj-gold)' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M7 20c0-3 2-4 2-7a3 3 0 1 1 6 0c0 3 2 4 2 7"
        stroke={color}
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path d="M9 20h6" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
      <path d="M12 13v-2" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
      <path
        d="M12 8.5c1.2-1 1-2.4-.2-3"
        stroke={color}
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  );
}
