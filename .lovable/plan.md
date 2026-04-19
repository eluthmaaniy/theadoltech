
## Personal Portfolio — Adebisi Olamide (Adoltech)

A Shopify-focused portfolio site styled like a Shopify Partner agency. Strict ash/black/white palette, no gradients, Inter font, Remix Icon.

### Pages & Routes
- `/` — **About** (landing): hero intro, who he is, what he does, services overview, brief stats, CTA
- `/reviews` — Client testimonials with name, role, store, quote, rating
- `/portfolio` — Grid of Shopify projects (image, title, short description, key result)
- `/portfolio/full` — Detailed case studies (problem → solution → results, screenshots, tech used)
- `/contact` — Contact form, email, social links, availability

### Layout
- Persistent header with logo "Adoltech" + nav (About, Reviews, Portfolio, Contact) + "Hire Me" button
- Footer with quick links, socials, copyright
- Mobile hamburger menu

### About / Landing sections
1. Hero — name, tagline ("Shopify Developer & Store Optimization Specialist"), CTA buttons
2. Short bio paragraph
3. Services grid (Shopify store setup, theme customization, migration, speed optimization, app integration, conversion optimization)
4. Stats strip (projects delivered, stores launched, years of experience)
5. Selected work preview (3 cards → link to /portfolio)
6. CTA banner → /contact

### Reviews page
- Featured testimonial at top
- Grid of testimonial cards with star ratings
- Logos strip of brands worked with

### Portfolio page
- Filterable grid (All / Theme / Migration / Optimization)
- Each card: cover image, title, 1-line description, result tag (e.g. "+38% conversion")
- Each card links to full case study section

### Full Portfolio page
- Long-form case studies (3–4 detailed): overview, challenge, approach, results metrics, gallery, testimonial from client
- Sticky side index for jumping between projects

### Contact page
- Contact form (name, email, project type select, message) — simple submit feedback (no backend)
- Email + social links (Twitter/X, LinkedIn, GitHub, Dribbble)
- Availability indicator ("Available for new projects")

### Design System
- Colors: white `#FFFFFF`, ash `#F4F4F5` / `#E4E4E7` / `#A1A1AA`, black `#000000`. No gradients, flat fills only.
- Typography: Inter (400/500/600/700) via Google Fonts; large display headings, generous line-height
- Borders: 1px solid ash for cards/dividers; subtle hover states (bg shift, no shadow gradients)
- Icons: Remix Icon via CDN stylesheet
- Buttons: solid black primary, outlined secondary, no rounded-full (slightly rounded `rounded-md`)
- Spacing: roomy padding, max-w container, clear section rhythm

### Responsiveness
- Mobile-first, hamburger nav, single-column stacks
- Tablet: 2-column grids
- Desktop: 3–4 column grids, sticky elements where helpful

### SEO / Meta
- Each route gets its own `head()` with title, description, og tags

### Out of scope (placeholders used)
- Real project imagery — will use neutral placeholder images and clear labels he can swap later
- No backend: contact form shows success state only
