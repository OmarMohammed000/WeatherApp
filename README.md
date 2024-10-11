# Weather and UV Info App

This application is a weather and UV index display service based on the user's IP address. The app fetches the current weather and UV information using the OpenWeather API and OpenUV API and displays it on a rendered EJS page.

## Features

- Retrieves user location (latitude and longitude) using the IP-API.
- Fetches the current weather data (temperature, humidity, conditions, etc.) from OpenWeather API.
- Fetches the current UV index from OpenUV API.
- Displays weather and UV index based on the user's IP address.

## Requirements

- Node.js
- npm (Node Package Manager)
- APIs:
  - [OpenWeather API](https://openweathermap.org/api)
  - [OpenUV API](https://www.openuv.io/)

## Installation

1. Clone the repository:

   `git clone https://github.com/your-username/your-repository.git`

2. Navigate to the project directory:

   `cd your-repository`

3. Install dependencies:

   `npm install`

4. Create a `.env` file in the root directory and add your API keys for OpenWeather and OpenUV:

   `touch .env`

In the `.env` file, add:
```bash
apiWeatherid=your_openweather_api_key 
uvIndexId=your_openuv_api_key
```
**
5. Run the application:

   `node index.js`

The server will be listening on port 3000.

## Usage

1. Start the app, and it will automatically detect your IP and location.
2. The weather and UV information will be fetched and displayed on the rendered page.

## API Endpoints

- **IP-API**: Determines the user's location based on IP address.
- **OpenWeather API**: Provides current weather information (temperature, humidity, conditions).
- **OpenUV API**: Provides the UV index based on the user's location.

## Error Handling

- Errors related to API requests (e.g., failed weather or UV data retrieval) are logged and shown on the page as `errors` for user awareness.

## Dependencies

- `express`: Web framework for Node.js.
- `axios`: HTTP client to make API requests.
- `dotenv`: Loads environment variables from a `.env` file into `process.env`.
- `body-parser`: Middleware to parse incoming request bodies.

