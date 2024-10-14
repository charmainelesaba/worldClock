function updateTime (){
    function showCityTime(timeSelector, dateSelector, timeZone) {

        let cityTimeElement = document.querySelector(timeSelector);
        let cityDateElement = document.querySelector(dateSelector);
        let cityDate = moment().tz(timeZone).format("dddd, D MMMM, YYYY");
        let cityTime = moment().tz(timeZone).format("hh:mm:ss [<small>]A[</small>]");
        cityDateElement.innerHTML = cityDate;
        cityTimeElement.innerHTML = cityTime;
    }
    
    showCityTime("#first-city-time", "#first-city-date", "Africa/Gaborone");
    showCityTime("#second-city-time", "#second-city-date", "Pacific/Honolulu");

}

setInterval(updateTime, 1000);


function showCity(event){
    let timeZone = event.target.value;
    let cityTime = moment().tz(timeZone).format("hh:mm [<small>]A[</small>]");
    let cityDate = moment().tz(timeZone).format("dddd, D MMMM, YYYY");
    let cityName = timeZone.split("/")[1];
    let cityElement= document.querySelector("#cities-container");
    cityElement.innerHTML = `
    <div class="city" >
        <div class="city-name-date">
            <div class="name-of-city">${cityName} </div>
            <div class="city-date"> ${cityDate}</div>
        </div>
        <div class="city-time">${cityTime}</div>    
    </div>`;

}


let citiesSelect= document.querySelector("#select-cities");
citiesSelect.addEventListener("change", showCity);