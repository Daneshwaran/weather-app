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
        id: crypto.randomUUID(),
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
        wind_mph: response.current.wind_mph,
        wind_kph: response.current.wind_kph,
        wind_degree: response.current.wind_degree,
        wind_dir: response.current.wind_dir,
        pressure_mb: response.current.pressure_mb,
        pressure_in: response.current.pressure_in,
        precip_mm: response.current.precip_mm,
        precip_in: response.current.precip_in,
        feelslike_c: response.current.feelslike_c,
        feelslike_f: response.current.feelslike_f,
        vis_km: response.current.vis_km,
        vis_miles: response.current.vis_miles,
        uv: response.current.uv,
        gust_mph: response.current.gust_mph,
        gust_kph: response.current.gust_kph,
        last_updated_epoch: response.current.last_updated_epoch,
        last_updated: response.current.last_updated,
        temp_c: response.current.temp_c,
        temp_f: response.current.temp_f,
        is_day: response.current.is_day,
        condition: response.current.condition,
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
