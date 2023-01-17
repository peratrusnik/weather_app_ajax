(() => {
    // selectors
    let cityDiv = document.querySelector('.city');
    let cityName = cityDiv.querySelector('input');
    let searchBtn = cityDiv.querySelector('.search');
    let detailsDiv = document.querySelector('.details');
    let cloudiness = detailsDiv.querySelector('.cloudiness span');
    let windSpeed = detailsDiv.querySelector('.windSpeed span');
    let humidity = detailsDiv.querySelector('.humidity span');
    let currentDiv = document.querySelector('.current');
    let temperatureDiv = currentDiv.querySelector('.temperature');
    let maxTemp = currentDiv.querySelector('.maxTemp');
    let minTemp = currentDiv.querySelector('.minTemp');
    let displayCity = currentDiv.querySelector('.displayCity');
    let tempUnit = '&deg;C';

    //listener
    searchBtn.addEventListener('click', getWeatherData);


    function displayDetails(data) {
        cloudiness.innerHTML = data.clouds.all + "%";
        windSpeed.innerHTML = data.wind.speed + "m/s";
        humidity.innerHTML = data.main.humidity + "%";
    }
    function displayCurrentTemperature(data) {
        displayCity.innerHTML = data.name;
        let iconId = data.weather[0].icon;
        temperatureDiv.innerHTML = `
        <img src="http://openweathermap.org/img/wn/${iconId}@2x.png" alt="">
                <h1>${Math.round(data.main.temp) + tempUnit}</h1>
        `
        maxTemp.innerHTML = Math.round(data.main.temp_max) + tempUnit;
        minTemp.innerHTML = Math.round(data.main.temp_min) + tempUnit;
        console.log(data);
    }
    
    function getWeatherData() {
        // APIcall.getData(cityName.value).then(
        //     (data) => {
        //         displayDetails(data);
        //         displayCurrentTemperature(data);                
        // },
        // (err) => {
        //     alert(err);
        //     cityName.value = "";
        //     cityName.focus();
        // })  
        
        if (cityName.value) {
            
            APIcall.getData2(cityName.value)
                .then((data) => {
                    if (!data) {
                    alert('Wrong city name!')
                    } else {
                        displayDetails(data);
                        displayCurrentTemperature(data);
                    }
            })
        } else {
            alert('You must input city name!');
        }
    }
})()