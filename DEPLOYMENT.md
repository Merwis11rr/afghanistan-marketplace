# Deployment Guide

## GitHub Pages Deployment

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Configure GitHub Pages:**
   - Go to your repository settings on GitHub
   - Navigate to "Pages" section
   - Select "GitHub Actions" as the source
   - The site will be available at `https://yourusername.github.io/afghan-bazar`

3. **GitHub Actions Workflow:**
   Create `.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy to GitHub Pages
   on:
     push:
       branches: [ main ]
   jobs:
     deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         - uses: actions/setup-node@v3
           with:
             node-version: 18
         - run: npm install
         - run: npm run build
         - uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./dist
   ```

## Vercel Deployment

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel --prod
   ```

## Netlify Deployment

1. **Build settings:**
   - Build command: `npm run build`
   - Publish directory: `dist`

2. **Deploy via drag & drop or Git integration**

## Local Development

```bash
npm install
npm run dev
```

Visit `http://localhost:5173` to view the application.