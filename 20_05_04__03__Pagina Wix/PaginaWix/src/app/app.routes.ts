import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SmartPhonesComponent } from './components/products/smart-phones/smart-phones.component';
import { NotFoundComponent } from './components/shared/not-found/not-found.component';
import { LineaBlancaComponent } from './components/products/linea-blanca/linea-blanca.component';
import { FotografiaComponent } from './components/products/fotografia/fotografia.component';
import { DetailsProductsComponent } from './details-products/details-products.component';

const Rutas: Routes = [
    { path: '', component: HomeComponent },
    { path: 'smartphone', component: SmartPhonesComponent },
    { path: 'lineaBlanca', component: LineaBlancaComponent },
    { path: 'fotografia', component: FotografiaComponent },
    { path: 'detail-products/:id', component: DetailsProductsComponent },
    { path: 'notFound', component: NotFoundComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'notFound' },
];

export const APP_ROUTES = RouterModule.forRoot(Rutas);