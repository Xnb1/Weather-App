import "./SearchBox.css";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from "react";

export default function SearchBox({updateInfo}) {
   let [city, setCity] = useState("");
   let [error, setError] = useState(false);
   const API_URL = "https://api.openweathermap.org/data/2.5/weather";
   const API_KEY = "8d3651d82383fee68c96fe84bd8a0a20";

   let getWeatherInfo = async () => {
     try {
       let response = await fetch (`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
       let jsonResponse = await response.json();
   
       let result = {
          city: city,
          temp: jsonResponse.main.temp,
          tempMin : jsonResponse.main.temp_min,
          tempMax: jsonResponse.main.temp_max,
          humidity: jsonResponse.main.humidity,
          feelsLike: jsonResponse.main.feels_like,
          weather: jsonResponse.weather[0].description
        }
        console.log(result);
        return result;
      } catch (err) {
         throw err;
      }
    

   }

   let handleChange = (evt) => {
      setCity(evt.target.value);
      
   }

   let handleSubmit = async (evt) => {
      try {
         evt.preventDefault();
      console.log(city);
      setCity("");
      let newInfo = await getWeatherInfo();
      updateInfo(newInfo);
      } catch (err) {
         setError(true);
      }
   } 
    
   return (
       <div  className='SearchBox'>
          <h3>Search weather in</h3>
          <form onSubmit={handleSubmit}>
             <TextField id="outlined-basic" label="City Name" variant="outlined" value={city} onChange={handleChange} required/><br></br>
             <br></br>
             <Button type="submit" variant="contained" >Search</Button>
            {error && <p style = {{color: "red"}}>No such place exists</p>}
          </form>
       </div>
    )
}