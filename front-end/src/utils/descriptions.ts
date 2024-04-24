export function weatherCodeInfo(
    time: string,
    weatherCode: number,
    sunrise: string,
    sunset: string
) {
    const timeNow = new Date(time).getTime(); //number in ms
    const sunriseToday = new Date(sunrise).getTime();
    const sunsetToday = new Date(sunset).getTime();

    const dayNight =
        sunriseToday < timeNow && timeNow < sunsetToday ? 'day' : 'night';
    return weatherCodes[weatherCode.toString()][dayNight];
}
const weatherCodes: Record<
    string,
    Record<string, { description: string; image: string }>
> = {
    '0': {
        day: {
            description: 'Sunny',
            image: './image/weather-icons/clear-day.svg',
        },
        night: {
            description: 'Clear',
            image: './image/weather-icons/clear-night.svg',
        },
    },
    '1': {
        day: {
            description: 'Mainly Sunny',
            image: './image/weather-icons/partly-cloudy-day.svg',
        },
        night: {
            description: 'Mainly Clear',
            image: './image/weather-icons/partly-cloudy-night.svg',
        },
    },
    '2': {
        day: {
            description: 'Partly Cloudy',
            image: './image/weather-icons/partly-cloudy-day.svg',
        },
        night: {
            description: 'Partly Cloudy',
            image: './image/weather-icons/partly-cloudy-night.svg',
        },
    },
    '3': {
        day: {
            description: 'Cloudy',
            image: './image/weather-icons/cloudy-day-3.svg',
        },
        night: {
            description: 'Cloudy',
            image: './image/weather-icons/cloudy-day-night-3.svg',
        },
    },
    '45': {
        day: {
            description: 'Foggy',
            image: './image/weather-icons/foggy-day-night-45.svg',
        },
        night: {
            description: 'Foggy',
            image: './image/weather-icons/foggy-day-night-45.svg',
        },
    },
    '48': {
        day: {
            description: 'Rime Fog',
            image: './image/weather-icons/rime-fog-day-night-48.svg',
        },
        night: {
            description: 'Rime Fog',
            image: './image/weather-icons/rime-fog-day-night-48.svg',
        },
    },
    '51': {
        day: {
            description: 'Light Drizzle',
            image: './image/weather-icons/light-drizzle-day-night-51.svg',
        },
        night: {
            description: 'Light Drizzle',
            image: './image/weather-icons/light-drizzle-day-night-51.svg',
        },
    },
    '53': {
        day: {
            description: 'Drizzle',
            image: './image/weather-icons/drizzle-day-night-53.svg',
        },
        night: {
            description: 'Drizzle',
            image: './image/weather-icons/drizzle-day-night-53.svg',
        },
    },
    '55': {
        day: {
            description: 'Heavy Drizzle',
            image: './image/weather-icons/heavy-drizzle-day-night-55.svg',
        },
        night: {
            description: 'Heavy Drizzle',
            image: './image/weather-icons/heavy-drizzle-day-night-55.svg',
        },
    },
    '56': {
        day: {
            description: 'Light Freezing Drizzle',
            image: './image/weather-icons/light-freezing-drizzle-day-night-56.svg',
        },
        night: {
            description: 'Light Freezing Drizzle',
            image: './image/weather-icons/light-freezing-drizzle-day-night-56.svg',
        },
    },
    '57': {
        day: {
            description: 'Freezing Drizzle',
            image: './image/weather-icons/freezing-drizzle-day-night-57.svg',
        },
        night: {
            description: 'Freezing Drizzle',
            image: './image/weather-icons/freezing-drizzle-day-night-57.svg',
        },
    },
    '61': {
        day: {
            description: 'Light Rain',
            image: 'http://openweathermap.org/img/wn/10d@2x.png',
        },
        night: {
            description: 'Light Rain',
            image: 'http://openweathermap.org/img/wn/10n@2x.png',
        },
    },
    '63': {
        day: {
            description: 'Rain',
            image: 'http://openweathermap.org/img/wn/10d@2x.png',
        },
        night: {
            description: 'Rain',
            image: 'http://openweathermap.org/img/wn/10n@2x.png',
        },
    },
    '65': {
        day: {
            description: 'Heavy Rain',
            image: 'http://openweathermap.org/img/wn/10d@2x.png',
        },
        night: {
            description: 'Heavy Rain',
            image: 'http://openweathermap.org/img/wn/10n@2x.png',
        },
    },
    '66': {
        day: {
            description: 'Light Freezing Rain',
            image: 'http://openweathermap.org/img/wn/10d@2x.png',
        },
        night: {
            description: 'Light Freezing Rain',
            image: 'http://openweathermap.org/img/wn/10n@2x.png',
        },
    },
    '67': {
        day: {
            description: 'Freezing Rain',
            image: 'http://openweathermap.org/img/wn/10d@2x.png',
        },
        night: {
            description: 'Freezing Rain',
            image: 'http://openweathermap.org/img/wn/10n@2x.png',
        },
    },
    '71': {
        day: {
            description: 'Light Snow',
            image: 'http://openweathermap.org/img/wn/13d@2x.png',
        },
        night: {
            description: 'Light Snow',
            image: 'http://openweathermap.org/img/wn/13n@2x.png',
        },
    },
    '73': {
        day: {
            description: 'Snow',
            image: 'http://openweathermap.org/img/wn/13d@2x.png',
        },
        night: {
            description: 'Snow',
            image: 'http://openweathermap.org/img/wn/13n@2x.png',
        },
    },
    '75': {
        day: {
            description: 'Heavy Snow',
            image: 'http://openweathermap.org/img/wn/13d@2x.png',
        },
        night: {
            description: 'Heavy Snow',
            image: 'http://openweathermap.org/img/wn/13n@2x.png',
        },
    },
    '77': {
        day: {
            description: 'Snow Grains',
            image: 'http://openweathermap.org/img/wn/13d@2x.png',
        },
        night: {
            description: 'Snow Grains',
            image: 'http://openweathermap.org/img/wn/13n@2x.png',
        },
    },
    '80': {
        day: {
            description: 'Light Showers',
            image: 'http://openweathermap.org/img/wn/09d@2x.png',
        },
        night: {
            description: 'Light Showers',
            image: 'http://openweathermap.org/img/wn/09n@2x.png',
        },
    },
    '81': {
        day: {
            description: 'Showers',
            image: 'http://openweathermap.org/img/wn/09d@2x.png',
        },
        night: {
            description: 'Showers',
            image: 'http://openweathermap.org/img/wn/09n@2x.png',
        },
    },
    '82': {
        day: {
            description: 'Heavy Showers',
            image: 'http://openweathermap.org/img/wn/09d@2x.png',
        },
        night: {
            description: 'Heavy Showers',
            image: 'http://openweathermap.org/img/wn/09n@2x.png',
        },
    },
    '85': {
        day: {
            description: 'Light Snow Showers',
            image: 'http://openweathermap.org/img/wn/13d@2x.png',
        },
        night: {
            description: 'Light Snow Showers',
            image: 'http://openweathermap.org/img/wn/13n@2x.png',
        },
    },
    '86': {
        day: {
            description: 'Snow Showers',
            image: 'http://openweathermap.org/img/wn/13d@2x.png',
        },
        night: {
            description: 'Snow Showers',
            image: 'http://openweathermap.org/img/wn/13n@2x.png',
        },
    },
    '95': {
        day: {
            description: 'Thunderstorm',
            image: 'http://openweathermap.org/img/wn/11d@2x.png',
        },
        night: {
            description: 'Thunderstorm',
            image: 'http://openweathermap.org/img/wn/11n@2x.png',
        },
    },
    '96': {
        day: {
            description: 'Light Thunderstorms With Hail',
            image: 'http://openweathermap.org/img/wn/11d@2x.png',
        },
        night: {
            description: 'Light Thunderstorms With Hail',
            image: 'http://openweathermap.org/img/wn/11n@2x.png',
        },
    },
    '99': {
        day: {
            description: 'Thunderstorm With Hail',
            image: 'http://openweathermap.org/img/wn/11d@2x.png',
        },
        night: {
            description: 'Thunderstorm With Hail',
            image: 'http://openweathermap.org/img/wn/11n@2x.png',
        },
    },
};
