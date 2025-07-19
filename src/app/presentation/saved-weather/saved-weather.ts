import {
  Component,
  OnDestroy,
  OnInit,
  ViewContainerRef,
  inject,
} from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { SaveApplicationService } from '../../application/save.application';
import { WeatherApplicationService } from '../../application/weather.application';

@Component({
  selector: 'app-saved-weather',
  standalone: true,
  imports: [MatCardModule, MatIconModule],
  templateUrl: './saved-weather.html',
  styleUrl: './saved-weather.scss',
})
export class SavedWeather implements OnInit, OnDestroy {
  private saveApplicationService = inject(SaveApplicationService);
  private vcr = inject(ViewContainerRef);
  private weatherApplicationService = inject(WeatherApplicationService);
  public savedCityCount = this.saveApplicationService.savedCityCount;

  ngOnInit() {
    this.saveApplicationService.setViewContainerRef(this.vcr);
  }

  ngOnDestroy() {
    this.saveApplicationService.destroy();
  }
}
