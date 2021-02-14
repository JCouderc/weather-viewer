import React, {useState, useEffect} from 'react';
import fetchWeather from './weatherFetcher';
import {FaSyncAlt} from 'react-icons/fa';
function City({name}) {

    const [weather, setWeather] = useState();

    useEffect(() => {
        fetchWeather(name)
        .then((weatherRes) => {
            setWeather({
                weather: weatherRes.weather[0].description,
                icon: weatherRes.weather[0].icon,
                temp: weatherRes.main.temp,
            })
        });
    }, [name]);

    const refresh = () => {
        setWeather(null);

        fetchWeather(name)
        .then((weatherRes) => {
            setWeather({
                weather: weatherRes.weather[0].description,
                icon: weatherRes.weather[0].icon,
                temp: weatherRes.main.temp,
            })
        });
    }

    if(weather) {
        const weatherImgUrl = `http://openweathermap.org/img/wn/${weather.icon}.png`;
        return (
            <>
                <p>{name}</p>
                <p><img src={weatherImgUrl} alt={weather.weather} /></p>
                <p>{weather.temp}°C</p>
                <button className="Weather-element-btn" type="button" onClick={() => refresh()}><FaSyncAlt /></button>
            </>
        );
    }
    
    return (
        <>
            <p>{name}</p>
            <p>Loading...</p>
        </>
    );
}

export default City;
