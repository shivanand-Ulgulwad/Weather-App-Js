let input = document.querySelector("#search");
let search = document.querySelector("#btn");

search.addEventListener("click",async()=>{
    let city = input.value
    
    try{

        if(input.value.trim() === "") {
            alert("Please enter valid location")
        }else{
              let res = await fetch(
  `https://api.weatherapi.com/v1/current.json?key=221e7d70d0ea49aebdf164118250609&q=${city}`
);
let data = await res.json();

input.value = ""

document.querySelector("#city").textContent = data.location.name + " "+ data.location.region+ ", " + data.location.country

document.querySelector("#temp").textContent = "Temprature: " + data.current.temp_c + "°C"

document.querySelector("#humidity").textContent = "Humidity: "+ data.current.humidity

document.querySelector("#wind").textContent = "Wind Speed: "+data.current.wind_kph
 
document.querySelector("#icon").src="https:"+ data.current.condition.icon
        }

      

    }
    catch(e){
       alert("Please enter valid location")
    }




})


