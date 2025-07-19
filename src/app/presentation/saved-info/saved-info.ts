import { Component, EventEmitter, Input, Output, inject } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { SaveApplicationService } from '../../application/save.application';
import { WeatherApplicationService } from '../../application/weather.application';
import { WeatherData } from '../../domain/weather';

@Component({
  selector: 'app-saved-info',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
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
