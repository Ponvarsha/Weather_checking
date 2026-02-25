import React from "react";

function Weather({ weather }) {
  if (!weather) return null;

  return (
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
  );
}

export default Weather;