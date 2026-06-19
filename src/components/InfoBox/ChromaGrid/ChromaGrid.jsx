import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import './ChromaGrid.css';

// weather themed images from Unsplash saved in assets
import sunnyImg from '../../../assets/sunny.jpg';
import cloudyImg from '../../../assets/cloudy.jpg';
import rainyImg from '../../../assets/rainy.jpg';

// MUI icons for each weather detail
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import AirIcon from '@mui/icons-material/Air';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import CompressIcon from '@mui/icons-material/Compress';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';

const ChromaGrid = ({
  info,
  className = '',
  radius = 300,
  columns = 3,
  rows = 1,
  damping = 0.45,
  fadeOut = 0.6,
  ease = 'power3.out'
}) => {
  const rootRef = useRef(null);
  const fadeRef = useRef(null);
  const setX = useRef(null);
  const setY = useRef(null);
  const pos = useRef({ x: 0, y: 0 });


  const cards = [
    {
      image: sunnyImg,
      borderColor: '#4F46E5',
      gradient: 'linear-gradient(145deg, #1a1a2e, #16213e)',
      details: [
        { icon: <WbSunnyIcon fontSize="small" />,         label: 'Condition',  value: info.weather },
        { icon: <ThermostatIcon fontSize="small" />,      label: 'Sky',        value: info.sky },
        { icon: <DeviceThermostatIcon fontSize="small" />, label: 'Feels Like', value: `${info.feelslike}°C` },
      ],
    },
    {
      image: cloudyImg,
      borderColor: '#10B981',
      gradient: 'linear-gradient(145deg, #0f2027, #203a43)',
      details: [
        { icon: <ThermostatIcon fontSize="small" />,  label: 'Temperature', value: `${info.temp}°C` },
        { icon: <ThermostatIcon fontSize="small" />,  label: 'Max / Min',   value: `${info.tempMax}°C / ${info.tempMin}°C` },
        { icon: <WaterDropIcon fontSize="small" />,   label: 'Humidity',    value: `${info.humidity}%` },
      ],
    },
    {
      image: rainyImg,
      borderColor: '#F59E0B',
      gradient: 'linear-gradient(145deg, #0d0d0d, #1a1a1a)',
      details: [
        { icon: <AirIcon fontSize="small" />,     label: 'Wind Speed', value: `${info.windSpeed} m/s` },
        { icon: <CompressIcon fontSize="small" />, label: 'Pressure',   value: `${info.pressure} hPa` },
        { icon: <WbSunnyIcon fontSize="small" />,  label: 'City',       value: info.city },
      ],
    },
  ];

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    setX.current = gsap.quickSetter(el, '--x', 'px');
    setY.current = gsap.quickSetter(el, '--y', 'px');
    const { width, height } = el.getBoundingClientRect();
    pos.current = { x: width / 2, y: height / 2 };
    setX.current(pos.current.x);
    setY.current(pos.current.y);
  }, []);

  const moveTo = (x, y) => {
    gsap.to(pos.current, {
      x, y,
      duration: damping,
      ease,
      onUpdate: () => {
        setX.current?.(pos.current.x);
        setY.current?.(pos.current.y);
      },
      overwrite: true
    });
  };

  const handleMove = e => {
    const r = rootRef.current.getBoundingClientRect();
    moveTo(e.clientX - r.left, e.clientY - r.top);
    gsap.to(fadeRef.current, { opacity: 0, duration: 0.25, overwrite: true });
  };

  const handleLeave = () => {
    gsap.to(fadeRef.current, { opacity: 1, duration: fadeOut, overwrite: true });
  };

  const handleCardMove = e => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={rootRef}
      className={`chroma-grid ${className}`}
      style={{ '--r': `${radius}px`, '--cols': columns, '--rows': rows }}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
    >
      {cards.map((c, i) => (
        <article
          key={i}
          className="chroma-card"
          onMouseMove={handleCardMove}
          style={{
            '--card-border': c.borderColor,
            '--card-gradient': c.gradient,
          }}
        >
        
          <div className="chroma-img-wrapper">
            <img src={c.image} alt="weather" loading="lazy" />
          </div>

        
          <footer className="chroma-info">
            {c.details.map((d, j) => (
              <div key={j} className="detail-row">
                <span className="detail-icon">{d.icon}</span>
                <span className="detail-label">{d.label}</span>
                <span className="detail-value">{d.value}</span>
              </div>
            ))}
          </footer>
        </article>
      ))}
      <div className="chroma-overlay" />
      <div ref={fadeRef} className="chroma-fade" />
    </div>
  );
};

export default ChromaGrid;
