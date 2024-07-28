document.addEventListener('DOMContentLoaded', function() {
    const locationPermissionKey = 'locationPermissionGranted';

    function fetchWeatherData(lat, lon) {
        const apiKey = '1601b15d1920bf9981f0ecbcc327fd94';
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

        console.log(`Fetching weather data for coordinates: lat=${lat}, lon=${lon}`);
        console.log(`API URL: ${apiUrl}`);

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                console.log('API Response:', data);

                if (data.cod === 200) {
                    const weatherDescription = data.weather[0].main.toLowerCase();
                    const tempElement = document.querySelector('.title.weather.temp');
                    const locationElement = document.querySelector('.title.weather.location');
                    
                    tempElement.textContent = `${Math.round(data.main.temp)}°C | ${data.name}`;
                    locationElement.textContent = '';

                    const iconBox = document.querySelector('.icon-box img');
                    let iconSrc;

                    switch (weatherDescription) {
                        case 'hurricane':
                            iconSrc = './assets/weather/icons8-hurricane-96.png';
                            break;
                        case 'thunderstorm':
                            iconSrc = './assets/weather/icons8-thunder-96.png';
                            break;
                        case 'haze':
                            iconSrc = './assets/weather/icons8-haze-96.png';
                            break;
                        case 'snow':
                            iconSrc = './assets/weather/icons8-snowy-96.png';
                            break;
                        case 'drizzle':
                            iconSrc = './assets/weather/icons8-drizzle-96.png';
                            break;
                        case 'rain':
                            iconSrc = './assets/weather/icons8-rain-cloud-96.png';
                            break;
                        case 'clouds':
                            iconSrc = './assets/weather/icons8-cloudy-96.png';
                            break;
                        case 'clear':
                            iconSrc = './assets/weather/icons8-sunny-96.png';
                            break;
                        default:
                            iconSrc = './assets/weather/icons8-cloud-cross-96.png'; // Default icon for unknown weather
                            tempElement.textContent = `${Math.round(data.main.temp)}°C | Location not recognized in ${data.name}`;
                            locationElement.textContent = '';
                    }

                    iconBox.src = iconSrc;
                    iconBox.alt = weatherDescription;
                } else {
                    const tempElement = document.querySelector('.title.weather.temp');
                    const locationElement = document.querySelector('.title.weather.location');
                }
            })
            .catch(error => {
                console.error('Error fetching the weather data:', error);
                const tempElement = document.querySelector('.title.weather.temp');
                const locationElement = document.querySelector('.title.weather.location');
            });
    }

    function requestLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;
                localStorage.setItem(locationPermissionKey, 'true');
                fetchWeatherData(lat, lon);
            }, error => {
                console.error('Error getting location:', error);
                localStorage.setItem(locationPermissionKey, 'false');
                const tempElement = document.querySelector('.title.weather.temp');
                const locationElement = document.querySelector('.title.weather.location');
            });
        } else {
            const tempElement = document.querySelector('.title.weather.temp');
            const locationElement = document.querySelector('.title.weather.location');
        }
    }

    const locationPermissionGranted = localStorage.getItem(locationPermissionKey);

    if (locationPermissionGranted === 'true') {
        navigator.geolocation.getCurrentPosition(position => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            fetchWeatherData(lat, lon);
        });
    } else {
        requestLocation();
    }
});
