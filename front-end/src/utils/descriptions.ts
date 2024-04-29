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
            image: './image/weather-icons/cloudy.svg',
        },
        night: {
            description: 'Cloudy',
            image: './image/weather-icons/cloudy.svg',
        },
    },
    '45': {
        day: {
            description: 'Foggy',
            image: './image/weather-icons/fog-day.svg',
        },
        night: {
            description: 'Foggy',
            image: './image/weather-icons/fog-night.svg',
        },
    },
    '48': {
        day: {
            description: 'Rime Fog',
            image: './image/weather-icons/fog-day.svg',
        },
        night: {
            description: 'Rime Fog',
            image: './image/weather-icons/fog-day.svg',
        },
    },
    '51': {
        day: {
            description: 'Light Drizzle',
            image: './image/weather-icons/partly-cloudy-day-drizzle.svg',
        },
        night: {
            description: 'Light Drizzle',
            image: './image/weather-icons/partly-cloudy-night-drizzle-drizzle.svg',
        },
    },
    '53': {
        day: {
            description: 'Drizzle',
            image: './image/weather-icons/drizzle.svg',
        },
        night: {
            description: 'Drizzle',
            image: './image/weather-icons/drizzle.svg',
        },
    },
    '55': {
        day: {
            description: 'Heavy Drizzle',
            image: './image/weather-icons/extreme-day-drizzle.svg',
        },
        night: {
            description: 'Heavy Drizzle',
            image: './image/weather-icons/extreme-night-drizzle.svg',
        },
    },
    '56': {
        day: {
            description: 'Light Freezing Drizzle',
            image: './image/weather-icons/drizzle.svg',
        },
        night: {
            description: 'Light Freezing Drizzle',
            image: './image/weather-icons/drizzle.svg',
        },
    },
    '57': {
        day: {
            description: 'Freezing Drizzle',
            image: './image/weather-icons/drizzle.svg',
        },
        night: {
            description: 'Freezing Drizzle',
            image: './image/weather-icons/drizzle.svg',
        },
    },
    '61': {
        day: {
            description: 'Light Rain',
            image: './image/weather-icons/rain.svg',
        },
        night: {
            description: 'Light Rain',
            image: './image/weather-icons/rain.svg',
        },
    },
    '63': {
        day: {
            description: 'Rain',
            image: './image/weather-icons/overcast-rain.svg',
        },
        night: {
            description: 'Rain',
            image: './image/weather-icons/overcast-rain.svg',
        },
    },
    '65': {
        day: {
            description: 'Heavy Rain',
            image: './image/weather-icons/extreme-rain.svg',
        },
        night: {
            description: 'Heavy Rain',
            image: './image/weather-icons/extreme-rain.svg',
        },
    },
    '66': {
        day: {
            description: 'Light Freezing Rain',
            image: './image/weather-icons/extreme-rain.svg',
        },
        night: {
            description: 'Light Freezing Rain',
            image: './image/weather-icons/extreme-rain.svg',
        },
    },
    '67': {
        day: {
            description: 'Freezing Rain',
            image: './image/weather-icons/extreme-rain.svg',
        },
        night: {
            description: 'Freezing Rain',
            image: './image/weather-icons/extreme-rain.svg',
        },
    },
    '71': {
        day: {
            description: 'Light Snow',
            image: './image/weather-icons/snow.svg',
        },
        night: {
            description: 'Light Snow',
            image: './image/weather-icons/snow.svg',
        },
    },
    '73': {
        day: {
            description: 'Snow',
            image: './image/weather-icons/overcast-snow.svg',
        },
        night: {
            description: 'Snow',
            image: './image/weather-icons/overcast-snow.svg',
        },
    },
    '75': {
        day: {
            description: 'Heavy Snow',
            image: './image/weather-icons/extreme-snow.svg',
        },
        night: {
            description: 'Heavy Snow',
            image: './image/weather-icons/extreme-snow.svg',
        },
    },
    '77': {
        day: {
            description: 'Snow Grains',
            image: './image/weather-icons/hail.svg',
        },
        night: {
            description: 'Snow Grains',
            image: './image/weather-icons/hail.svg',
        },
    },
    '80': {
        day: {
            description: 'Light Showers',
            image: './image/weather-icons/overcast-rain.svg',
        },
        night: {
            description: 'Light Showers',
            image: './image/weather-icons/overcast-rain.svg',
        },
    },
    '81': {
        day: {
            description: 'Showers',
            image: './image/weather-icons/overcast-rain.svg',
        },
        night: {
            description: 'Showers',
            image: './image/weather-icons/overcast-rain.svg',
        },
    },
    '82': {
        day: {
            description: 'Heavy Showers',
            image: './image/weather-icons/extreme-rain.svg',
        },
        night: {
            description: 'Heavy Showers',
            image: './image/weather-icons/extreme-rain.svg',
        },
    },
    '85': {
        day: {
            description: 'Light Snow Showers',
            image: './image/weather-icons/snow.svg',
        },
        night: {
            description: 'Light Snow Showers',
            image: './image/weather-icons/snow.svg',
        },
    },
    '86': {
        day: {
            description: 'Snow Showers',
            image: './image/weather-icons/snow.svg',
        },
        night: {
            description: 'Snow Showers',
            image: './image/weather-icons/snow.svg',
        },
    },
    '95': {
        day: {
            description: 'Thunderstorm',
            image: './image/weather-icons/thunderstorm-rain.svg',
        },
        night: {
            description: 'Thunderstorm',
            image: './image/weather-icons/thunderstorm-rain.svg',
        },
    },
    '96': {
        day: {
            description: 'Light Thunderstorms With Hail',
            image: './image/weather-icons/hail.svg',
        },
        night: {
            description: 'Light Thunderstorms With Hail',
            image: './image/weather-icons/hail.svg',
        },
    },
    '99': {
        day: {
            description: 'Thunderstorm With Hail',
            image: './image/weather-icons/extreme-hail.svg',
        },
        night: {
            description: 'Thunderstorm With Hail',
            image: './image/weather-icons/extreme-hail.svg',
        },
    },
};
