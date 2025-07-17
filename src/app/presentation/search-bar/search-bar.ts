import { Component, inject } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { WeatherApplicationService } from '../../application/weather.application';

@Component({
  selector: 'app-search-bar',
  imports: [FormsModule],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.scss',
})
export class SearchBar {
  private weatherApplicationService = inject(WeatherApplicationService);
  public city: string = 'Bengaluru';

  search() {
    this.weatherApplicationService.fetchWeather(this.city);
  }

  clear() {
    this.weatherApplicationService.clearWeather();
    this.city = '';
  }
}
