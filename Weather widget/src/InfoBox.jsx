import Card from '@mui/material/Card';
import "./InfoBox.css";

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import CloudIcon from '@mui/icons-material/Cloud';

export default function InfoBox({info}) {
    const init_url = "https://images.unsplash.com/photo-1646069816777-7e8a69b0596f?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const hot_url = "https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    const cold_url = "https://images.unsplash.com/photo-1668418321923-becc3ef20077?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const rain_url = "https://plus.unsplash.com/premium_photo-1725408051956-a6dc142169bd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFpbiUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    
  
    return (
      <div className="InfoBox">
            
        <div className='card-container'>
         <Card sx={{ maxWidth: 345 }}>
            <CardMedia
             sx={{ height: 140 }}
              image= {info.humidity > 80 ? rain_url : info.temp > 15 ? hot_url : info.temp < 5 ? cold_url : init_url}
              title= {info.city}
            
              
            />
           
             <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              {info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 15 ? <WbSunnyIcon/> : info.temp < 5 ? <AcUnitIcon/>: <CloudIcon/>} { info.city}
               
               
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                
                <p>Temperature = {info.temp}&deg;C</p>
                <p>Humidity = {info.humidity}%</p>
                <p>Max Temp = {info.tempMax}&deg;C</p>
                <p>Min Temp = {info.tempMin}&deg;C</p>
                <p>The weather can be described as <i>{info.weather}</i> and feels Like {info.feelsLike}&deg;C</p>
              </Typography>
             </CardContent>
           
         </Card>
        </div>
     </div>
    )
}