const btn = document.querySelector('.button_search')
const temp = document.querySelector('.temperature_info_text')
const humid = document.querySelector('.humidity_info_text')
const press = document.querySelector('.pressure_info_text')
const inp = document.querySelector('.location_input')

const getWeather = async (place) => {
   const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q='+place+'&appid=1448dc17897195e6af3704058fdc144d&units=metric');
   const data = await response.json();
   return data;
}

btn.addEventListener('click', async () => {
   const data = await getWeather(inp.value);
   document.querySelector(".weather_icon").src = `../images/weather-icons/${data.weather[0].description}.png`
   humid.textContent = "Влажность: " + data.main.humidity + "%";
   press.textContent = "Давление: " + Math.round(data.main.pressure*0.75) + " мм рт. ст.";
   temp.textContent = Math.round(data.main.temp) + "°С";
   document.querySelector(".weather_output").style.display = "flex"
});
