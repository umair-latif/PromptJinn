import './LampMark.css';

/**
 * LampMark — the brand mark: a genie lamp with a wisp of smoke that
 * resolves into a small constellation of connected nodes (magic + "AI
 * thinking", at once). This is the one icon used everywhere a brand mark
 * is needed — the nav logo, the favicon source, and the mascot moment on
 * WishCard — so the lamp never drifts into two different drawings.
 *
 * Where this art comes from: an earlier hand-drawn attempt (freehand SVG
 * bezier curves, authored blind with no way to preview them) came out
 * looking like a rough sketch, not a logo. Rather than try to hand-draw
 * it better, we generated a reference image, then produced this SVG by
 * *tracing* that image with potrace (a real vector-tracing tool) — so the
 * curves are mathematically derived from real artwork pixels, not guessed.
 * The four node circles were located the same way: OpenCV's Hough-circle
 * detector found their exact centers and radii in the source image, so
 * they sit precisely on the traced wires instead of being eyeballed.
 * See /docs/logo-provenance.md for the full trace pipeline if you want to
 * regenerate this from a new reference image later.
 *
 * pose:
 *   'idle'     — resting mark, nothing animated (used in the nav)
 *   'thinking' — the four nodes pulse, staggered, like active processing
 *   'success'  — resting mark again; the moment already reads as "done"
 *                without needing extra motion
 */
