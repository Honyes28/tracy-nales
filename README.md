# Tracy Nales — Build Your Best Life

Four-page luxury brand website: black `#0B0B0B`, champagne `#D4B06A`, blush `#DFA0B7`, ivory `#F8F4EF`. Includes the updated English copy, Spanish translation, four services, four professional advantages, philosophy, TN brand direction, brokerage identification and Equal Housing Opportunity symbol.

## Pages

- `index.html`: Home — opening hero, philosophy immediately below, contact invitation.
- `about.html`: About — Tracy’s story and professional advantages.
- `services.html`: Services — Buyers, Sellers, Investment Properties, Homes With Potential.
- `contact.html`: Contact — phone and email links.

Navigation opens separate HTML pages, with the active page indicated. Spanish selection is carried between pages in the URL (`?lang=es`). There is no separate Philosophy page.

## Preview on your Mac

For a no-install preview, unzip the download and double-click `index.html`. Keep the other files beside it so navigation and images work. The earlier single-file preview represents the old one-page version.


From this folder, with Node.js and Python 3 installed:

```sh
npm run dev
```

Open http://localhost:3000. Build with `npm run build`; the deployable website is in `dist/`. No npm dependencies or environment variables are needed. Any static web server can serve the source folder.

## GitHub and Vercel

Create a GitHub repository and upload this folder's contents. In Vercel, choose Add New → Project and import that repository. The included `vercel.json` sets the build command to `npm run build` and output to `dist`. If this folder lives inside a larger repository, choose `tracy-nales` as the Vercel Root Directory.

Source repository: https://github.com/Honyes28/tracy-nales. Vercel deployments use the connected Git repository. TracyNales.com is displayed as supplied; domain ownership, DNS, and availability have not been checked. Connect the domain to Vercel after confirming ownership.

## Contact

- Phone: `757-646-3207`, linked to `tel:+17576463207`.
- Email: `tracynalesrealestate@gmail.com`, linked to `mailto:tracynalesrealestate@gmail.com`.
- The old draft form has been removed. Phone/email links open the visitor's configured calling/email application. They do not send automatically and no form backend is required.

## Before launch

Confirm the brokerage identity, credential wording, service area, required license numbers and advertising disclosures with Tracy and her brokerage. Have Tracy review the Spanish translation. Add a headshot if desired; no portrait of Tracy has been fabricated. Photographs are illustrative interiors, not listings or completed projects.

The supplied logo image was recreated with Image Gen for the website asset (`assets/tracy-logo.png`); it is not the original uploaded file. The footer uses the original supplied Swell Real Estate Co. logo (`assets/IMG_1534.PNG`). The About page uses Tracy’s supplied headshot (`assets/2.png`), with the illustrative interior photograph moved below the professional strengths. The Equal Housing Opportunity symbol is an SVG rendering with visible supporting text.

No analytics, cookies, contact storage, or tracking are implemented. Google Fonts loads externally; self-host if desired. Add a privacy notice appropriate to the final hosting and data handling setup. Set production canonical and social sharing metadata after confirming the domain.

## Editing

- `app.js`: English/Spanish copy, section markup, contact links and navigation.
- `styles.css`: palette, typography, spacing and responsive styles.
- `assets/tracy-logo.png`: logo recreation based on supplied reference.
- `assets/penthouse.jpg`, `assets/interior.jpg`: illustrative imagery.
- `index.html`: title, description and theme color.
- `design/concept.png`: updated visual concept, excluded from production output.

## Credits

Illustrative photographs from images.unsplash.com: `photo-1600607687920-4e2a09cf159d` and `photo-1600210492486-724fe5c67fb0`. License: https://unsplash.com/license. Concept and reference-based logo recreation generated with Image Gen. Cormorant Garamond and DM Sans serve the content; Allura is used only for the decorative Nales signature.
