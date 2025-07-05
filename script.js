let cityInput;

const citydisplay = document.getElementById("citydisplay")
const tempdisplay = document.getElementById("tempdisplay")
const humiditydisplay = document.getElementById("humiditydisplay")
const descdisplay = document.getElementById("descdisplay")
const weatheremoji = document.getElementById("weatheremoji")

const card = document.getElementById("card");


const toggleCard = (shoW) => {
    card.style = shoW? "visibility: visible" : "visibility: hidden"
}

const errorField=document.getElementById("error")
const updateInput = (event) => {
    console.log(event.target.value);
    cityInput = event.target.value;
}

const getWeather = async (event) => {
    event.preventDefault()
console.log("getWeather", cityInput)

if(!cityInput||cityInput === ''){
    errorField.innerHTML = "Enter a city please"
    return
}
errorField.innerHTML = '';

 const result = await apiCall(cityInput)
console.log(result);
toggleCard(true)
citydisplay.innerHTML = result.name;
tempdisplay.innerHTML = + result.main.temp + "°F";
humiditydisplay.innerHTML =  "Humidity : " + result.main.humidity + "%";
descdisplay.innerHTML = result.weather[0].description;


}


const apiKey = "5b76bd39a88abbb8a01189928caed2db";


async function apiCall(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    try {
        const response  = await fetch(apiUrl)
       const data = await response.json();
       return data;
    }
    catch (error) {
console.log(error)
    }
}

