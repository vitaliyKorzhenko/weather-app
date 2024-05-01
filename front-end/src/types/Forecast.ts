// Generated by https://quicktype.io

export interface Forecast {
    current: Current;
    daily: DailyHourly[];
    hourly: DailyHourly[];
}

export interface Current {
    time: string;
    temperature: number;
    humidity: number;
    feels_like: number;
    precipitation: number;
    rain: number;
    showers: number;
    snowfall: number;
    weather_code: number;
    pressure: number;
    uv_index: number;
    us_aqi: number;
    sunrise: string;
    sunset: string;
    wind_speed: number;
    wind_direction: number;
    temp_high: number;
    temp_low: number;
    city: string;
    country: string;
}

export interface DailyHourly {
    time: string;
    temperature: number;
    precipitation_probability: number;
    weather_code: number;
    sunrise: string;
    sunset: string;
}
