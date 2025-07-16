import { Component, inject } from '@angular/core';

import { CommonModule } from '@angular/common';
import { WeatherService } from './repository/weather.service';

export interface WeatherData {
  temperature: number;
  description: string;
  humidity: number;
  windSpeed: number;
}

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [CommonModule],
  template: `
    @if (weather(); as data) {
    <div>
      <h2>Weather Information</h2>
      <p>Temperature: {{ data.temperature }}°C</p>
      <p>Description: {{ data.description }}</p>
      <p>Humidity: {{ data.humidity }}%</p>
      <p>Wind Speed: {{ data.windSpeed }} km/h</p>
    </div>
    } @else {
    <div>
      <h2>Loading weather data...</h2>
    </div>
    }
  `,
})
export class WeatherComponent {
  private weatherService = inject(WeatherService);

  get weather() {
    return this.weatherService.getWeather();
  }
}
