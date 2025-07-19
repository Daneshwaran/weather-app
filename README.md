# 🌤️ Weather App

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.1.0. with Domain Driven Design

Link to app: https://weather-app-five-beta-82.vercel.app/

<img width="2338" height="1285" alt="Screenshot 2025-07-18 at 4 17 30 PM" src="https://github.com/user-attachments/assets/8af093f6-a2da-4567-95ed-0224caf967ad" />

## 🚀 Features

### Core Functionality

- **Real-time Weather Data**: Fetch current weather information for any city worldwide
- **Search & Display**: Search for cities and view comprehensive weather details
- **Save Weather Data**: Save favorite cities' weather information for quick access
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Error Handling**: Graceful error handling with user-friendly messages

### Weather Information Display

- Current temperature (Celsius/Fahrenheit)
- Weather condition with descriptions
- Humidity, wind speed, and direction
- Atmospheric pressure and precipitation
- Visibility and UV index
- "Feels like" temperature
- Last updated timestamp

## 🛠️ Technology Stack

### Frontend Framework

- **Angular 20.1.0** - Latest version with modern features
- **TypeScript 5.8.2** - Type-safe development
- **Angular Material 20.1.2** - Material Design components
- **Angular CDK 20.1.2** - Component development kit

### Architecture & Patterns

- **Domain-Driven Design (DDD)** - Clean architecture implementation
- **Repository Pattern** - Data access abstraction
- **Application Services** - Business logic layer
- **Presentation Layer** - UI components separation
- **Signal-based State Management** - Angular's modern reactive state

### Key Angular Features Used

- **Angular Signals** - Reactive state management
- **Angular Effects** - Side effect handling
- **Dependency Injection** - Service management
- **Component Communication** - Input/Output patterns
- **Dynamic Component Creation** - Runtime component instantiation
- **ViewContainerRef** - Dynamic view management

### Styling & UI

- **SCSS/Sass** - Advanced CSS preprocessing
- **Angular Material Components** - Consistent UI design
- **Responsive Grid Layout** - CSS Grid and Flexbox
- **Custom Component Styling** - Modular CSS architecture

### Development Tools

- **Angular CLI 20.1.0** - Development and build tools
- **Jasmine & Karma** - Unit testing framework
- **Prettier** - Code formatting
- **TypeScript Compiler** - Type checking and compilation

### External APIs

- **WeatherAPI.com** - Real-time weather data
- **HTTP Client** - RESTful API communication
- **RxJS** - Reactive programming utilities

## 📁 Project Structure

```
src/app/
├── application/          # Business logic layer
│   ├── save.application.ts
│   └── weather.application.ts
├── domain/              # Domain models and interfaces
│   └── weather.ts
├── presentation/        # UI components
│   ├── saved-info/
│   ├── saved-weather/
│   ├── search-bar/
│   └── weather-widget/
├── repository/          # Data access layer
│   ├── dto/
│   └── weather.service.ts
└── app.*               # Main application files
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd weather-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   ng serve
   ```

4. **Open your browser**
   Navigate to `http://localhost:4200/`

## 🏗️ Build & Deployment

### Development Build

```bash
ng build
```

### Production Build

```bash
ng build --configuration production
```

### Server-Side Rendering (SSR)

```bash
npm run serve:ssr:weather-app
```

## 🧪 Testing

### Unit Tests

```bash
ng test
```

### End-to-End Tests

```bash
ng e2e
```

## 🎨 Key Features Implementation

### Signal-Based State Management

- Reactive state updates using Angular Signals
- Automatic UI updates when data changes
- Efficient change detection

### Dynamic Component Creation

- Runtime creation of saved weather components
- Dynamic view container management
- Component lifecycle handling

### Error Handling

- Comprehensive error boundaries
- User-friendly error messages
- Graceful degradation

### Responsive Design

- Mobile-first approach
- CSS Grid and Flexbox layouts
- Material Design responsive breakpoints

## 🔧 Development Practices

- **TypeScript** for type safety
- **ESLint** for code quality
- **Prettier** for consistent formatting
- **Component-based architecture**
- **Service-oriented design**
- **Reactive programming patterns**

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🔗 Additional Resources

- [Angular Documentation](https://angular.dev/)
- [Angular Material](https://material.angular.io/)
- [WeatherAPI Documentation](https://www.weatherapi.com/docs/)
- [Angular CLI Overview](https://angular.dev/tools/cli)
