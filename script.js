const apiKey = "dd789c9ca0bc5cb550b85e543177a316";
const api = "https:api.openweathermap.org/data/2.5/weather?units=metric&q=";
let temp = document.querySelector(".temp");
let citydata = document.querySelector(".city");
let wind = document.querySelector(".wind");
let input = document.querySelector("input");
let search = document.querySelector("button");
let humdity = document.querySelector(".humdity");
let images = document.querySelector(".weather-icon");
let div = document.querySelector(".weather");

async function main(city) {
    let response = await fetch(api  + city +`&appid=${apiKey}`);
    let data = await response.json();
    if(response.status == 404){
        alert("Wrong city name!");
    }
    temp.innerText =    Math.floor(data.main.temp) + "°C";
    wind.innerText = data.wind.speed + " " +"Km/hr";
    humdity.innerText = data.main.humidity + "%";
    citydata.innerText =  data.name;
    const datas = data.weather[0].main;
    console.log(datas);
    if(datas === "Clouds"){
        console.log("hii");
        images.setAttribute("src","clouds.png");
    }
    if(datas === "Mist"){
        images.setAttribute("src","mist.png");
    }
    if(datas === "Rain"){
        images.setAttribute("src","rain.png");
    }
    if(datas === "Snow"){
        images.setAttribute("src","snow.png");
    }
    if(datas === "Drizzle"){
        images.setAttribute("src","drizzle.png");
    }
    if(datas === "Clear"){
        images.setAttribute("src","clear.png");
    }
    div.style.display = "block";
}

search.addEventListener("click",()=>{
    console.log("clicked");
    const city = input.value;
    main(city).catch((err)=>{
        console.log(err);
    })
    input.value = "";
})




