import React, { useState, useEffect } from "react";

interface WeatherData {
  main: {
    temp: number;
  };
  weather: Array<{
    icon: string;
    description: string;
  }>;
  name: string;
}

const WeatherWidget = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true);

        // 1. Obtén tu API KEY de OpenWeatherMap (gratis)
        const apiKey =
          process.env.GATSBY_WEATHER_API_KEY || "TU_API_KEY_REAL_AQUI";

        // 2. Ciudad configurable
        const city = "Madrid";

        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=es`
        );

        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }

        const data: WeatherData = await response.json();

        if (!data.main || !data.weather) {
          throw new Error("Datos del clima incompletos");
        }

        setWeather(data);
        setError(null);
      } catch (err) {
        console.error("Error fetching weather:", err);
        setError("Clima no disponible");
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();

    // Actualizar cada 10 minutos
    const interval = setInterval(fetchWeather, 600000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='weather-widget' style={widgetStyles}>
      {loading && <span>Cargando clima...</span>}
      {error && <span>{error}</span>}
      {weather && !error && (
        <>
          <span>{Math.round(weather.main.temp)}°C</span>
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt={weather.weather[0].description}
            width='32'
            height='32'
            style={{ margin: "0 5px" }}
          />
          <span>{weather.name}</span>
        </>
      )}
    </div>
  );
};

// Estilos básicos
const widgetStyles = {
  display: "flex",
  alignItems: "center",
  fontSize: "0.9rem",
  color: "#333",
  padding: "5px 10px",
  borderRadius: "20px",
  backgroundColor: "rgba(255,255,255,0.7)",
};

export default WeatherWidget;
