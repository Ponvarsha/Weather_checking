🌦️ Weather Dashboard

📌 Project Overview
This is a Weather Dashboard web application built using React.

The application allows users to:

Enter a location (city name)
Select a specific date and month and year
Fetch weather data using the Visual Crossing Weather API
Display weather details including:

🌡️ Temperature
💧 Humidity
🌤️ Weather Condition

This project demonstrates:

-React components
-State management
-API integration
-Dynamic data rendering
-Modern frontend development using Vite

🚀 Setup / Run Instructions

1️⃣ Clone the Repository
git clone https://github.com/Ponvarsha/Weather_checking.git

2️⃣ Navigate to the Project Directory
cd Weather_checking

3️⃣ Install Dependencies
npm install

4️⃣ Add Environment Variables

Create a .env file in the root folder and add:
VITE_WEATHER_API_KEY=your_api_key_here

API key from:
https://www.visualcrossing.com/

5️⃣ Start the Development Server
npm run dev

The application  run on:
http://localhost:5176/

🌍 API Details
API Used:

Visual Crossing Weather API

API Endpoint Format:
https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/{location}/{date}?key=YOUR_API_KEY
Parameters:

location → City name entered by the user
date → Selected date and month and year

key → My API key

Output:

From the API response, the application displays:

-Temperature
-Humidity
-Weather Condition

<img width="1904" height="901" alt="Screenshot 2026-02-25 143451" src="https://github.com/user-attachments/assets/564cb9d9-0be6-4ec0-9d3a-ef1f49bcdaf4" />

<img width="1388" height="876" alt="Screenshot 2026-02-25 143537" src="https://github.com/user-attachments/assets/72e4d33d-b8c7-4594-83bc-2efa407ea695" />

