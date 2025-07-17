import { Component, signal } from '@angular/core';

import { SavedWeather } from './saved-weather/saved-weather';
import { SearchBar } from './search-bar/search-bar';
import { WeatherComponent } from './weather-widget/weather.component';

@Component({
  selector: 'app-root',
  imports: [WeatherComponent, SearchBar, SavedWeather],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  public title = signal('weather-app');
}
