import { Component, EventEmitter, Input, Output, inject } from '@angular/core';

import { WeatherApplicationService } from '../../application/weather.application';
import { WeatherData } from '../../domain/weather';

@Component({
  selector: 'app-saved-info',
  imports: [],
  templateUrl: './saved-info.html',
  styleUrl: './saved-info.scss',
})
export class SavedInfo {
  @Input() weather!: WeatherData;
  @Input() id!: string;

  private weatherApplicationService = inject(WeatherApplicationService);
  deleteSavedWeather(id: string) {
    this.weatherApplicationService.deleteSavedWeather(id);
  }
}
