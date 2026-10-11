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

All fifteen palettes (these two, nine red candidates and three space metal options) are in the theme switcher on every preview page. Wine & Saffron is the default.

## More red options (in the theme switcher and the palettes page)
All pass WCAG AA. Ratios: text/bg, text/surface, accent/bg, CTA/bg, label/CTA, support/bg.

| # | Palette | BG | Surface | Text | Accent | CTA | Label | Support | Ratios |
|---|---|---|---|---|---|---|---|---|---|
| 1 | Oxblood & Bone | #4A0F17 | #66202B | #F3E9DC | #D8A08F | #F1DCC8 | #2A0A10 | #8FB3A0 | 12.8 / 9.7 / 6.8 / 11.5 / 13.8 / 6.7 |
| 2 | Cranberry & Pistachio | #7A1530 | #962645 | #FBEDE6 | #F2B8C0 | #B9D6A0 | #2A0A12 | #9CC5B5 | 9.3 / 6.9 / 6.3 / 6.7 / 11.5 / 5.6 |
| 3 | Garnet & Coral | #5C1424 | #7B2336 | #FAEBE0 | #F4B9A0 | #FF9E85 | #2B0A10 | #8DB8A8 | 11.4 / 8.4 / 7.8 / 6.6 / 9.1 / 6.0 |
| 4 | Lacquer & Jade | #7D1B22 | #9A2B33 | #FBEDE3 | #F3B7AD | #9ED3BF | #1D0A0C | #C9B6E0 | 8.9 / 6.6 / 5.9 / 6.1 / 11.4 / 5.5 |
| 5 | Rosewood & Sage | #5A2430 | #743846 | #F6EAE4 | #E8B4B8 | #C9D8B6 | #25100F | #9DBFAF | 10.3 / 7.4 / 6.7 / 8.1 / 12.1 / 6.1 |
| 6 | Claret & Pewter | #55101F | #721C2E | #F7ECDD | #C9C3BE | #E7E2DC | #2A0A10 | #86B3A1 | 12.2 / 9.4 / 8.1 / 11.0 / 14.2 / 6.1 |
| 7 | Cherry Cola & Ash | #3F1A1A | #5A2825 | #F5E8DA | #C4BDB7 | #E4DED7 | #2A1208 | #8DB09A | 12.7 / 9.9 / 8.2 / 11.4 / 13.2 / 6.4 |
| 8 | Madder & Linen | #9A2A2A | #B33C3A | #FFF6EC | #FFD3C2 | #FFF6EC | #4A1010 | #B5DCCB | 7.2 / 5.4 / 5.6 / 7.2 / 14.3 / 5.1 |
| 9 | Mulberry & Mint | #5B1232 | #7A2146 | #FAEAEE | #F2A7BE | #BFE3D0 | #1F0A14 | #E8C0A0 | 11.5 / 8.5 / 7.0 / 9.6 / 13.6 / 7.9 |

### Yellow replaced with grey (owner request, 11 Oct 2026)
Wine & Saffron is unchanged: it is the named base and keeps its saffron. Two red candidates had yellow-gold accents and CTAs, so they became grey:
- Claret & Brass is now **Claret & Pewter**: accent #D9B26F to #C9C3BE, CTA #E3C27A to #E7E2DC.
- Cherry Cola & Caramel is now **Cherry Cola & Ash**: accent #E0A86E to #C4BDB7, CTA #F0C08A to #E4DED7.
Open question for the owner: should Wine & Saffron's own accent also go grey? If yes, it would become a variation, and the base would need renaming.

## Space metal options (grey direction, in the theme switcher and the palettes page)
Gunmetal, graphite and steel grounds with warm buttons so they read grown-up, not clinical.

| # | Palette | BG | Surface | Text | Accent | CTA | Label | Support | Ratios |
|---|---|---|---|---|---|---|---|---|---|
| 1 | Gunmetal & Copper | #23282E | #323A42 | #EEF0F1 | #9FB3C4 | #E0A28A | #1B1410 | #8FB5A6 | 13.0 / 10.1 / 6.9 / 6.9 / 8.4 / 6.6 |
| 2 | Graphite & Ember | #2B2B2E | #3B3B40 | #F1EEEA | #B9BCC2 | #E88B6A | #1E100B | #8DB3A3 | 12.2 / 9.6 / 7.4 / 5.6 / 7.3 / 6.1 |
| 3 | Steel & Sand | #38424C | #4A5662 | #F4F1EC | #C9CED3 | #E6C9A8 | #20262B | #9BC1B0 | 9.1 / 6.7 / 6.5 / 6.5 / 9.7 / 5.2 |

## Dropped
- Kiln & Lagoon
- Carmine & Blush
- Ultramarine & Marigold (reads too boyish and corporate)
- Poppy & Charcoal (too bland)
- Brick & Sand
- Pine & Paprika
- Plum & Apricot
- Rust & Cream (owner dropped it, 11 Oct 2026; it was the most orange-leaning of the red candidates)

The owner asked to keep only Wine & Saffron and one variation that replaces the yellow.
