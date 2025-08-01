# Afghan Bazar

A modern Persian-language marketplace with neon-themed design, built for Afghan communities.

## Features

- **Persian/Dari Language Support**: Full RTL (Right-to-Left) layout and Persian text
- **Modern Neon Design**: Dark theme with vibrant neon green, cyan, and pink accents
- **Interactive Marketplace**: Browse and search through various product categories
- **Favorites System**: Save preferred items for later viewing
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Afghan-Focused**: Designed specifically for Afghan locations and cultural context

## Categories

- موتر و وسایل نقلیه (Vehicles & Transportation)
- الکترونیک (Electronics)
- املاک و مستغلات (Real Estate)
- لباس و پوشاک (Clothing & Fashion)
- خانه و آشپزخانه (Home & Kitchen)

## Technology Stack

- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **Lucide React** for icons
- Modern ES6+ JavaScript

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/afghan-bazar.git
cd afghan-bazar
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── components/
│   ├── ui/                 # Reusable UI components
│   └── BazarAfghanMaster.tsx  # Main marketplace component
├── lib/
│   └── utils.ts           # Utility functions
├── index.css              # Global styles and Tailwind config
├── App.tsx                # Root application component
└── main.tsx               # Application entry point
```

## Customization

### Colors
The neon color scheme can be customized in `src/index.css`:
- `--neon-green`: Primary accent color
- `--neon-cyan`: Secondary accent color  
- `--neon-pink`: Tertiary accent color
- `--gold`: Price highlighting color

### Language
All text strings are in Persian/Dari. To add more languages, consider implementing an i18n solution.

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support and questions, please open an issue on GitHub.

---

**بازار افغان** - Connecting Afghan communities through modern technology