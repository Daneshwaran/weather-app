import {
  Injectable,
  ResourceRef,
  inject,
  resource,
  signal,
} from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { WeatherData } from '../domain/weather';
import { WeatherResponseDto } from './dto/weather.response.dto';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherRepositoryService {
  private apiKey = '842fd29809dc4886a6c111405251607';
  private baseUrl = 'https://api.weatherapi.com/v1/current.json';

  private http = inject(HttpClient);

  getWeather(city: string = 'Bengaluru'): Promise<WeatherData> {
    const url = `${this.baseUrl}?key=${this.apiKey}&q=${city}&aqi=no`;

    return firstValueFrom(this.http.get<WeatherResponseDto>(url)).then(
      (response: WeatherResponseDto) => ({
        city: response.location.name,
        temperature: response.current.temp_c,
        description: response.current.condition.text,
        humidity: response.current.humidity,
        windSpeed: response.current.wind_kph,
        windDirection: response.current.wind_dir,
        pressure: response.current.pressure_mb,
        precipitation: response.current.precip_mm,
        cloud: response.current.cloud,
        visibility: response.current.vis_km,
        lastUpdated: response.current.last_updated,
      })
    );
  }

  //TODO: fix this resource approach
  // readonly weatherResource = resource({
  //   loader: async () => {
  //     const url = `${this.baseUrl}?key=${this.apiKey}&q=London&aqi=no`;
  //     const response = await fetch(url);
  //     const data = await response.json();
  //     return {
  //       temperature: data.current.temp_c,
  //       description: data.current.condition.text,
  //       humidity: data.current.humidity,
  //       windSpeed: data.current.wind_kph,
  //     };
  //   },
  // });

  //TODO: fix this resource approach
  // getWeather2(city: string = 'London'): ResourceRef<WeatherData | undefined> {
  //   const url = `${this.baseUrl}?key=${this.apiKey}&q=${city}&aqi=no`;

  //   return resource({
  //     loader: async () => {
  //       const response = await fetch(url);
  //       const data = await response.json();
  //       return {
  //         temperature: data.current.temp_c,
  //         description: data.current.condition.text,
  //         humidity: data.current.humidity,
  //         windSpeed: data.current.wind_kph,
  //       };
  //     },
  //   });
  // }
}
