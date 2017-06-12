import {Routes, RouterModule} from '@angular/router';
import {NotPageComponent} from './notpage/notpage.component'

const routes: Routes = [

    { path: '', redirectTo: 'login', pathMatch: 'full' },//默认到的地方
    { path: 'home', loadChildren: './home/home.module#HomeModule' },
    { path:'class', loadChildren: './class/class.module#ClassModule'},
    { path: '**', component: NotPageComponent}

];

export const routing = RouterModule.forRoot(routes);