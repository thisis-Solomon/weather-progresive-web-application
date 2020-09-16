import React, { useState } from 'react'
import {fetchWeather} from './api/FetchWeather'
import './App.css'

function App() {
    const [query, setQuery] = useState('')

    const handleChange = event => {
        setQuery(event.target.value)
    }

    const searchQuery = async event => {
        if(event.key === "Enter"){
            const data = await fetchWeather(query)

            console.log(data)
        }
    }
    return (
        <div className='weather-app-container'>
            <input
            type='text'
            className ='input-query'
            placeholder = 'Search City...'
            value = {query}
            onChange = {handleChange}
            onKeyPress = {searchQuery}
            />
        </div>
    )
}

export default App

