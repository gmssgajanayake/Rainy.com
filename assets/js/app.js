import * as module from "./module.js";
import {getUnixDate} from "./module.js";

document.getElementById("current-location").addEventListener("click", () => {
    module.getMyLocation();
});

document.getElementById("date").innerHTML = `${module.getDate()}`;

export const updateWeatherData = (data, ...param) => {
    document.getElementById("location-card").innerHTML = `${data.name}, ${param}`;
    document.getElementById("temp-now").innerHTML = `${Math.round(data.main.temp)} &#x00B0;C`;
    document.getElementById("cloud-icon").src = `assets/images/weather_icons/${data.weather[0].icon}.png`;
    document.getElementById("description").innerHTML
        = `${data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.toLocaleLowerCase().substring(1)}`;
    document.getElementById("humanity").innerHTML = `${data.main.humidity}<span style="font-size: 23px">%</span>`
    document.getElementById("pressure").innerHTML = `${data.main.pressure}<span style="font-size: 23px">hPa</span>`
    document.getElementById("visibility").innerHTML = `${Math.round(data.visibility / 1000)}<span style="font-size: 23px">km</span>`
    document.getElementById("feels-like").innerHTML = `${Math.round(data.main.feels_like)}<span style="font-size: 23px">&#x00B0;C</span>`
    document.getElementById("sun-rise").innerHTML = `${module.getTime(data.sys.sunrise)} AM`;
    document.getElementById("sun-set").innerHTML = `${module.getTime(data.sys.sunset)} PM`;
};

export const updateAirPollutionData = data => {
    /* console.log(data);*/
};

export const updateFiveDateForecast = data => {
    for (let i = 1; i <= 5; ) {
        for (const listElement of data.list) {
            if (getUnixDate(listElement.dt).hour === 0) {
                document.getElementById(`day-${i}`).innerHTML =
                    `<img src="assets/images/weather_icons/${data.list[i].weather[0].icon}.png" alt="">
            <h4>${Math.round(listElement.main.temp)} &#x00B0;C</h4>
            <h6>${module.getUnixDate(listElement.dt, data.city.timezone).date}, ${module.getUnixDate(listElement.dt,data.city.timezone).month}</h6>
            <h6>${module.getUnixDate(listElement.dt, data.city.timezone).day}</h6>`;
                i++;
            }
        }

    }
};





