/** @format */

import React, { Fragment, useState } from 'react';
import { fetchWeather } from './api/FetchWeather';
import Header from './components/Header';
import Input from './components/Input';

function App() {
	const [query, setQuery] = useState("");
	const [weatherDetails, setWeatherDetails] = useState([]);

	const handleChange = event => {
		setQuery(event.target.value);
	};

	const searchQuery = async event => {
		if (event.key === 'Enter') {
			const data = await fetchWeather(query);
			console.log(data);
			setWeatherDetails(data);
			setQuery('');
		}
	};
	return (
		<Fragment>
			<Header title='Weather Check' />
			<Input
				query={query}
				handleChange={handleChange}
				searchQuery={searchQuery}
			/>

			{weatherDetails.main && (
				<div className='weather-container'>
					<h2>
						<span>{weatherDetails.name}</span>
						<sup>{weatherDetails.sys.country}</sup>
					</h2>
					<div>
						{Math.round(weatherDetails.main.temp)}
						<sup>&deg;C</sup>
					</div>
					<div>
						<img
							src={`https://openweathermap.org/img/wn/${weatherDetails.weather[0].icon}@2x.png`}
							alt={weatherDetails.weather[0].description}
						/>
						<p>{weatherDetails.weather[0].description}</p>
					</div>
				</div>
			)}
		</Fragment>
	);
}

export default App;
