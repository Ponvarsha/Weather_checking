import React, { useState } from "react";
import "./App.css";
import thunder from "./assets/thunder.jpg";

function App() {
  const [city, setCity] = useState("");
  const [date, setDate] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const API_KEY = "CPKRPQXTDKKW34FUEHEDYRSZB";

  const fetchWeather = async () => {
    if (!city || !date) {
      setError("Please enter city and select a date");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/${date}?unitGroup=metric&key=${API_KEY}&contentType=json`
      );

      if (!response.ok) throw new Error("Data not found");

      const data = await response.json();

      setWeather({
        cityName: data.address,
        temp: data.days[0].temp,
        humidity: data.days[0].humidity,
        condition: data.days[0].conditions,
        description: data.days[0].description,
        date: data.days[0].datetime,
      });
    } catch (err) {
      setError("Error fetching data.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="container"
      style={{
        backgroundImage: `url(${thunder})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h2>🌧️ Universal Weather Dashboard 🌧️</h2><br></br><br></br>

      <div className="searchBox">
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="input"
        />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="input"
        />

        <button onClick={fetchWeather} className="button">
          Get Weather
        </button>
      </div>

      {loading && <p>Searching records...</p>}
      {error && <p className="error">{error}</p>}

      {weather && (
        <div className="card">
          <h3>{weather.cityName.toUpperCase()}</h3>
          <p><strong>Date:</strong> {weather.date}</p>
          <hr />
          <p><strong>Temperature:</strong> {weather.temp} °C</p>
          <p><strong>Condition:</strong> {weather.condition}</p>
          <p style={{ fontSize: "14px", color: "#ddd" }}>
            {weather.description}
          </p>
          <p><strong>Humidity:</strong> {weather.humidity}%</p>
        </div>
      )}
    </div>
  );
}

export default App;