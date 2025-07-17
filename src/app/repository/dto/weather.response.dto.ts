export interface WeatherResponseDto {
  location: {
    name: string;
    region: string;
    country: string;
    lat: number;
    lon: number;
    tz_id: string;
    localtime_epoch: number;
    localtime: string;
  };
  current: {
    last_updated_epoch: number;
    last_updated: string;
    temp_c: number;
    temp_f: number;
    is_day: number;
    condition: {
      text: string;
      icon: string;
      code: number;
    };
    wind_mph: number;
    wind_kph: number;
    wind_degree: number;
    wind_dir: string;
    pressure_mb: number;
    pressure_in: number;
    precip_mm: number;
    precip_in: number;
    humidity: number;
    cloud: number;
    feelslike_c: number;
    feelslike_f: number;
    vis_km: number;
    vis_miles: number;
    uv: number;
    gust_mph: number;
    gust_kph: number;
  };
}

// {
//     "location": {
//         "name": "Bengaluru",
//         "region": "Karnataka",
//         "country": "India",
//         "lat": 12.9833,
//         "lon": 77.5833,
//         "tz_id": "Asia/Kolkata",
//         "localtime_epoch": 1752746058,
//         "localtime": "2025-07-17 15:24"
//     },
//     "current": {
//         "last_updated_epoch": 1752745500,
//         "last_updated": "2025-07-17 15:15",
//         "temp_c": 28.3,
//         "temp_f": 82.9,
//         "is_day": 1,
//         "condition": {
//             "text": "Partly cloudy",
//             "icon": "//cdn.weatherapi.com/weather/64x64/day/116.png",
//             "code": 1003
//         },
//         "wind_mph": 11.6,
//         "wind_kph": 18.7,
//         "wind_degree": 268,
//         "wind_dir": "W",
//         "pressure_mb": 1009.0,
//         "pressure_in": 29.8,
//         "precip_mm": 0.65,
//         "precip_in": 0.03,
//         "humidity": 66,
//         "cloud": 50,
//         "feelslike_c": 30.5,
//         "feelslike_f": 86.9,
//         "windchill_c": 26.2,
//         "windchill_f": 79.2,
//         "heatindex_c": 27.6,
//         "heatindex_f": 81.6,
//         "dewpoint_c": 18.5,
//         "dewpoint_f": 65.3,
//         "vis_km": 6.0,
//         "vis_miles": 3.0,
//         "uv": 2.7,
//         "gust_mph": 14.5,
//         "gust_kph": 23.3
//     }
// }
