export interface Location {
    temperature: number;
    temp_low: number;
    temp_high: number;
    weather_code: number;
    city: string;
    country: string;
    latitude: number;
    longitude: number;
    id: string;
    sunrise: string;
    sunset: string;
    time: string;
    dragging: () => void;
}
