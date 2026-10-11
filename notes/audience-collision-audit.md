# Audience collision audit

Scope: shared sections that every visitor sees whichever door they pick (hero, nav, about Dr Majella, footer, booking CTA, shared imagery direction). Checked against `notes/context.md`, `principles.md`, `copy.md`, `layout.md`, `docs/layouts/`, `docs/a/` and `docs/b/`.

## The risk

The per-path routing is sound: a visitor for weight management or sexual and intimate health is not asked to read menopause copy to get started. The leak is in what sits outside the doors. The hook screen, nav, about section, booking button and footer are shared, so any tilt toward menopause, toward women, or toward a particular age says the same thing to everyone. Someone arriving for medical weight management (all genders) or sexual and intimate health (all genders and relationships) quietly concludes "this is a menopause clinic" and leaves, while the menopause visitor (assigned female at birth, 40-45 or 45 and up) loses nothing from a more even shared layer. The fix is to keep shared language even across all three services and let each path carry its own specifics.

## Findings

Severity: **High** = likely to cost a visitor, **Medium** = worth fixing, **Low** = polish.

### High
1. **Every booking button goes to a menopause consult page.** All CTAs in A, B and the wireframes link to `.../doctors/a/menopause-consult-wednesdays`. A weight or sexual health visitor who clicks "Book a consult" lands on a booking page named for menopause. Excludes: weight, sexual health. Fix: confirm whether the booking system has appointment types for weight and sexual health; if so, link each path to its own, and keep the shared button neutral ("Book a consult") pointing to a general type. If not, tell people plainly what they are booking.
2. **Weight path copy in Version B is menopause-coded.** B: "Your hormones changed the game. Weight care that finally accounts for that." The owner decided weight is gender-neutral only. Excludes: men and anyone whose weight concern is not hormonal. Fix: drop it; use the agreed lines ("Not a willpower problem." / "You've carried the blame long enough.").
3. **Version B's shared hero is female-coded.** "Hot flushes, stubborn weight, a libido that's gone quiet." and the hero image direction "woman in her 50s laughing mid-conversation". If this hero is shared, it excludes men and anyone not a woman in the menopause audience, for both weight and sexual health. Fix: keep B only as the menopause path's own hero; use the neutral hero (A) for the shared top screen.

### Medium
4. **"Midlife" is an age signal in the shared hero.** A pill: "GP care for midlife, with time to talk". Headline: "Midlife changed the rules. Let's work out the new ones." The owner called the headline a natural hook, so keep it, but the pill adds a second age label before anyone has chosen a path. Excludes: weight or sexual health visitors in their 20s and 30s. Fix: make the pill age-free (see rewrites).
5. **"Three things midlife tends to bring."** (A) frames weight and sexual health as consequences of midlife. Excludes: anyone whose concern is not midlife-driven, and sits oddly against "not a willpower problem". Fix: "Three things worth talking about. One place to do it."
6. **About line leads with menopause.** "A GP with a special interest in menopause medicine, psychosexual therapy and weight management." Menopause first, and "psychosexual therapy" is clinical jargon for the sexual health visitor. Excludes: weight visitors (reads as an afterthought) and sexual health visitors (unclear). Fix: keep the owner's stated interests but order them evenly and use plain words (see rewrites). Do not add credentials.
7. **Single long scroll puts the longest menopause block in front of everyone.** In the layout notes the menopause section (with 40-45 and 45+ segments) is the largest and comes first, above weight and intimate health. A weight visitor scrolling or jumping by anchor still passes it. Fix: give each service its own page or a collapsed section if Squarespace allows; otherwise balance section length and put menopause last or alphabetical.
8. **Doctor's pronouns and gender are not confirmed.** B uses "She gives you time" and image captions say "her desk". The owner has not stated Dr Majella's pronouns. A male visitor for sexual health may also hesitate on a female doctor; do not guess at that, but do not settle it by pronoun either. Fix: use "Dr Majella" and no pronouns in shared copy until confirmed.
9. **Entry-card labels single out menopause.** "All genders" on weight and intimate health, and a long "assigned female at birth, including trans men and non-binary people" on menopause, makes menopause the labelled exception on the hook screen. Fix: shorten and lighten the menopause line; keep "all genders" only where it earns its space.

### Low
10. **Menopause is first in the nav and entry order.** Defensible (it is the clinic's best-known service) but it adds weight to the tilt. Consider alphabetical (Intimate health, Menopause, Weight) or lead with the first-screen order the owner prefers.
11. **"Pain, low desire, or just not feeling like yourself?"** (B, sexual health) reads female-coded in a shared context. Use only on the female-oriented path; keep the shared version to "Intimacy changes. No judgement, no rush, your pace."
12. **Hero image direction is "midlife" throughout.** All guidance targets the 40s to 60s. Fix: allow some people in their 30s in shared imagery, mixed gender, no scales or tape measures, no bedrooms.

Fine as is: "Time. No scripts. No judgement."; "Not another diet."; "Intimacy changes."; the footer line "Your usual GP remains central to general medical care."

## Rewrite suggestions

Same voice: heard, not blamed, short, warm.

| Where | Now | Suggested |
|---|---|---|
| Hero pill | GP care for midlife, with time to talk | GP care with time to talk |
| Section lead-in (A) | Three things midlife tends to bring. One place to talk about them. | Three things worth talking about. One place to do it. |
| Booking button, shared | Book a consult | Book a consult (link to a general appointment type) |
| About, shared | A GP with a special interest in menopause medicine, psychosexual therapy and weight management. Appointments are for talking things through properly, and nothing is too awkward to raise. | Dr Majella is a GP with a special interest in menopause, weight and sexual and intimate health. Appointments are for talking things through properly, and nothing is too awkward to raise. |
| About, B | She gives you time, and nothing you bring is too awkward. | Dr Majella gives you time, and nothing you bring is too awkward. |
| Menopause entry card | For anyone assigned female at birth, including trans men and non-binary people | For anyone going through perimenopause or menopause |
| Weight path (B) | Your hormones changed the game. | Not a willpower problem. You've carried the blame long enough. |

## Checklist: about Dr Majella and footer

About (appears on every path):
- [ ] No pronouns until the owner confirms them
- [ ] Services listed evenly: no one service leads without reason
- [ ] No "midlife", "women" or age wording in the shared bio
- [ ] Plain words in place of "psychosexual therapy" where it stands alone
- [ ] No credentials, memberships or claims added that the owner has not supplied (leave the placeholder)
- [ ] Photo direction: relaxed, unposed, natural light, no clinical white
- [ ] Includes the "nothing is too awkward" idea, in neutral words

Footer (appears on every path):
- [ ] "Your usual GP remains central to general medical care." kept
- [ ] Address, phone, privacy and ABN placeholders left as placeholders, not invented
- [ ] No menopause-only link or label in the footer nav; list services alphabetically or evenly
- [ ] Shared booking link points at a general appointment type, or each path has its own
- [ ] No imagery or colour that tilts toward one audience

## Decisions for the owner
1. Does the booking system offer weight and sexual health appointment types, or only the menopause consult shown in the link?
2. Confirm Dr Majella's pronouns for the shared copy, or use the name only.
3. Keep "midlife" in the hero pill, or let the headline carry the age cue alone?
4. Separate pages per service in Squarespace, or one long scroll?
