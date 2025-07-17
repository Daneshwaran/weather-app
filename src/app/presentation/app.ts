import { Component, signal } from '@angular/core';

import { SearchBar } from './search-bar/search-bar';
import { WeatherComponent } from './weather-widget/weather.component';

@Component({
  selector: 'app-root',
  imports: [WeatherComponent, SearchBar],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  public title = signal('weather-app');
}
