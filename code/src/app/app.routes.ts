import { Routes } from '@angular/router';

export const routes: Routes = [
    {
    path: '',
    loadComponent: () => import('./components/home/home.component')
        .then(m => m.HomeComponent)
    },
    {
        path: 'home',
        loadComponent: () => import('./components/home/home.component')
        .then(m => m.HomeComponent)
    },
    {
        path: 'contact',
        loadComponent: () => import('./components/contact/contact.component')
        .then(m => m.ContactComponent)
    },
    {
        path: 'gallery',
        loadComponent: () => import('./components/gallery/gallery.component')
        .then(m => m.GalleryComponent)
    },
    {
        path: 'services',
        loadComponent: () => import('./components/offerings/offerings.component')
        .then(m => m.OfferingsComponent)
    },


    { path: '**', redirectTo: '' }
];
