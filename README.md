# Law Firm Web Application

This is a web application for a law firm, built with Next.js and TypeScript. It provides a modern and professional online presence for the firm, showcasing their practice areas, team members, and blog.

## Live Site

The web application is deployed and accessible at: [https://arsagslegal.vercel.app/](https://arsagslegal.vercel.app/)

## Features

*   **Home Page:** A welcoming landing page with a hero section and an overview of the firm.
*   **Practice Areas:** A dedicated section to detail the firm's areas of legal expertise.
*   **Our Team:** Introduces the firm's legal team with profiles for each member.
*   **Blog:** A blog for publishing articles and updates.
*   **Contact Us:** A contact form and information for potential clients.
*   **Responsive Design:** The application is fully responsive and works on all devices.
*   **Admin Dashboard:** A secure admin dashboard to manage the site's content.
    *   Manage active cases.
    *   View and manage client requests.
    *   Handle contact requests.
    *   Approve, pend, or delete requests.
*   **Request Consultancy Form:** When a user fills the request consultancy form from a specific practice area, the practice area and service type are auto-filled.
*   **Secure Login:** User authentication is implemented using JWT (JSON Web Tokens) for secure access to the admin dashboard.

## Technologies Used

*   **Framework:** [Next.js](https://nextjs.org/)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **UI Components:** [Shadcn/ui](https://ui.shadcn.com/) and [Radix UI](https://www.radix-ui.com/)
*   **Authentication:** [JWT (JSON Web Tokens)](https://jwt.io/)

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
