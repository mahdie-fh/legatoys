import { Routes } from '@angular/router';
import { Layout } from './core/layout/layout/layout';
import { HomePage } from './features/home/home-page/home-page';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [{ path: '', component: HomePage }],
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
