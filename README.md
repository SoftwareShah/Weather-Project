# ⛅ WeatherSphere — Real-Time Weather Application

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![MUI](https://img.shields.io/badge/MUI-9-007FFF?style=for-the-badge&logo=mui&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-3-88CE02?style=for-the-badge&logo=greensock&logoColor=white)
![OpenWeather](https://img.shields.io/badge/OpenWeatherMap-API-orange?style=for-the-badge)

> A production-grade, visually stunning real-time weather application built with React 19, featuring animated UI components, live API integration, and a professional component architecture.

---

## 🌟 Live Demo

> Search any city → get instant real-time weather data displayed in beautiful animated cards.

---

## ✨ Features

- 🔍 **Real-time weather search** — Powered by OpenWeatherMap API
- 🎴 **ChromaGrid cards** — Interactive spotlight effect cards with GSAP animations
- ✍️ **Typewriter header** — Animated typing effect using GSAP
- 🌅 **Glowing sun UI** — Pulsing sun with golden glow animations
- 🎨 **Glass morphism search bar** — Frosted glass effect with focus glow
- 📊 **Structured weather details** — Temperature, humidity, wind, pressure with MUI icons
- 🖼️ **Unsplash weather images** — Real weather-themed photography
- 📱 **Fully responsive** — Works on all screen sizes
- ⚡ **Vite powered** — Lightning fast HMR development

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **React 19** | UI framework with hooks |
| **Vite 8** | Build tool & dev server |
| **MUI v9** | UI components & icons |
| **GSAP 3** | Animations (ChromaGrid, TypeWriter Reactbits) |
| **OpenWeatherMap API** | Live weather data |
| **CSS Custom Properties** | Dynamic theming & glow effects |

---

## 📁 Project Structure

```
src/
├── assets/
│   ├── bg.jpg          # Dark stormy background (Unsplash)
│   ├── sunny.jpg       # Sunny weather card image
│   ├── cloudy.jpg      # Cloudy weather card image
│   ├── rainy.jpg       # Rainy weather card image
│   ├── sun.jpg         # Glowing sun header image
│   └── weather2.avif   # Alternate background
├── components/
│   ├── Header/
│   │   ├── Header.jsx  # Glowing sun + typewriter heading
│   │   └── Header.css  # Sun pulse & text glow animations
│   ├── SearchBox/
│   │   ├── SearchBox.jsx  # City search with API call
│   │   └── SearchBox.css  # Glass morphism styles
│   ├── InfoBox/
│   │   ├── InfoBox.jsx    # Weather data container
│   │   ├── InfoBox.css    # InfoBox styles
│   │   └── ChromaGrid/
│   │       ├── ChromaGrid.jsx  # Interactive card grid with GSAP
│   │       └── ChromaGrid.css  # Card styles & glow effects
│   └── TextType/
│       ├── TextType.jsx   # Typewriter animation component
│       └── TextType.css   # Cursor styles
├── App.jsx       # Root component with state management
├── index.css     # Global styles, background, overlay
└── main.jsx      # React entry point
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/SoftwareShah/weather-app.git

# Navigate to project
cd weather-app

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
npm run preview
```

---

## 🌐 API Reference

This app uses the **OpenWeatherMap Current Weather API**.

```
GET https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}&units=metric
```

**Response fields used:**

| Field | Description |
|---|---|
| `main.temp` | Current temperature (°C) |
| `main.feels_like` | Feels like temperature |
| `main.humidity` | Humidity percentage |
| `main.pressure` | Atmospheric pressure (hPa) |
| `weather[0].main` | Sky condition |
| `weather[0].description` | Detailed description |
| `wind.speed` | Wind speed (m/s) |

---

## 🎨 UI Highlights

### ChromaGrid Cards
- Mouse-tracking spotlight effect using GSAP `quickSetter`
- Grayscale overlay that reveals color on hover
- Each card glows in its own accent color on hover

### Glowing Sun
- CSS `box-shadow` layered glow with `sunPulse` keyframe animation
- Synced golden `textGlow` on the heading

### Glass Morphism Search
- `backdrop-filter: blur(8px)` frosted glass effect
- Border glow intensifies on `:focus-within`

---

## 📦 Dependencies

```json
{
  "react": "^19.2.5",
  "react-dom": "^19.2.5",
  "@mui/material": "^9.1.1",
  "@mui/icons-material": "^9.1.1",
  "@emotion/react": "^11.14.0",
  "@emotion/styled": "^11.14.1",
  "gsap": "^3.15.0",
  "styled-components": "^6.4.2"
}
```

---

## 👨‍💻 Author

Built with ❤️ as a showcase project demonstrating:
- React component architecture
- API integration & state management
- Advanced CSS animations
- Professional UI/UX design patterns

---

## 📄 License

MIT License — free to use and modify.
