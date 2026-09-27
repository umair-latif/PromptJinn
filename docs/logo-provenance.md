# Where the lamp mark comes from

This is here because the logo went through a few failed attempts before
landing on the current one, and the fix is worth remembering the next time
the art needs to change.

## What didn't work

The first two attempts at the lamp icon were hand-drawn: SVG `<path>` data
written freehand, bezier curve by bezier curve, with no way to render or
preview the result before showing it. That produced a genuinely rough
result — it read as a sketch, not a logo. Guessing curve control points
blind is just not a reliable way to draw.

## What worked: tracing, not drawing

1. A reference image was generated from a text-to-image prompt (a flat
   gold lamp-with-smoke-and-node-constellation icon on an indigo
   background).
2. That PNG was thresholded into a black/white mask (`Pillow`, luminosity
   cutoff) separating the gold linework from the background.
3. The mask was vectorized with **potrace** — a real tracing algorithm,
   not a hand-drawn guess — which turned the pixel silhouette into
   accurate bezier paths.
4. The four constellation-node circles were cut out of that mask *before*
   tracing (so the traced path has clean holes where they belong), and
   their exact centers/radii were found separately with **OpenCV's
   `HoughCircles`** detector run on the original image. That's what lets
   `LampMark.jsx` draw them as independent `<circle>` elements that can
   pulse — a hand-measured guess would have made them sit slightly off
   the traced wires.
5. The traced path and the detected circles share one coordinate space
   (the source image's own 1254×1254 pixel grid), so they line up without
   any manual coordinate-fudging.

## Regenerating it later

If the reference art changes, redo steps 1–4 rather than hand-editing the
path data in `LampMark.jsx` — that data is machine-derived, and hand
edits to it are exactly the kind of blind-bezier guessing that caused the
first attempt to fail.

## License note

This version was traced from an original image generated for this
project, not from any third-party icon set — no external attribution is
required for it. (An earlier candidate, sourced from game-icons.net's
"Magic Lamp" icon by Lorc under CC BY 3.0, was explored on the theme
canvas but was not adopted; if that ever changes, its attribution
requirement would need to be added back here and to the README.)
