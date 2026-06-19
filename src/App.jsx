import { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import InfoBox from './components/InfoBox/InfoBox';
import SearchBox from './components/SearchBox/SearchBox';

const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

const App = () => {
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [error, setError] = useState('');

  
  useEffect(() => {
    const fetchDefault = async () => {
      try {
        const response = await fetch(`${API_URL}?q=Delhi&appid=${API_KEY}&units=metric`);
        const data = await response.json();
        if (data.cod !== 200) throw new Error(data.message);
        setWeatherInfo({
          city: data.name,
          temp: data.main.temp,
          tempMax: data.main.temp_max,
          tempMin: data.main.temp_min,
          humidity: data.main.humidity,
          pressure: data.main.pressure,
          feelslike: data.main.feels_like,
          sky: data.weather[0].main,
          weather: data.weather[0].description,
          windSpeed: data.wind.speed,
        });
      } catch (err) {
        setError(err.message);
      }
    };
    fetchDefault();
  }, []);

  return (
    <div className="app">
      <Header />
      <SearchBox setWeatherInfo={setWeatherInfo} setError={setError} />
      {error && <p style={{ color: '#ff4d4d', fontWeight: 600, fontSize: '1rem', background: 'rgba(255,0,0,0.1)', padding: '10px 24px', borderRadius: '50px', border: '1px solid rgba(255,80,80,0.4)' }}>⚠️ {error}</p>}
      {weatherInfo && !error && <InfoBox info={weatherInfo} />}
    </div>
  );
};

export default App;
