# project overview
To develop a modern, professional, and responsive website for a law firm specializing in Corporate Legal Services and Intellectual Property Rights (IPR), especially patents. The platform should inform clients about the firm's services, display legal credentials, collect leads via a popup form, and enable easy communication.

# Tech Stack
| Layer         | Tech Used                            |
| ------------- | ------------------------------------ |
| Frontend      | Next.js, Tailwind CSS, Shadcn/ui     |
| UI Components | Shadcn/ui library (Radix-based)      |
| Backend/API   | Node.js with Express (optional)      |
| Database      | MongoDB (for form submissions)       |
| Hosting       | Vercel / Netlify                     |
| Optional CMS  | Sanity / Strapi / Headless WordPress |


# Core Features
- Fully responsive layout with professional UI

- Dynamic content pages for:

- Practice Areas (e.g. IPR, Real Estate, Litigation, etc.)

- Team Members with bios and filterable roles

- Blog/Insights for legal updates and case studies

- Popup form for IPR services:

- Fields: Name, Email, Phone, Service (dropdown)

- Contact Us page with embedded map and form

- Careers page with job listings (optional CMS)

- Compliance disclaimer banner as per Bar Council of India

- SEO meta tags and Open Graph support

- Smooth page transitions and animations

# folder structure
EXP_PROJECT/
├── testing/
│   ├── app/
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx, 
│   │   ├── page.tsx
│   │   ├── components/
│   │   ├── ipr/
│   │   ├── hooks/
│   │   └── lib/
│   │       └── utils.ts
│   ├── node_modules/
│   ├── public/
│   ├── requirements/
│   │   └── frontend_instructions.md
│   ├── .gitignore
│   ├── components.json
│   ├── eslint.config.mjs
│   ├── next-env.d.ts
│   ├── next.config.ts
│   ├── package-lock.json
│   ├── package.json
│   ├── postcss.config.mjs
│   ├── README.md
│   └── tsconfig.json

# Admin Features (Optional)
- CMS dashboard to manage blog posts, team bios, case studies

- Authenticated route for admin updates

# rules
- try to put new components in /components section
- and all new pages in the /app