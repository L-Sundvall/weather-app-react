import React from 'react';
import axios from "axios";

export default function Weather (){
    function showWeather(response){
    alert (`The temp in New york is ${response.data.main.temp}`);
}
    let apiKey = "7e499109a815c2c14463aa26aad21ebb";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
    
}
