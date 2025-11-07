# Cedra Scholarship Program Landing Page

A modern landing page for the Cedra Scholarship Program - Next Gen Web3 Builders on Cedra, built with Next.js and Tailwind CSS.

## Features

- Responsive landing page with background image support
- Modern header with V.Builders branding
- Hero section with call-to-action button
- Information section with prepared for/by details
- Built with Next.js 16 and React 19

## Prerequisites

- Node.js 18+ or pnpm 8+
- npm/pnpm/yarn package manager

## Getting Started

### 1. Installation

Extract the project and install dependencies:

\`\`\`bash
npm install
# or
pnpm install
# or
yarn install
\`\`\`

### 2. Development

Run the development server:

\`\`\`bash
npm run dev
# or
pnpm dev
# or
yarn dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### 3. Build for Production

\`\`\`bash
npm run build
npm run start
# or
pnpm build
pnpm start
\`\`\`

## Customization

### Change Background Image

Edit `app/page.tsx` and modify the background image URL:

\`\`\`tsx
backgroundImage: "url(/your-image.jpg)"
\`\`\`

Place your image in the `public/` folder and reference it.

### Update Content

All text content is in `app/page.tsx`. Modify directly to update:
- Header text
- Hero title and subtitle
- Button text
- Prepared for/by information

### Modify Styling

- Colors are defined inline using Tailwind classes
- Font sizes and spacing use Tailwind utilities
- Adjust the `text-7xl`, `text-6xl`, etc. classes to change heading sizes

## Deployment to Vercel

### Option 1: Deploy via GitHub (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project" and select your GitHub repository
4. Click "Deploy"

### Option 2: Deploy via Vercel CLI

\`\`\`bash
npm install -g vercel
vercel
\`\`\`

Follow the prompts and your site will be deployed.

### Option 3: Deploy via Docker

\`\`\`bash
docker build -t cedra-landing .
docker run -p 3000:3000 cedra-landing
\`\`\`

## Environment Variables

Currently, no environment variables are required for basic deployment.

## File Structure

\`\`\`
├── app/
│   ├── page.tsx           # Main landing page
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── public/
│   ├── v-logo-builders.jpg # V.Builders logo
│   └── placeholder.svg    # Background image
├── package.json
├── tsconfig.json
└── next.config.mjs
\`\`\`

## Technologies Used

- **Next.js 16** - React framework
- **React 19** - UI library
- **Tailwind CSS 4** - Utility-first CSS
- **TypeScript** - Type safety

## License

MIT

## Support

For issues or questions, contact V.Builders.
