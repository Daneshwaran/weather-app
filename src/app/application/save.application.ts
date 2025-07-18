import { ComponentRef, ViewContainerRef } from '@angular/core';
import { Injectable, effect, inject, signal } from '@angular/core';

import { SavedInfo } from '../presentation/saved-info/saved-info';
import { WeatherData } from '../domain/weather';

@Injectable({ providedIn: 'root' })
export class SaveApplicationService {
  private componentRefs = new Map<string, ComponentRef<SavedInfo>>();
  private vcr: ViewContainerRef | null = null;

  // Signals
  private savedWeatherSignal = signal<WeatherData | null>(null);
  private deleteWeatherSignal = signal<string | null>(null);
  private savedCityCountSignal = signal<number>(0);

  // Public readonly signals
  public savedWeather = this.savedWeatherSignal.asReadonly();
  public deleteWeather = this.deleteWeatherSignal.asReadonly();
  public savedCityCount = this.savedCityCountSignal.asReadonly();

  constructor() {
    this.setupEffects();
  }

  setViewContainerRef(vcr: ViewContainerRef) {
    this.vcr = vcr;
  }

  saveWeather(weather: WeatherData) {
    this.savedWeatherSignal.set({ ...weather });
  }

  deleteSavedWeather(id: string) {
    this.deleteWeatherSignal.set(id);
  }

  clearDeleteWeather() {
    this.deleteWeatherSignal.set(null);
  }

  private setupEffects() {
    effect(() => {
      const weather = this.savedWeather();
      if (weather && this.vcr) {
        if (this.componentRefs.has(weather.id)) {
          return; // Component already exists
        }

        const componentRef = this.vcr.createComponent(SavedInfo);
        componentRef.setInput('weather', weather);
        componentRef.setInput('id', weather.id);
        this.componentRefs.set(weather.id, componentRef);
        this.savedCityCountSignal.set(this.savedCityCountSignal() + 1);
      }
    });

    effect(() => {
      const deleteWeatherId = this.deleteWeather();
      if (deleteWeatherId !== null) {
        const componentRef = this.componentRefs.get(deleteWeatherId);
        if (componentRef) {
          componentRef.destroy();
          this.componentRefs.delete(deleteWeatherId);
          this.savedCityCountSignal.set(this.savedCityCountSignal() - 1);
        }
        this.clearDeleteWeather();
      }
    });
  }

  destroy() {
    this.componentRefs.forEach((ref) => ref.destroy());
    this.componentRefs.clear();
  }
}
