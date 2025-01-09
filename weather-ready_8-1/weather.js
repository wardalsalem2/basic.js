
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&appid=9d2084ece76616b6db5b166f68b6ff91";

let select = document.getElementById("select");
async function checkWeather(city){
    city = select.value;
    const response = await fetch( `${apiUrl}&q=${city}` );
    var data = await response.json();
    let time = new Date(data.dt * 1000) ;
    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const day = days[time.getDay()];
    
    document.getElementById("days").innerHTML = day;
    document.getElementById("city").innerHTML = data.name;
    document.getElementById("temp").innerHTML = Math.round(data.main.temp)+"c";
    document.getElementById("PRESSURE").innerHTML = data.main.pressure;
    document.getElementById("date").innerHTML = time.toLocaleDateString("en-US");
    document.getElementById("humidity").innerHTML = data.main.humidity + "%";
    document.getElementById("wind").innerHTML = data.wind.speed + "km/h";
    document.getElementById("icon").innerHTML = data.weather[0].icon;
    document.getElementById("description").innerHTML = data.weather[0].description;
}
    select.addEventListener("change",()=>{
        const city = select.value;
    checkWeather(city);  
    })

