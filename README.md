# Udhayakumar A - Portfolio Website

A modern, responsive portfolio website built with React, Vite, and TailwindCSS.

## Features

- **Dark/Light Mode Toggle** - Switch between themes
- **Smooth Scroll Animations** - Elements animate as you scroll
- **Responsive Design** - Works on all devices
- **Contact Form** - Interactive form with validation
- **Social Media Integration** - LinkedIn and GitHub links
- **Skills with Progress Bars** - Visual representation of skill levels
- **SEO Optimized** - Meta tags for search engines

## How to Upload Your Resume

To add your actual resume PDF:

1. **Prepare your resume PDF**
   - Save your resume as a PDF file
   - Name it `Udhayakumar_Resume.pdf`

2. **Replace the placeholder file**
   - Navigate to the `public` folder in your project
   - Delete the existing `Udhayakumar_Resume.pdf` placeholder file
   - Copy your actual resume PDF to the `public` folder
   - Make sure it's named exactly `Udhayakumar_Resume.pdf`

3. **Test the download**
   - Run the development server: `npm run dev`
   - Click the "Resume" button in the navbar or hero section
   - Your resume should download automatically

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Deployment

You can deploy this portfolio to:
- **Vercel**: Connect your GitHub repository and deploy
- **Netlify**: Drag and drop the build folder
- **GitHub Pages**: Use the `gh-pages` package

## Customization

### Update Personal Information
- Edit `src/components/Hero.jsx` for name and title
- Edit `src/components/Contact.jsx` for contact details
- Edit `src/components/Experience.jsx` for work experience
- Edit `src/components/Education.jsx` for education
- Edit `src/components/Skills.jsx` for skills and proficiency levels

### Update Social Links
- Edit `src/components/Navbar.jsx` to update LinkedIn and GitHub URLs

### Add/Remove Sections
- Edit `src/App.jsx` to add or remove sections

## Technologies Used

- React 18
- Vite
- TailwindCSS
- Lucide React (Icons)

## License

© 2025 Udhayakumar A. All rights reserved.
