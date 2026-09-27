/**
 * WispMascot — the small line-art "wisp of smoke" spirit explored on the
 * theme canvas. Deliberately abstract (no face beyond simple dot eyes and a
 * curved mouth) rather than a genie caricature — it's meant to read as
 * charming brand detail, not a mascot-heavy kids'-app character.
 *
 * Per the agreed motif density (subtle, mostly landing/marketing + key
 * moments), this only shows up in a few places: here on the landing page's
 * success card, and later on real empty/loading/success states in the
 * product itself — never as persistent chrome around the working tools.
 *
 * pose: 'idle' | 'thinking' | 'success'
 */
export default function WispMascot({ pose = 'idle', size = 56, color = 'var(--pj-gold)' }) {
  const w = 90;
  const h = 100;
  const body = (
    <path
      d="M45 92 C20 92 14 70 20 54 C25 40 16 30 24 16 C30 6 45 4 52 14 C60 4 76 10 76 24 C76 36 68 40 70 54 C74 72 68 92 45 92 Z"
      fill="none"
      stroke={color}
      strokeWidth="2.4"
      strokeLinejoin="round"
    />
  );

  return (
    <svg width={size} height={(size * h) / w} viewBox={`0 0 ${w} ${h}`} aria-hidden="true">
      {body}
      {pose === 'idle' && (
        <>
          <circle cx="37" cy="46" r="3" fill={color} />
          <circle cx="55" cy="46" r="3" fill={color} />
          <path d="M38 58 Q46 64 54 58" stroke={color} strokeWidth="2.2" fill="none" strokeLinecap="round" />
        </>
      )}
      {pose === 'thinking' && (
        <>
          <path d="M34 44 Q37 40 40 44" stroke={color} strokeWidth="2.2" fill="none" strokeLinecap="round" />
          <path d="M52 44 Q55 40 58 44" stroke={color} strokeWidth="2.2" fill="none" strokeLinecap="round" />
          <path d="M40 60 Q46 57 52 60" stroke={color} strokeWidth="2.2" fill="none" strokeLinecap="round" />
          <circle cx="66" cy="18" r="2.5" fill={color} opacity="0.8" />
          <circle cx="72" cy="10" r="2" fill={color} opacity="0.6" />
          <circle cx="78" cy="4" r="1.6" fill={color} opacity="0.4" />
        </>
      )}
      {pose === 'success' && (
        <>
          <path d="M33 45 Q37 41 41 45" stroke={color} strokeWidth="2.2" fill="none" strokeLinecap="round" />
          <path d="M51 45 Q55 41 59 45" stroke={color} strokeWidth="2.2" fill="none" strokeLinecap="round" />
          <path d="M36 56 Q46 68 56 56" stroke={color} strokeWidth="2.4" fill="none" strokeLinecap="round" />
          <path d="M14 20 l4 4 M76 16 l-4 4 M18 76 l4 -4" stroke={color} strokeWidth="2" strokeLinecap="round" />
        </>
      )}
    </svg>
  );
}
