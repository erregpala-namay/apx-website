# APX Architectural & Engineering Services — Website

A responsive, static Astro website starter for APX. The project is designed to be maintained in GitHub and deployed to GitHub Pages, with the option to move to Netlify, Vercel, or conventional hosting later.

## What's included

- Home, About, Services, Projects, and Contact pages
- Original geometric APX-inspired logo and favicon (not a trace of the Facebook profile logo)
- Original SVG architectural illustrations used as clearly identified concept/placeholder artwork
- Responsive desktop and mobile navigation
- Portfolio category filters
- Contact form that prepares an email in the visitor's email application (no data is transmitted or stored by this site)
- Basic SEO metadata, Open Graph tags, sitemap integration, and LocalBusiness/ProfessionalService structured data
- GitHub Actions workflow for GitHub Pages deployment

## Requirements

- Node.js 22 LTS (or a compatible current Node.js release)
- npm
- Git

## Run locally

```bash
npm install
npm run dev
```

Open the local address printed by Astro, usually `http://localhost:4321`.

## Build and preview

```bash
npm run build
npm run preview
```

The production website is generated in `dist/`.

## Publish to GitHub

1. Create a new GitHub repository named `YOUR-USERNAME.github.io` (this gives you a root-level GitHub Pages site and avoids path changes for this starter).
2. In this project folder, run:

```bash
git init
git add .
git commit -m "Initial APX website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/apx-website.git
git push -u origin main
```

3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, select **GitHub Actions** as the source.
5. Each push to `main` will run `.github/workflows/deploy.yml`. When the workflow succeeds, GitHub will show the published site URL in the Pages settings and workflow deployment environment.

### Important: GitHub Pages URL and repository base path

The current Astro configuration uses `base: '/'`, which is correct for a custom domain or a GitHub repository named `YOUR-USERNAME.github.io`. The site uses root-relative links and image paths, so use a user/organization site repository or a custom domain for this starter as supplied.

If you specifically need a project site at `https://YOUR-USERNAME.github.io/apx-website/`, you must also update root-relative links and image paths to respect Astro’s base URL throughout the components and content before deployment. The Astro configuration change is:

```js
export default defineConfig({
  site: 'https://YOUR-USERNAME.github.io',
  base: '/apx-website',
  integrations: [sitemap()],
  output: 'static'
});
```

For a custom domain, set `site` to the final domain and `base` back to `/`. Add the domain in GitHub Pages settings and configure the DNS records requested by GitHub. Add a `public/CNAME` file containing only the domain name if required by your deployment setup.

## Move to another host

- **Netlify:** connect the repository; build command `npm run build`; publish directory `dist`.
- **Vercel:** import the repository; framework preset Astro; build command `npm run build`; output directory `dist`.
- **Traditional static hosting:** upload the contents of `dist/` to the host's public web directory.

## Update business information

Edit `src/data/site.ts` to update the phone, email, address, Facebook page URL, service descriptions, and portfolio items.

The Facebook URL is intentionally a placeholder. Replace `https://www.facebook.com/` with the exact APX Page URL.

## Replace sample portfolio art before launch

The SVG files in `public/images/` are original illustrations for layout testing and concept presentation. They are not photographs of completed APX projects, approved construction drawings, or evidence of built work.

Replace them with photographs, renderings, plans, and project descriptions that APX owns or has permission to publish. Update the image paths and alt text in `src/data/site.ts` and the home page. Do not present illustrative artwork as a completed client project.

## Content that APX should verify

Before public launch, confirm:

- Exact Facebook Page URL
- Business address and whether it is a public office address
- Actual services offered and scope of each service
- Whether the sample elevated bungalow details remain accurate
- Team details, credentials, licenses, professional affiliations, and company history (only if APX wants to publish them)
- Whether the business wants a custom domain and a real inquiry form backend

## Contact form behavior

The contact form uses `mailto:` to open the visitor's configured email application. It does not send automatically, store inquiries, or protect against lost messages. For a hosted form, connect a service such as Formspree or a custom backend after choosing the provider and reviewing its privacy terms.

## License

No third-party logo or project photography is bundled. The original starter source and SVG illustrations may be adapted by the APX site owner. Add a formal license only after deciding how the business wants its source code and assets to be reused.
