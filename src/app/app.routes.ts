import { Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { DeadlineCountdownComponent } from './features/deadline-countdown/deadline-countdown.component';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'countdown', component: DeadlineCountdownComponent },
  { path: '**', redirectTo: '' }
];
