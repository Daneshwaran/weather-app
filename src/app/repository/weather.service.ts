import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private weatherSignal = signal({
    temperature: 20,
    description: 'Rainy',
    humidity: 65,
    windSpeed: 10,
  });

  getWeather() {
    return this.weatherSignal;
  }

  updateWeather(newData: any) {
    this.weatherSignal.set(newData);
  }
}
