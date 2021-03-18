const api = {
    key: 'faea129897ec94ff285bdc42b56144c5',
    base: "https://api.openweathermap.org/data/2.5/",
}

const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt) {
    if (evt.keyCode == 13) {
        getResults(searchbox.value);
    }
}

function getResults(query) {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(weather => {
            return weather.json();
        }).then(displayResults);
}

function displayResults(weather) {
    console.log(weather);
    let city = document.querySelector('.location .city');


    // let x = weather.name.split('') {

    // }


        // for (let i = 0; i < weather.name.length; i++) {
        //     let timerId = setInterval(() => {


        //             console.log(i)
        //             city.innerHTML = `<span class="hide">${weather.name[i]}</span> ,${weather.sys.country}`
                
                
        //         clearInterval(timerId)
        //     }, 1000);

    
        // }
        







    city.innerText = `${weather.name}, ${weather.sys.country}`;
    console.log(weather.name.length)





    let now = new Date();
    let date = document.querySelector('.location .date');
    date.innerText = dateBuilder(now)

    let temp = document.querySelector('.current .temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}<span class="light">°c</span>`;

    let weather_el = document.querySelector('.current .weather');
    weather_el.innerText = weather.weather[0].main;

    let hilow = document.querySelector('.hi-low');
    hilow.innerText = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`
}

function dateBuilder(d) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate()
    let month = months[d.getMonth()]
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
}