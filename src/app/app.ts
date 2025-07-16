import { Component, signal } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { WeatherComponent } from './weather.component';

@Component({
  selector: 'app-root',
  imports: [WeatherComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  public title = signal('weather-app');
}
