export interface WeatherData {
  id: string;
  city: string;
  temperature: number;
  description: string;
  humidity: number;
  windSpeed: number;
  windDirection: string;
  pressure: number;
  precipitation: number;
  cloud: number;
  visibility: number;
  lastUpdated: string;
}
