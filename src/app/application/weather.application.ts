import { Injectable } from '@angular/core';
import { WeatherData } from '../domain/weather';
import { WeatherRepositoryService } from '../repository/weather.service';
import { signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class WeatherApplicationService {
  private weatherSignal = signal<WeatherData | null>(null);
  private loadingSignal = signal(false);
  private errorSignal = signal<string | null>(null);

  weather = this.weatherSignal.asReadonly();
  loading = this.loadingSignal.asReadonly();
  error = this.errorSignal.asReadonly();

  constructor(private weatherRepository: WeatherRepositoryService) {}

  async fetchWeather(city: string) {
    this.loadingSignal.set(true);
    this.errorSignal.set(null);

    try {
      const data = await this.weatherRepository.getWeather(city);
      this.weatherSignal.set(data);
    } catch (err) {
      this.errorSignal.set(
        err instanceof Error ? err.message : 'Unknown error'
      );
    } finally {
      this.loadingSignal.set(false);
    }
  }
}
