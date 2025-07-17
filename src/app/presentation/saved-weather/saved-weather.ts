import { Component, Signal, effect, inject } from '@angular/core';

import { DatePipe } from '@angular/common';
import { WeatherApplicationService } from '../../application/weather.application';
import { WeatherData } from '../../domain/weather';

@Component({
  selector: 'app-saved-weather',
  imports: [],
  templateUrl: './saved-weather.html',
  styleUrl: './saved-weather.scss',
})
export class SavedWeather {
  private weatherApplicationService = inject(WeatherApplicationService);

  public savedWeather: Signal<WeatherData | null> =
    this.weatherApplicationService.savedWeatherSignal;

  // console.log(this.savedWeather()) on every change detection cycle

  constructor() {
    effect(() => {
      console.log(this.savedWeather());
    });
  }

  ngOnInit() {}
}
