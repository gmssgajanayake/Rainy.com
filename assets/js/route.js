/**
import {notFoundError, updateWeather} from "./app.js";

const defaultLocation = "#/weather?lat=6.792538&lon=80.952419";
 const currentLocation = () => {
    window.navigator.geolocation.getCurrentPosition(res=>{
        const {latitude,longitude} = res.coords;
        updateWeather(`lat=${latitude}`,`lon=${longitude}`);
    },error => {
        window.location.hash=defaultLocation;
    });
};

const searchedLocation = query => updateWeather(...query.split("&"));

const routes = new Map([
    ["/current-location", currentLocation],
    ["/weather", searchedLocation]
]);

const checkHash = () => {
    const requestURL = window.location.hash.slice(1);
    const [route, query] = requestURL.includes ? requestURL.split("?") : [requestURL];
    routes.get(route) ? routes.get(route)(query) : notFoundError();
};

window.addEventListener("hashchange", checkHash);

window.addEventListener("load", () => {
    if (!window.location.hash) {
        window.location.hash = "#/current-location";
    } else {
        checkHash();
    }
});

*/

import * as module from "./module.js";

window.addEventListener("load", () => {
    //Default colombo
    module.getCurrentWeatherData(6.9387469,79.8541134);
    module.getAirPollutionData(6.9387469,79.8541134);
    module.getFiveDayForecast(6.9387469,79.8541134);
});
