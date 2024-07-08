import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port= 3000;
app.use(express.static("public"));
app.get("/",async(req,res)=>{
    const currentTime = new Date().getHours(); 
    const ipApi="http://ip-api.com/json/";
    const weatherApi="https://api.openweathermap.org/data/2.5/weather?";
    const uvApi="https://api.openuv.io/api/v1/uv?";
    const errors=[];
    const apiWeatherid= "f8b7eca18271bf2e995864d550c5d90c"
    const uvIndexId= "openuv-vay3rly71yq82-io";
    try {
        const response = await axios.get(ipApi);
        const lat = response.data.lat;
        const lon = response.data.lat;
        const city = response.data.city;
        console.log(errors.length);        
        
        try {
            const weatherResponse = await axios.get(weatherApi +`lat=${lat}&lon=${lon}&units=metric&appid=${apiWeatherid}`);
            console.log("weather");
            const weatherData=weatherResponse.data;
            const currTemp=weatherData.main.temp;
            const feelsLike=weatherData.main.feels_like;
            const humidity=weatherData.main.humidity;
            const alt =weatherData.main.sea_level;
            const condition=weatherData.weather[0].main;
            const descriptioncondition= weatherData.weather[0].description;
            const iconId= weatherData.weather[0].icon;
            console.log(errors.length);
            console.log(condition);
            try {
                const uvResponse = await axios.get(uvApi+`lat=${lat}&lng=${lon}&alt=${alt}`,{
                    headers:{
                      "x-access-token": uvIndexId
                    }
                })
                const uv= uvResponse.data.result.uv;
                console.log(uv)
                console.log(condition);
                console.log(errors.length);
                res.render("index.ejs",{time:currentTime,
                    currTemp:JSON.stringify(currTemp),
                    feelsLike:JSON.stringify(feelsLike),
                    humidity:JSON.stringify(humidity),
                    descriptioncondition:descriptioncondition,
                    condition:condition,
                    iconId:iconId,
                    uv:JSON.stringify(uv),
                    city:city,
                    errors:errors,
                    time:currentTime, 
                });
            } catch (error) {
                errors.push("Uv index api faliure :"+JSON.stringify(error.message));
                console.log(errors.length);
                res.render("index.ejs",{errors,
                    currTemp:JSON.stringify(currTemp),
                    feelsLike:JSON.stringify(feelsLike),
                    humidity:JSON.stringify(humidity),
                    descriptioncondition:descriptioncondition,
                    condition:condition,
                    iconId:iconId,
                    city:city,
                    errors:errors,
                    time:currentTime, 
                })
            }

        } catch (error) {
            console.log("Weather API Error:", error);
            console.log(errors.length);
            errors.push("Weather API Error:"+JSON.stringify(error.message));
            res.render("index.ejs",{errors:errors,
                time:currentTime, 
            })
        }
        
    } catch (error) {
        console.error(JSON.stringify(error.response));
        errors.push(JSON.stringify(error.response));
        res.render("index.ejs",{errors,time:currentTime});
    }

})

app.listen(port,()=>{
    console.log(`Server listening on port ${port}`);
});