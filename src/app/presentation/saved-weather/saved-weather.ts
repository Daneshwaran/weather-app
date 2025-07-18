import {
  Component,
  OnDestroy,
  OnInit,
  ViewContainerRef,
  inject,
} from '@angular/core';

import { SaveApplicationService } from '../../application/save.application';
import { WeatherApplicationService } from '../../application/weather.application';

@Component({
  selector: 'app-saved-weather',
  imports: [],
  templateUrl: './saved-weather.html',
  styleUrl: './saved-weather.scss',
})
export class SavedWeather implements OnInit, OnDestroy {
  private saveApplicationService = inject(SaveApplicationService);
  private vcr = inject(ViewContainerRef);
  private weatherApplicationService = inject(WeatherApplicationService);
  public savedWeather = this.weatherApplicationService.weather;

  ngOnInit() {
    this.saveApplicationService.setViewContainerRef(this.vcr);
  }

  ngOnDestroy() {
    this.saveApplicationService.destroy();
  }
}
