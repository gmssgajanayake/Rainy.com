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
    console.log(data);
    document.getElementById(`air-qlt-1`).innerHTML = `${Math.round(data.list[0].components.pm2_5 * 10) / 10}`
    document.getElementById(`air-qlt-2`).innerHTML = `${Math.round(data.list[0].components.so2 * 10) / 10}`
    document.getElementById(`air-qlt-3`).innerHTML = `${Math.round(data.list[0].components.no2 * 10) / 10}`
    document.getElementById(`air-qlt-4`).innerHTML = `${data.list[0].components.o3}`
    document.getElementById("air-qlt-text").innerHTML = ` <h5>Air Quality Index</h5><div style="background-color:#${module.airQualityColor[data.list[0].main.aqi]}" class="feeling-text" >
        <h6  style="color:rgb(0,0,0)">${module.airQuality[data.list[0].main.aqi]}</h6>
        </div>`;
};
export const updateFiveDateForecast = data => {
    let i = 1;
    for (const listElement of data.list) {
        if (getUnixDate(listElement.dt).hour === 0) {
            document.getElementById(`day-${i}`).innerHTML =
                `<img src="assets/images/weather_icons/${data.list[i].weather[0].icon}.png" alt="">
            <h4>${Math.round(listElement.main.temp)} &#x00B0;C</h4>
            <h6>${module.getUnixDate(listElement.dt, data.city.timezone).date}, ${module.getUnixDate(listElement.dt, data.city.timezone).month}</h6>
            <h6>${module.getUnixDate(listElement.dt, data.city.timezone).day}</h6>`;
            i++;
        }
    }
    for (let j = 1; j <= 8; j++) {
        const hour = module.getUnixDate(data.list[j - 1].dt).hour;
        document.getElementById(`dt-box-${j}`).innerHTML =
            `<h5>${hour > 12 ? hour - 12 + " PM" : hour + " AM"}</h5>
            <img src="assets/images/weather_icons/${data.list[j - 1].weather[0].icon}.png" alt="">
            <h5>${Math.round(data.list[j - 1].main.temp)} &#x00B0;C</h5>`;

        document.getElementById(`dw-box-${j}`).innerHTML =
            `<h5>${hour > 12 ? hour - 12 + " PM" : hour + " AM"}</h5>
            <img src="assets/images/weather_icons/direction.png" style="transform:rotate(${data.list[j - 1].wind.deg}deg);" alt="">
            <h5>${module.mps_to_kmh(data.list[j - 1].wind.speed)} km/h</h5>`;
    }
};

document.getElementById("default-search").addEventListener("keyup",(data)=>{
    console.log(data);
    module.searchLocation(data.srcElement.value);
});




