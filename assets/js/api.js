/*
These free apis from https://openweather.co.uk/

Email   - sakuja1shamal@gmail.com
Key     - 31d01689c86421ea1062b631094e52ba
Name    - Rainy.com
Status  - Active
Actions - On
*/

const api_key = "31d01689c86421ea1062b631094e52ba";

export const fetchData = (URL, callback) => {
    fetch(`${URL}&appid=${api_key}`)
        .then(res => res.json())
        .then(data => callback(data));
}

/* APIs */
export const url = {
    currentWeather: (lat,lon) => {
        return `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric`;
    },

    fiveDayForecast:(lat,lon)=>{
        return `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric`;
    },

    airPollution:(lat,lon)=>{
        return `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}`;
    },

    reverseGeo:(lat,lon)=>{
        return `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=5`;
    },

    /* Query is a string type searched text, that may be city,state or country */
    geo:(query)=>{
      return `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5`
    }
};


/*

fetchData(url.currentWeather(6.792538,80.952419),data=>{
    console.log(data);
})

fetchData(url.fiveDayForecast(6.792538,80.952419),data=> {
    console.log(data);
});

fetchData(url.airPollution(6.792538,80.952419),data=>{
    console.log(data);
});

fetchData(url.reverseGeo(6.792538,80.952419),data=>{
    console.log(data);
});

fetchData(url.geo('london'),data=>{
    console.log(data);
})

*/


