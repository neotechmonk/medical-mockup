# AutoMed booking integration (research only, nothing built)

Current booking link: `automedsystems.com.au/ams/clinics/541/raby-medical-centre-raby-2566/doctors/a/menopause-consult-wednesdays`. It opens AutoMed's own hosted page with AutoMed's look and feel. Every "Book a consult" button on the mockups points there.

## Key finding
No public embed widget, iframe guide, API or developer documentation turned up for AutoMed Online Appointments. Their public pages are silent on all three. The only theming they mention is **"customisable colours, logos, banners, and alerts"**, which applies to AutoMed's own hosted booking page, not to a widget on our site. A themed embed would need AutoMed's cooperation, so the clinic (as the customer) has to ask them.

## What the public pages say (checked 11 Oct 2026)
Source: automedsystems.com.au/automed-online-appointments/ and the MedicalDirector knowledge base entry for AutoMed.
- Unlimited appointment types, each with its own custom pop-ups and pre-screening questions.
- Customisable colours, logos, banners and alerts.
- Optional pre-payments and post-consult telehealth payments (35c per processed transaction plus a Tyro rate).
- Integrates with Best Practice Premier, PracSoft, Medical Director and Helix.
- UTM source tracking with an automated redirect back to the clinic's website, plus Google Analytics updates.
- Nothing on a website button, embed, custom domain or API. Both pages say to contact AutoMed.
- The booking page itself blocks automated fetching (robots), so I could not inspect its markup or framing headers.

## What is possible now (no AutoMed involvement)
1. **Link out, themed on their side.** Ask the clinic to set AutoMed's colours, logo and banner to the chosen palette (hexes in `palettes.md`). Closest to the brand with no engineering. It still looks like AutoMed, just tinted.
2. **Separate links per service.** Create weight and sexual health appointment types in AutoMed (unlimited types are supported) and give each service page its own booking URL. This answers the open "appointment types" decision.
3. **Track it.** Use their UTM and redirect-to-site feature to see which service pages drive bookings.

## What needs AutoMed's cooperation (ask as a customer)
Questions for AutoMed support or the clinic's account contact:
- Is there an iframe or embed code for the booking flow, and is framing allowed from another domain (X-Frame-Options / CSP)?
- Is there a documented booking API (availability, appointment types, create booking), or a partner or white-label option? Any extra cost?
- Can the hosted page use a custom domain or subdomain of the clinic's site (for example book.thetimelesspassions.com.au)?
- Can styling go beyond colours, logos and banners (fonts, button shape, custom CSS)?
- How are payments handled (Tyro) if the flow is embedded or custom?
- Can a deep link preselect an appointment type, and can it pass a UTM tag?

## What a hacked-together version would involve on our side
- **Iframe test (cheapest).** Squarespace Code block with an `<iframe>` to the booking URL, in a section styled to the palette. Works only if AutoMed does not block framing. Check in a browser: if the console shows a refused-to-display error, it is blocked. This still shows AutoMed's own look inside the frame.
- **Custom front-end calling AutoMed's logic.** Only realistic with an official API. Reverse-engineering their private endpoints is brittle, may breach their terms and would handle patient details, payments and Medical Director/Best Practice sync. Not recommended without their written agreement.
- **Dynamic piece we can do ourselves.** A small Code Injection script on Squarespace that sends each service page's button to the right appointment-type URL and adds UTM tags. Squarespace Code Injection needs a Core, Plus or Advanced plan.

## Suggested next step
Ask the clinic to send AutoMed the question list above and, in parallel, ask them to set the hosted page colours to the chosen palette. Decide on embed versus themed link-out once AutoMed answers.

Sources: [AutoMed Online Appointments](https://automedsystems.com.au/automed-online-appointments/), [AutoMed on MedicalDirector knowledge base](https://knowledge.clinical.medicaldirector.com/topics/automed_systems.html).

## Weight page booking button (11 Oct 2026)
`docs/service-weight/`, `service-sexual-health/` and `service-open/` link to the existing menopause consult URL as a stand-in. Each needs its own appointment type and URL in AutoMed before this is real. `service-menopause/` uses the correct menopause URL.

`docs/booking/` is service aware (`?service=weight|menopause|sexual-health|general`). Only menopause has a real consult type; the others use the menopause link as a stand-in and say so on the page. Fees, contact and booking are skeletons: all prices, Medicare/bulk billing notes and contact details are TBC.
