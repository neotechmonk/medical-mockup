# Palettes

Roles: background, surface, text, accent, CTA, support. Both options pass WCAG AA as drawn on the palettes preview.

## Current options (two)
| Palette | Background | Surface | Text | Accent | CTA | Support |
|---|---|---|---|---|---|---|
| Wine & Saffron (base) | #6E1F2B | #8A2F3B | #F8E9D6 | #F0B54A | #F08A3C | #6FA28F |
| Wine & Clay (variation: dusty rose accent, no yellow or orange) | #6E1F2B | #8A2F3B | #F8E9D6 | #EDB5A9 | #B5472B (Deep Clay) | #6FA28F |

Wine & Clay keeps every role from the base except the accent and the CTA. Dusty Rose (#EDB5A9) reads 6.2:1 on the burgundy ground and 4.6:1 on the surface. Wine & Saffron's CTA stays orange (#F08A3C).

### CTA options for Wine & Clay (no orange or yellow)
Contrast ratios computed (WCAG luminance). A button needs 4.5:1 for its label and 3:1 for its edge against the ground.
| Option | Hex | Cream label (#F8E9D6) | Dark label (#2A0A10) | Fill vs background | Fill vs surface |
|---|---|---|---|---|---|
| **Deep Clay (applied)** | #B5472B | 4.52 pass | 3.39 | 2.06 | 1.53 |
| Terracotta | #C4552F | 3.76 fail | 4.08 | 2.48 | 1.84 |
| Muted Copper | #B8683F | 3.46 fail | 4.43 | 2.69 | 2.00 |
| Coral Clay (alternative, dark label) | #E07A5F | 2.47 | 6.19 pass | 3.76 pass | 2.79 |

Applied: Deep Clay with a cream label and a 2px cream ring (ring vs background 9.3:1), because the fill alone is too close to the burgundy to define the edge. Terracotta and Copper fail AA with a cream label, so they would need a dark label. Coral Clay is the pick if the owner prefers a lighter, more visible button with a dark label and no ring.

Both are in the theme switcher on the entry-question, home-neutral and copy-options previews.

## Dropped
- Kiln & Lagoon
- Carmine & Blush
- Ultramarine & Marigold (reads too boyish and corporate)
- Poppy & Charcoal (too bland)
- Brick & Sand
- Pine & Paprika
- Plum & Apricot

The owner asked to keep only Wine & Saffron and one variation that replaces the yellow.
