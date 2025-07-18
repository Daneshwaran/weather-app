import { Component, EventEmitter, Input, Output, inject } from '@angular/core';

import { SaveApplicationService } from '../../application/save.application';
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

  private saveApplicationService = inject(SaveApplicationService);

  deleteSavedWeather(id: string) {
    this.saveApplicationService.deleteSavedWeather(id);
  }
}
