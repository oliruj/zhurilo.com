# zhurilo.com

Personal site of Max Zhurilo. Static HTML, no build step.

- `index.html` — English version, `ru/index.html` — Russian version
- `styles.css`, `site.js` — shared styles and the email link script
- `logos/`, `max.jpg` — images
- Design follows the Bindary design system (tokens, pills, type scale); Diatype and Marist are replaced with Source Serif 4 and Geist because of licensing and Cyrillic support

Deployed with GitHub Pages from the `main` branch; `CNAME` points the custom domain.
To publish a change, push to `main`. To preview locally: `python3 -m http.server 8080` in this folder.
