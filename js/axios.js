// Backgroung Image
axios({
    method: 'get',
    url: 'https://api.unsplash.com/photos/random?client_id=cPne0XI_bKmE3otJtOepc-RSiZnZaV4RnNvWIqfz26s',
})
.then(response => {
    console.log(response.data)
    $('body').css('background-image', `url(${response.data.urls.raw})`)
})
.catch(error => {
    console.log(error)
})

// Weather
const icons = {
    'clear': '☀',
    'rain': '️🌧',
    'storm': '⛈',
    'snow': '🌨',
    'mist': '🌫',
    'clouds': '☁',
  };
  axios({
    method: 'get',
    url: 'https://api.openweathermap.org/data/2.5/weather?q=toronto&units=metric&appid=0f3808b186b9a9c8bab09d0f21e8fb33'
})
.then((response) => {
    $('body').append(`
        <div id="weather">
            ${icons[response.data.weather[0].main.toLowerCase()]}
            <span>
                ${parseInt(response.data.main.temp)}°C
            </span>
        </div>
    `)
    $('body').append(`<div id="temp">${response.data.name}</div>`)  
})
.catch((err) => {
    
});

// Time
const currentHour = moment().format("H");
if (currentHour >= 6 && currentHour < 11) {
    greetingWord = "Good Morning";
}
else if (currentHour >= 11 && currentHour <14) {
    greetingWord = "Good Noon";
}
else if (currentHour >= 14 && currentHour < 18) {
    greetingWord = "Good Afternoon";
}
else if (currentHour >= 18 && currentHour < 22) {
    greetingWord = "Good Evening";
}
else {
    greetingWord = "Good Night";
}
$('body').append(`<div id='time'>${moment().format('LTS')}</div>`)
$("body").append(`<div id='greeting'>${greetingWord}</div>`);


// Quote
axios({
    
    method: 'GET',
    url: 'https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en'
})
.then(response => {
    $('body').append(`<div id='quote'>${response.data.quoteText}<br> -${response.data.quoteAuthor}</div>`)
})
.catch(err => {
    console.log(err)
})

