import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';


const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

const SearchBox = ({ setWeatherInfo, setError }) => {
  const [city, setCity] = useState('');

  const getWeatherInfo = async () => {
    try {
      const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      const jsonResponse = await response.json();

      
      if (jsonResponse.cod !== 200) throw new Error(`"${city}" not found. Please check the city name.`);

      setError(''); 
      setWeatherInfo({
        city: jsonResponse.name,
        temp: jsonResponse.main.temp,
        tempMax: jsonResponse.main.temp_max,
        tempMin: jsonResponse.main.temp_min,
        humidity: jsonResponse.main.humidity,
        pressure: jsonResponse.main.pressure,
        feelslike: jsonResponse.main.feels_like,
        sky: jsonResponse.weather[0].main,
        weather: jsonResponse.weather[0].description,
        windSpeed: jsonResponse.wind.speed,
      });
    } catch (err) {
      setError(err.message);
      setWeatherInfo(null);  
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getWeatherInfo();
    setCity('');
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <TextField
        id="city"
        label="Enter city name"
        variant="outlined"
        required
        value={city}
        onChange={(e) => setCity(e.target.value)}
        sx={{
          width: 220,
          '& .MuiOutlinedInput-root': {
            borderRadius: '50px',
            color: '#fff',
            '& fieldset': { borderColor: 'rgba(255,200,50,0.4)' },
            '&:hover fieldset': { borderColor: 'rgba(255,200,50,0.8)' },
            '&.Mui-focused fieldset': { borderColor: '#ff9900' },
          },
          '& .MuiInputLabel-root': { color: 'rgba(255,200,100,0.7)' },
          '& .MuiInputLabel-root.Mui-focused': { color: '#ff9900' },
        }}
      />
      <Button
        variant="contained"
        type="submit"
        sx={{
          borderRadius: '50px',
          padding: '10px 28px',
          fontWeight: 700,
          fontSize: '0.9rem',
          letterSpacing: '1px',
          textTransform: 'uppercase',
          background: 'linear-gradient(135deg, #ff9900, #ff6600)',
          boxShadow: '0 0 15px rgba(255,150,0,0.5)',
          transition: 'all 0.3s ease',
          '&:hover': {
            background: 'linear-gradient(135deg, #ffb300, #ff7700)',
            boxShadow: '0 0 25px rgba(255,180,0,0.8), 0 0 50px rgba(255,120,0,0.4)',
            transform: 'scale(1.05)',
          }
        }}
      >
        🔍 Search
      </Button>
    </form>
  );
};

export default SearchBox;
