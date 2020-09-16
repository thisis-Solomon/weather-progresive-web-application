import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';

const API_KEY = '57d65f3a2f95cbe5b95b5b86dbc3904e';

const fetchWeather = async query => {
	const { data } = await axios.get(URL, {
		params: {
			q: query,
			units: 'metric',
			APPID: API_KEY,
		},
	});
	return data;
};

export { fetchWeather };
