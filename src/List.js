import React, {useState} from 'react';
import City from './City';
import {FaTimes} from 'react-icons/fa';
import data from './data';

import './List.css';

const List = () => {
    const [cities, setCities] = useState(data);

    

    const removeWeather = (id) => {
        const newCities = cities.filter((city) => {
            return city.id !== id;
        });

        setCities(newCities);
    }

    return (
        <section className="Weather-list">
            {
                cities.map((city) => {
                    return <article className="Weather-element" key={city.id}>
                        <City {...city} />
                        <button className="Weather-element-btn Weather-element-del" type="button" onClick={() => removeWeather(city.id)}><FaTimes /></button>
                    </article>
                })
            }
        </section>
    )
}

export default List
