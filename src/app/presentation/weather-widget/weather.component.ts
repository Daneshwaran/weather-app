import { Component, inject, signal } from '@angular/core';

import { CommonModule } from '@angular/common';
import { WeatherData } from '../../domain/weather';
import { WeatherRepositoryService } from '../../repository/weather.service';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss',
})
export class WeatherComponent {
  public weatherService = inject(WeatherRepositoryService);

  weather = signal<WeatherData | null>(null);

  getWeather(city: string) {
    this.weatherService.getWeather(city).then((data) => {
      this.weather.set(data);
    });
  }

  ngOnInit() {
    this.getWeather('London');
  }
}
