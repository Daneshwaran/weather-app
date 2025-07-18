import {
  Component,
  ComponentRef,
  Signal,
  ViewContainerRef,
  effect,
  inject,
} from '@angular/core';

import { DatePipe } from '@angular/common';
import { SavedInfo } from '../saved-info/saved-info';
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
  private vcr = inject(ViewContainerRef);
  private componentRefs = new Map<string, ComponentRef<SavedInfo>>();

  public savedWeather: Signal<WeatherData | null> =
    this.weatherApplicationService.savedWeatherSignal;

  public deleteWeather: Signal<string | null> =
    this.weatherApplicationService.deleteWeatherSignal;

  constructor() {
    effect(() => {
      const weather = this.savedWeather();
      if (weather) {
        if (this.componentRefs.has(weather.id)) {
          return;
        }
        const componentRef = this.vcr.createComponent(SavedInfo);
        componentRef.setInput('weather', weather);
        componentRef.setInput('id', weather.id);
        this.componentRefs.set(weather.id, componentRef);
      }
    });

    effect(() => {
      const deleteWeatherId = this.deleteWeather();
      if (deleteWeatherId !== null) {
        const componentRef = this.componentRefs.get(deleteWeatherId);
        if (componentRef) {
          componentRef.destroy();
          this.componentRefs.delete(deleteWeatherId);
        }
        // Clear the signal after processing
        this.weatherApplicationService.clearDeleteWeather();
      }
    });
  }
}
