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

All eight palettes (Wine & Saffron, Wine & Clay, Oxblood & Bone, Oxblood & Saffron, Mulberry & Mint, Titanium & Rose, Mulberry & Silver, Mulberry & Pewter) are in the theme switcher on every preview page. Wine & Saffron is the default.

## Red options kept (owner review, 11 Oct 2026)
All in the theme switcher and the palettes page, all WCAG AA. Ratios: text/bg, text/surface, accent/bg, CTA/bg, label/CTA, support/bg.

| Palette | BG | Surface | Text | Accent | CTA | Label | Support | Ratios |
|---|---|---|---|---|---|---|---|---|
| Oxblood & Bone | #4A0F17 | #66202B | #F3E9DC | #D8A08F | #F1DCC8 | #2A0A10 | #8FB3A0 | 12.8 / 9.7 / 6.8 / 11.5 / 13.8 / 6.7 |
| Oxblood & Saffron | #4A0F17 | #66202B | #F3E9DC | #F0B54A | #F1DCC8 | #2A0A10 | #8FB3A0 | 12.8 / 9.7 / 8.3 / 11.5 / 13.8 / 6.7 |
| Mulberry & Mint | #5B1232 | #7A2146 | #FAEAEE | #F2A7BE | #BFE3D0 | #1F0A14 | #E8C0A0 | 11.5 / 8.5 / 7.0 / 9.6 / 13.6 / 7.9 |

## Space metal options
Moon-landing direction: metallic silver and grey with a rosewood or sage tint, warm enough not to read clinical. Replaces the first grey trio (Gunmetal & Copper, Graphite & Ember, Steel & Sand), which read too industrial.

| Palette | BG | Surface | Text | Accent | CTA | Label | Support | Ratios |
|---|---|---|---|---|---|---|---|---|
| Titanium & Rose | #2E2B2D | #423D40 | #F2EFEE | #B9B4B6 | #D8A9A5 | #261718 | #9DB5A5 | 12.2 / 9.3 / 6.8 / 6.8 / 8.3 / 6.4 |

## Grey variations (owner request, 11 Oct 2026)
Wine & Saffron and Mulberry & Mint with the yellow or mint softened toward grey. Warm greys only; the owner dislikes lilac. Wine & Saffron itself is unchanged and stays the default. Cap: no more than 20 palettes in total (currently 8).

| Palette | BG | Surface | Text | Accent | CTA | Label | Support | Ratios |
|---|---|---|---|---|---|---|---|---|
| Mulberry & Silver | #5B1232 | #7A2146 | #FAEAEE | #CBC6C8 | #E6E2E3 | #1F0A14 | #A8C4B4 | 11.5 / 8.5 / 7.9 / 10.4 / 14.7 / 7.1 |
| Mulberry & Pewter | #5B1232 | #7A2146 | #FAEAEE | #C4BDB9 | #E2DCD6 | #1F0A14 | #9FB9A9 | 11.5 / 8.5 / 7.2 / 9.8 / 13.9 / 6.3 |

## Dropped
- Kiln & Lagoon
- Carmine & Blush
- Ultramarine & Marigold (reads too boyish and corporate)
- Poppy & Charcoal (too bland)
- Brick & Sand
- Pine & Paprika
- Plum & Apricot
- Rust & Cream (the most orange-leaning)
- Lacquer & Jade
- Cranberry & Pistachio
- Cherry Cola & Caramel (briefly Cherry Cola & Ash)
- Claret & Brass (briefly Claret & Pewter)
- Madder & Linen
- Garnet & Coral (kept earlier, then dropped by the owner 11 Oct 2026)
- Moon Dust & Rosewood, Lunar Silver & Sage, Wine & Silver, Wine & Slate, Mulberry Smoke & Mint (grey experiments, dropped 11 Oct 2026)
- Rosewood & Sage (kept earlier, then dropped by the owner 11 Oct 2026)
- Gunmetal & Copper, Graphite & Ember, Steel & Sand (first grey trio, replaced by the moon-landing set)

The owner asked to keep only Wine & Saffron and one variation that replaces the yellow.

## Text colour variants (grey text), owner request 11 Oct 2026
Not palettes: a second list in the theme switcher that overrides the text colour on top of any palette. Background, surface, accent and CTA stay as they are. The "muted" colour is also lifted so secondary text stays AA.
| Flavour | Hex | Worst-case body ratio across the palettes in the switcher (on the lightest surface) |
|---|---|---|
| Cool grey | #D3D9DF | 5.8:1 |
| Taupe grey | #D6CBC1 | 5.2:1 |
| Stone grey | #D9D8D2 | 5.8:1 |
| **Metal grey** | #C8C8C8 | 4.9:1 |
Metal grey is a true neutral grey (no cream tint) and the darkest grey that clears AA on every surface, so it reads clearly as grey rather than cream. Muted text with a grey override is at least 4.7:1 on every surface for the four tinted greys and 4.6:1 for Metal grey. Also selectable by URL: `?text=warm-grey`.

Update 11 Oct 2026: the owner dropped "Palette default (cream)" and Warm grey. Text colour options are now Cool grey (default), Taupe grey, Stone grey and Metal grey, so the preview pages always show grey text.

Oxblood & Saffron (owner request, 11 Oct 2026) is Oxblood & Bone with only the accent changed, bone #D8A08F to saffron #F0B54A, the same saffron as Wine & Saffron.
