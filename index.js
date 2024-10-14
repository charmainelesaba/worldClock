function updateTime (){
    function showCityTime(citySelector, timeSelector, dateSelector, timeZone) {
        let cityTimeElement = document.querySelector(timeSelector);
        let cityDateElement = document.querySelector(dateSelector);
        let cityDate = moment().tz(timeZone).format("dddd, D MMMM, YYYY");
        let cityTime = moment().tz(timeZone).format("hh:mm:ss [<small>]A[</small>]");
        cityDateElement.innerHTML = cityDate;
        cityTimeElement.innerHTML = cityTime;
    }
    
    showCityTime("#first-city", "#first-city-time", "#first-city-date", "Africa/Gaborone");
    showCityTime("#second-city", "#second-city-time", "#second-city-date", "Pacific/Honolulu");

}

setInterval(updateTime, 1000);