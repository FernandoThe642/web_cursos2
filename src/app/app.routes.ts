import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AgregarCursoComponent } from './pages/agregar-curso/agregar-curso.component';
import { CursosComponent } from './pages/cursos/cursos.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'pages/inicio', 
        pathMatch: 'full'  // Coincidecon la ruta vacía
    },
    {
        path: 'pages/inicio',
        component: InicioComponent
    },
    {
        path:'pages/cursos',
        component: CursosComponent
    },
    {
        path:'pages/agregar-curso',
        component: AgregarCursoComponent
    },
    {
        path: 'pages/contacto',
        component: ContactoComponent
    }
];
