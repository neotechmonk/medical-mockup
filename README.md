# medical-mockup

Working repo for the **MidlifeHealth** website (thetimelesspassions.com.au), a GP clinic site for Dr Majella Soumakiyan: menopause and perimenopause care, medical weight management, sexual and intimate health.

This repo is **public**. Keep patient data, credentials and personal details out of it.

## What lives here

| Path | Purpose |
|---|---|
| `notes/` | Project context, principles, decisions, copy, palettes, layout notes. Read these first. |
| `docs/` | Public previews, served by GitHub Pages (from `main`, `/docs`). Mockups are reviewed here before anything is built in Squarespace. |
| `src/` | Source files the previews are built from (exported canvas artboards and copy). |

## How work is done

- Work runs in parallel: separate agents own separate concerns (copy, palette, layout, previews) and write to separate files.
- Colour and layout are decided as separate concerns. Colour first, layout after.
- Every preview is static HTML under `docs/`, listed on `docs/index.html`.
- Final build happens in Squarespace (single long-scroll landing page); this repo is where we get there.

See `notes/workflow.md`.
