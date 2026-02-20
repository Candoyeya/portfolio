# Alejandro Estrada Hernandez – Personal Portfolio

Personal portfolio website showcasing my experience, skills, and projects as a Full Stack Developer (Front-End focused).

🌐 **Live:** [alejandroestrada.net](https://alejandroestrada.net)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Markup | HTML5 |
| Styling | Tailwind CSS v3 (CDN) |
| Scripting | Vanilla JavaScript (ES6+) |
| Fonts | Google Fonts – Inter |
| Icons / Logos | Devicons CDN |
| Favicon | Custom – generated with Pencil, converted to `.ico` via Pillow (Python) |
| Hosting | AWS S3 (static website hosting) |
| CDN + HTTPS | AWS CloudFront + ACM certificate |
| DNS | AWS Route 53 |
| Domain | `alejandroestrada.net` (registered via AWS) |

---

## Features

- **Single-page layout** with smooth scroll and active nav link highlighting
- **Fully responsive** — mobile-first design with Tailwind `md:` breakpoints
- **Animated mobile menu** — slide-in panel from right with backdrop, built with Tailwind transitions and vanilla JS
- **Scroll-reveal animations** — sections fade in as they enter the viewport via IntersectionObserver
- **Sticky header** with shadow on scroll
- **Click-to-copy** for email and phone number
- **WhatsApp deep link** — phone number opens a direct WhatsApp chat
- **Downloadable CV** — PDF served directly from the site
- **Project screenshots** and **company logos** displayed with `object-cover` / `object-contain`
- **Favicon** served in `.ico` and `.png` formats with Apple touch icon support

---

## Project Structure

```
portfolio/
├── index.html                  # Main single-page file
├── main.js                     # All JS behaviour (menu, scroll, copy, reveal)
├── favicon.ico                 # Multi-size favicon (16–256px)
├── assets/
│   ├── Alejandro_Estrada_Hernandez_ATS_EN.pdf   # Downloadable CV
│   └── images/
│       ├── AE_favicon_512x512.png
│       ├── Profile/
│       │   ├── Profile1.jpeg   # Hero section photo
│       │   └── Profile2.jpeg   # About section photo
│       ├── projects/           # Project screenshots
│       └── jobs/               # Company logos
└── README.md
```

---

## Infrastructure (AWS)

```
User → Route 53 (DNS) → CloudFront (HTTPS + CDN) → S3 (static files)
```

- **S3 bucket** named `alejandroestrada.net`, configured for static website hosting with public read policy
- **CloudFront distribution** with HTTPS redirect and ACM-issued SSL certificate
- **ACM certificate** covering `alejandroestrada.net` and `www.alejandroestrada.net` (us-east-1)
- **Route 53** A record aliased to the CloudFront distribution

---

## Design Credit

UI design based on the Figma community template by [Sagar Shah](https://www.figma.com/community/file/1100794861710979393), adapted and extended with custom sections, mobile responsiveness, and personal content.

---

## License

See [LICENSE](./LICENSE) for details. Personal content (photos, CV, project descriptions) is not covered by the MIT license and remains the intellectual property of Alejandro Estrada Hernandez.
