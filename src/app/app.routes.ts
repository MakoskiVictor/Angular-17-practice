import { Routes } from '@angular/router';
import { HomeComponent, Page1Component, Page2Component } from './pages';

export const routes: Routes = [
  { path:"", component: HomeComponent },
  { path:"page-1", component: Page1Component },
  { path:"page-2", component: Page2Component }
];