export default function LampMark({ size = 22, color = 'var(--pj-gold)', pose = 'idle' }) {
  const thinking = pose === 'thinking';

  // Centers/radii of the four constellation nodes, in the same 0–1254
  // pixel space as the traced lamp path below (found via cv2.HoughCircles
  // on the source image — see the provenance note above).
  const nodes = [
    { cx: 977.5, cy: 306.5, r: 25.2, delay: '0s' },
    { cx: 907.5, cy: 397.5, r: 21.0, delay: '0.2s' },
    { cx: 1061.5, cy: 387.5, r: 23.0, delay: '0.4s' },
    { cx: 1011.5, cy: 451.5, r: 18.8, delay: '0.6s' },
  ];

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 1254 1254"
      fill={color}
      aria-hidden="true"
    >
      {/* Traced lamp body + smoke + connecting wires. Node circles are cut
          out of this path (see provenance note) so the separate <circle>
          elements below can animate independently without a solid disc
          showing through underneath them. */}
      <g transform="translate(0,1254) scale(0.1,-0.1)">
        <path d="M9960 9275 l-24 -26 235 -235 235 -235 23 32 23 31 -228 229 c-126
126 -231 229 -235 229 -3 0 -16 -11 -29 -25z" />
        <path d="M9533 9233 c-69 -80 -229 -284 -302 -384 l-61 -82 28 -17 c15 -9 32
-16 37 -16 6 0 55 59 109 131 55 71 144 185 199 253 54 68 97 124 95 125 -1 1
-15 12 -29 25 l-26 23 -50 -58z" />
        <path d="M9277 8456 l-16 -35 62 -34 c34 -19 145 -78 247 -130 102 -53 222
-117 267 -142 l83 -45 19 37 19 38 -325 170 c-179 94 -328 171 -332 173 -4 1
-15 -13 -24 -32z" />
        <path d="M10672 8423 c-17 -3 -22 -10 -19 -21 85 -295 115 -491 98 -636 -10
-89 -34 -175 -64 -231 l-14 -28 -11 45 c-25 97 -142 229 -303 338 l-55 38 -27
-33 -26 -33 68 -56 c159 -130 216 -220 216 -341 0 -169 -103 -278 -463 -488
-203 -119 -275 -170 -342 -244 -78 -85 -114 -168 -115 -263 0 -95 26 -153 107
-232 47 -47 86 -71 221 -137 90 -44 179 -92 197 -107 40 -34 69 -96 70 -146
l0 -36 -37 18 c-99 47 -333 75 -548 67 -360 -15 -666 -97 -1221 -330 -514
-215 -533 -221 -714 -220 -94 0 -147 5 -214 22 -158 38 -335 127 -471 236 -90
73 -115 85 -182 92 l-54 6 -46 71 c-55 85 -184 217 -271 275 -84 57 -189 105
-289 134 l-83 23 50 49 c83 81 109 187 75 301 -18 61 -56 119 -145 223 -38 43
-84 100 -103 125 l-35 45 -26 -34 c-15 -19 -67 -80 -116 -136 -118 -135 -154
-208 -154 -309 -1 -97 28 -164 95 -224 l48 -43 -65 -18 c-188 -51 -380 -195
-520 -391 -25 -36 -45 -67 -42 -69 2 -2 42 21 88 52 105 68 262 148 355 180
276 95 543 63 759 -91 59 -42 196 -178 196 -194 0 -10 -215 -40 -375 -52 -262
-21 -569 -7 -840 36 -219 35 -292 40 -335 22 -19 -9 -80 -53 -135 -98 -156
-130 -292 -211 -440 -261 -93 -32 -260 -35 -315 -5 -99 52 -130 111 -135 254
-4 124 -23 216 -64 306 -128 283 -403 471 -736 504 -115 11 -270 1 -365 -23
-383 -97 -655 -353 -766 -720 -24 -80 -27 -107 -28 -240 0 -116 4 -166 18
-220 75 -282 251 -497 516 -630 152 -77 310 -118 668 -175 264 -42 412 -99
508 -195 94 -94 82 -155 -36 -188 -186 -52 -203 -284 -28 -371 77 -39 173 -37
256 4 68 34 110 77 146 148 105 207 10 460 -232 616 -156 101 -274 142 -593
205 -266 52 -360 80 -495 146 -266 129 -409 312 -444 565 -19 141 16 309 92
438 53 92 189 220 283 269 128 66 201 85 351 90 157 7 251 -10 360 -63 268
-131 405 -424 304 -651 -63 -143 -219 -227 -334 -179 -51 21 -52 34 -4 55 139
60 152 222 25 295 -98 56 -203 40 -292 -47 -43 -42 -57 -64 -70 -111 -69 -239
150 -466 424 -442 139 13 251 64 349 159 l52 51 58 -55 c111 -108 230 -182
407 -252 795 -318 2037 -291 3090 67 309 105 509 186 1010 413 171 78 373 166
450 197 230 91 497 161 695 180 l55 6 -70 -24 c-249 -83 -454 -194 -690 -371
-120 -91 -238 -193 -500 -434 -292 -269 -480 -428 -682 -579 -548 -407 -1062
-633 -1638 -719 -169 -25 -571 -25 -740 1 -329 49 -719 187 -1025 361 l-64 37
25 -33 c44 -58 209 -198 324 -274 171 -115 422 -226 596 -265 l55 -12 24 -74
c23 -73 23 -74 5 -115 -28 -61 -122 -141 -226 -193 -50 -25 -100 -46 -110 -46
-39 0 -236 -70 -294 -105 -108 -64 -162 -151 -133 -213 19 -40 140 -96 288
-133 428 -106 1115 -136 1695 -73 408 44 743 134 777 209 17 37 -15 110 -68
161 -58 54 -176 111 -283 136 -164 38 -303 113 -372 200 -49 63 -57 104 -31
166 11 26 22 59 26 74 5 22 15 29 49 38 217 55 565 206 820 357 370 219 652
445 1103 884 288 280 408 391 524 484 325 261 666 414 1080 484 61 11 121 26
133 34 14 9 36 47 55 97 68 173 32 264 -149 381 -200 129 -261 279 -181 442
42 84 151 188 291 277 292 186 317 204 416 304 85 85 108 116 148 196 128 256
125 512 -9 938 -38 117 -36 115 -92 105z m-4688 -1852 c77 -112 71 -193 -19
-235 -35 -17 -39 -17 -82 -1 -37 14 -49 25 -64 61 -20 45 -19 74 7 125 20 40
94 130 102 125 4 -2 29 -36 56 -75z m975 -1175 c160 -94 348 -161 488 -173 40
-3 73 -9 73 -13 0 -13 -398 -139 -584 -185 -411 -101 -732 -139 -1176 -139
-396 -1 -612 21 -974 99 -194 42 -459 125 -430 135 10 4 59 17 108 29 145 34
358 148 527 282 25 20 25 20 135 0 271 -48 372 -56 754 -56 389 0 468 7 825
69 72 12 137 19 145 15 8 -4 57 -32 109 -63z m-689 -2018 c0 -2 -9 -28 -19
-58 l-18 -55 -89 -24 c-81 -22 -109 -25 -309 -25 -181 -1 -234 2 -301 18 -45
10 -87 22 -94 26 -12 7 -34 89 -26 97 2 2 69 -1 148 -8 158 -13 422 -6 573 16
92 13 135 17 135 13z m229 -438 c69 -46 220 -120 289 -141 55 -16 47 -20 -103
-54 -513 -115 -1230 -112 -1745 6 -123 28 -123 28 -40 58 158 59 298 141 391
232 32 32 58 49 68 46 9 -3 48 -17 86 -30 234 -84 613 -74 838 22 l41 17 55
-56 c31 -31 85 -76 120 -100z" />
      </g>

      {/* The four constellation nodes, drawn directly in the same 0–1254
          pixel space as the traced path above (no transform needed here).
          Only 'thinking' gets the pulse class — idle/success stay solid. */}
      {nodes.map((n, i) => (
        <circle
          key={i}
          cx={n.cx}
          cy={n.cy}
          r={n.r}
          className={thinking ? 'pj-lamp-node pj-lamp-node--pulse' : 'pj-lamp-node'}
          style={thinking ? { animationDelay: n.delay } : undefined}
        />
      ))}
    </svg>
  );
}
