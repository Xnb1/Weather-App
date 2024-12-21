import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp() {
    let [weatherInfo, setWeatherInfo] = useState({
        city: "Dubai",
        feelsLike: 22.77,
        humidity: 56,
        temp:22.96,
        tempMax: 22.96,
        tempMin: 22.14,
        weather: "scattered"
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }
    return (
        <div>
            <h1 style={{textAlign: "center"}}>Weather App</h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}