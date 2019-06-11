import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';//si se quieren redireccionar hay que import
import { HeroesComponent } from './components/heroes/heroes.component';
import { AboutComponent} from './components/about/about.component';
import { HeroeComponent} from './components/heroe/heroe.component'

const APP_ROUTES:Routes = [//arreglo de rutas

    {path: 'home', component: HomeComponent},
    {path: 'about', component:AboutComponent},
    {path:'heroes', component:HeroesComponent},
    {path:'heroe/:id', component:HeroeComponent},
    {path: '**' ,pathMatch: 'full', redirectTo: 'home' }//RUTA DE EMERGENCIA
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash:true});//CONSTANTES CON MAYUS

