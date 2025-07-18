import { Component, Signal, inject } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SaveApplicationService } from '../../application/save.application';
import { WeatherApplicationService } from '../../application/weather.application';
import { WeatherData } from '../../domain/weather';
import { WeatherRepositoryService } from '../../repository/weather.service';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss',
})
export class WeatherComponent {
  public weatherService = inject(WeatherRepositoryService);
  private weatherApplicationService = inject(WeatherApplicationService);
  private saveApplicationService = inject(SaveApplicationService);

  public weatherData: Signal<WeatherData | null> =
    this.weatherApplicationService.weather;
  public loading: Signal<boolean> = this.weatherApplicationService.loading;
  public error: Signal<string | null> = this.weatherApplicationService.error;

  saveWeather(weather: WeatherData) {
    this.saveApplicationService.saveWeather(weather);
  }
}
