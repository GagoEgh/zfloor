import { Routes } from '@angular/router';
import { ZorroComponent } from './pages/zorro/zorro.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

export const routes: Routes = [
    {path:'',redirectTo:'/zorro', pathMatch:'full'},
    {path:'zorro',component:ZorroComponent },
    {path:'company',loadComponent:()=>import('./pages/company/company.component').then(c=>c.CompanyComponent)},
    {path:'services',loadComponent:()=>import('./pages/services/services.component').then(c=>c.ServicesComponent)},
    {path:'projects',loadComponent:()=>import('./pages/projects/projects.component').then(c=>c.ProjectsComponent)},
    {path:'stocks',loadComponent:()=>import('./pages/stocks/stocks.component').then(c=>c.StocksComponent)},
    {path:'news',loadComponent:()=>import('./pages/news/news.component').then(c=>c.NewsComponent)},
    {path:'contacts',loadComponent:()=>import('./pages/contacts/contacts.component').then(c=>c.ContactsComponent)},
    {path:'reviews',loadComponent:()=>import('./pages/reviews/reviews.component').then(c=>c.ReviewsComponent)},

    {path:'**', component:PageNotFoundComponent}
];
