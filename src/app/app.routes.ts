import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/home/home.routes.js').then((m) => m.HOME_ROUTES),
  },
  // {
  //   path: 'products',
  //   loadChildren: () =>
  //     import('./features/products/products.routes').then(m => m.PRODUCTS_ROUTES),
  // },
  // {
  //   path: 'blog',
  //   loadChildren: () =>
  //     import('./features/blog/blog.routes').then(m => m.BLOG_ROUTES),
  // },
  {
    path: '**',
    redirectTo: '',
  },
];
