import { RouterModule, Routes } from '@angular/router';
import { DescriptionPokemonComponent } from './description-pokemon/description-pokemon.component';
import { GridCardsComponent } from './grid-cards/grid-cards.component';


const routes: Routes = [
    { path: 'home', component: GridCardsComponent },
    { path: 'description', component: DescriptionPokemonComponent },
    { path: '***', pathMatch:'full', redirectTo: 'home' }
];

export const appRouting = RouterModule.forRoot(routes); 
