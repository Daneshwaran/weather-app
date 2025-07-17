import { App } from './app/presentation/app';
import { bootstrapApplication } from '@angular/platform-browser';
import { config } from './app/app.config.server';

const bootstrap = () => bootstrapApplication(App, config);

export default bootstrap;
