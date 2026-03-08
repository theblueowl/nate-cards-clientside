import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home-page/home-page.component').then((m) => m.HomePageComponent),
    title: 'Nate.Cards | Рачно изработени поклони за твоите најблиски',
    pathMatch: 'full',
  },
  {
    path: 'portfolio',
    loadComponent: () =>
      import('./pages/portfolio-page/portfolio-page.component').then(
        (m) => m.PortfolioPageComponent,
      ),
    title: 'Nate.Cards | Мои Изработки',
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact-page/contact-page.component').then((m) => m.ContactPageComponent),
    title: 'Nate.Cards | Контактирај Ме',

  },
];
