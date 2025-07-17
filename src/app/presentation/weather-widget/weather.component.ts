import { Component, Signal, inject } from '@angular/core';

import { CommonModule } from '@angular/common';
import { WeatherApplicationService } from '../../application/weather.application';
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
  private weatherApplicationService = inject(WeatherApplicationService);

  public weatherData: Signal<WeatherData | null> =
    this.weatherApplicationService.weather;
  public loading: Signal<boolean> = this.weatherApplicationService.loading;
  public error: Signal<string | null> = this.weatherApplicationService.error;

  ngOnInit() {
    // this.weatherApplicationService.fetchWeather();
  }
}
