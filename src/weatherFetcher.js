const weatherAPIURL = process.env.REACT_APP_WEATHER_API_URL;
const weatherAPIKey = process.env.REACT_APP_WEATHER_API_KEY;


const fetchWeather = async(city) => {
    const response = await fetch(weatherAPIURL +`?q=${city}&appid=${weatherAPIKey}&units=metric`);
    const weather = await response.json();
    console.log(weather)
    return weather;
}

export default fetchWeather;