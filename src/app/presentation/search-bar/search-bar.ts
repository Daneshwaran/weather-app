import { Component, inject } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { WeatherApplicationService } from '../../application/weather.application';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
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
