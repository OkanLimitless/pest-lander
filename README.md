# Pest Control Landing Page

A professional landing page for pest control services, built with Next.js and Tailwind CSS. This landing page is optimized for converting visitors into phone calls for pest control services.

## Features

- Modern, responsive design
- Optimized for conversion
- Fast loading and SEO-friendly
- Mobile-first approach
- Professional animations and transitions
- Clear call-to-action buttons
- Ready for Vercel deployment

## Tech Stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- Heroicons

## Deployment

This project is configured for direct deployment to Vercel:

1. Push your code to a GitHub repository
2. Import the repository in Vercel
3. Vercel will automatically detect the Next.js project and deploy it
4. The site will be live at your chosen Vercel domain

No additional configuration is needed as the project includes:
- `vercel.json` with optimized settings
- Proper TypeScript configuration
- Next.js configuration for production
- Security headers and caching rules

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Building for Production

To create a production build:

```bash
npm run build
```

To start the production server:

```bash
npm start
```

## Project Structure

- `app/` - Next.js app directory
  - `page.tsx` - Main landing page
  - `layout.tsx` - Root layout
  - `globals.css` - Global styles
- `public/` - Static assets
- `tailwind.config.js` - Tailwind CSS configuration
- `next.config.js` - Next.js configuration
- `vercel.json` - Vercel deployment configuration
- `tsconfig.json` - TypeScript configuration

## Customization

- Update the phone number in `app/page.tsx`
- Modify colors in `tailwind.config.js`
- Replace images with your own
- Update content and copy as needed

## License

MIT 